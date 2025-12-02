import React, { useEffect } from 'react'

const BackgroundElements = () => {
  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight

      // Apply parallax effect to background elements
      const elements = document.querySelectorAll('.bg-element')
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.02
        const x = (mouseX - 0.5) * 100 * speed
        const y = (mouseY - 0.5) * 100 * speed
        
        element.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Planet */}
      <div
        className="bg-element planet absolute top-[20%] left-[80%]"
        style={{ transform: 'translate(0, 0)' }}
      />
      
      {/* Asteroid */}
      <div
        className="bg-element asteroid absolute top-[60%] left-[10%]"
        style={{ transform: 'translate(0, 0)' }}
      />
      
      {/* Comet */}
      <div
        className="bg-element comet absolute top-[10%] left-[20%]"
        style={{ transform: 'translate(0, 0)' }}
      />
      
      {/* Nebula */}
      <div
        className="bg-element nebula absolute top-[70%] left-[60%]"
        style={{ transform: 'translate(0, 0)' }}
      />
      
      {/* Additional space objects */}
      <div
        className="bg-element absolute top-[30%] left-[70%] w-12 h-12 rounded-full opacity-30 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #ffd93d, #ffb700)',
          transform: 'translate(0, 0)'
        }}
      />
      
      <div
        className="bg-element absolute top-[80%] left-[20%] w-6 h-6 rounded-full opacity-40 animate-twinkle"
        style={{
          background: 'radial-gradient(circle, #00d4ff, transparent)',
          transform: 'translate(0, 0)'
        }}
      />
      
      <div
        className="bg-element absolute top-[15%] left-[60%] w-16 h-16 rounded-full opacity-20 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3), transparent)',
          transform: 'translate(0, 0)'
        }}
      />
    </div>
  )
}

export default BackgroundElements
