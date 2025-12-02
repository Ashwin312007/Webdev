import React, { useEffect, useRef, useState } from 'react'

// Legacy MOVIS-style cursor: 20px glowing circle + subtle trailing dots
// Trails can be toggled with the enableTrails prop if needed later
const LegacyCursor = ({ enableTrails = true, trailCount = 8 }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const trailsRef = useRef([])
  const frameRef = useRef(null)

  useEffect(() => {
    // Hide system cursor while active
    const prevCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    const handleMouseMove = (e) => {
      const nx = e.clientX
      const ny = e.clientY
      setPos({ x: nx, y: ny })
      if (enableTrails) {
        trailsRef.current.push({ x: nx, y: ny, t: Date.now() })
        if (trailsRef.current.length > trailCount) trailsRef.current.shift()
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      // Restore system cursor
      document.body.style.cursor = prevCursor || ''
      cancelAnimationFrame(frameRef.current)
    }
  }, [enableTrails, trailCount])

  // Animation loop to gently fade trails (optional)
  const [, setTick] = useState(0)
  useEffect(() => {
    const loop = () => {
      setTick((t) => (t + 1) % 1000)
      frameRef.current = requestAnimationFrame(loop)
    }
    frameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const cursorStyle = {
    position: 'fixed',
    left: pos.x + 'px',
    top: pos.y + 'px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(0,212,255,0.9) 0%, rgba(0,212,255,0.35) 40%, rgba(0,212,255,0.0) 70%)',
    boxShadow: '0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4) ',
    zIndex: 9999,
  }

  const renderTrails = () => {
    if (!enableTrails) return null
    const items = trailsRef.current
    return items.map((p, i) => {
      const k = `${p.t}-${i}`
      // Newer points should be brighter
      const opacity = (i + 1) / (items.length + 1)
      const size = 6
      return (
        <div
          key={k}
          style={{
            position: 'fixed',
            left: p.x + 'px',
            top: p.y + 'px',
            width: size + 'px',
            height: size + 'px',
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0,212,255,0.9) 0%, rgba(0,212,255,0.0) 70%)',
            boxShadow: '0 0 10px rgba(0,212,255,0.7)',
            opacity,
            zIndex: 9998,
          }}
        />
      )
    })
  }

  return (
    <>
      <div style={cursorStyle} />
      {renderTrails()}
    </>
  )
}

export default LegacyCursor
