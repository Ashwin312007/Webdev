import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import StarField from './components/StarField'
import BackgroundElements from './components/BackgroundElements'
import Competitions from './components/Competitions'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import LegacyCursor from './components/LegacyCursor'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-space-dark text-white">
      <LegacyCursor />
      {/* Background Effects */}
      <StarField />
      <BackgroundElements />
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Competitions />
            <Skills />
            <Achievements />
            <Contact />
          </main>
        } />
      </Routes>
    </div>
  )
}

export default App
