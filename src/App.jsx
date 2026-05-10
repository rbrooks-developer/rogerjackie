import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SplashPage from './components/SplashPage'

import './App.css'

export default function App() {
  const [showSlideshow, setShowSlideshow] = useState(false)

  if (!showSlideshow) {
    return <SplashPage onPlay={() => setShowSlideshow(true)} />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}
