import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trails, setTrails] = useState([])

  useEffect(() => {
    let animationFrameId

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePos(newPos)

      // Create trail effect
      setTrails(prevTrails => {
        const newTrails = [...prevTrails, { ...newPos, id: Date.now() }]
        return newTrails.slice(-5) // Keep only last 5 trail points
      })
    }

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .hoverable, .card-hover, .btn-glow')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    // Animate trails
    const animateTrails = () => {
      setTrails(prevTrails => 
        prevTrails.map((trail, index) => ({
          ...trail,
          opacity: (index + 1) / 5 * 0.6
        }))
      )
      animationFrameId = requestAnimationFrame(animateTrails)
    }
    animateTrails()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`cursor-custom ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity || (index + 1) / 5 * 0.6,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
