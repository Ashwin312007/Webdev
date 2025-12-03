import { forwardRef, useRef, useState, useCallback } from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
  magneticRadius?: number;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ magneticStrength = 0.4, magneticRadius = 150, className, children, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      if (distance < magneticRadius) {
        const factor = (1 - distance / magneticRadius) * magneticStrength;
        setPosition({
          x: distanceX * factor,
          y: distanceY * factor
        });
      }
    }, [magneticStrength, magneticRadius]);

    const handleMouseLeave = useCallback(() => {
      setPosition({ x: 0, y: 0 });
    }, []);

    return (
      <div
        ref={containerRef}
        className="inline-block"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          ref={ref}
          className={cn('transition-transform duration-100', className)}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: position.x === 0 && position.y === 0 ? 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.05s linear'
          }}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';
