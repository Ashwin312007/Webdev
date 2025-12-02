import React, { useEffect, useState } from 'react'

const StarField = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const createStars = () => {
      const numberOfStars = 200
      const starArray = []

      for (let i = 0; i < numberOfStars; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDelay: Math.random() * 2,
        })
      }
      setStars(starArray)
    }

    createStars()
  }, [])

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight

      // Apply parallax effect to stars
      const starElements = document.querySelectorAll('.star')
      starElements.forEach((star, index) => {
        const speed = ((index % 3) + 1) * 0.5
        const x = (mouseX - 0.5) * speed
        const y = (mouseY - 0.5) * speed
        
        star.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default StarField
