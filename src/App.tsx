import React, { useState, useEffect } from 'react'
import LockScreen from './components/LockScreen'
import Dashboard from './components/Dashboard'

function App() {
  const [isLocked, setIsLocked] = useState(true)
  const [lastActivity, setLastActivity] = useState(Date.now())

  // Auto-lock after 5 minutes of inactivity
  const AUTO_LOCK_DELAY = 5 * 60 * 1000 // 5 minutes

  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now())
    }

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => {
      document.addEventListener(event, handleActivity)
    })

    const checkInactivity = setInterval(() => {
      if (Date.now() - lastActivity > AUTO_LOCK_DELAY && !isLocked) {
        setIsLocked(true)
      }
    }, 1000)

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity)
      })
      clearInterval(checkInactivity)
    }
  }, [lastActivity, isLocked])

  const handleUnlock = () => {
    setIsLocked(false)
    setLastActivity(Date.now())
  }

  const handleLock = () => {
    setIsLocked(true)
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      {isLocked ? (
        <LockScreen onUnlock={handleUnlock} />
      ) : (
        <Dashboard onLock={handleLock} />
      )}
    </div>
  )
}

export default App