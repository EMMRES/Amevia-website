import { useEffect, useState } from 'react'

const NewYearAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    const checkDate = () => {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth() + 1 // 1-12
      const day = today.getDate()
      
      // Show on January 1st, 2026
      if (year === 2026 && month === 1 && day === 1) {
        setShowAnimation(true)
        // Hide after 10 seconds
        setTimeout(() => {
          setShowAnimation(false)
        }, 10000)
      }
    }

    checkDate()
    // Check every minute in case the page is open when the date changes
    const interval = setInterval(checkDate, 60000)
    
    return () => clearInterval(interval)
  }, [])

  if (!showAnimation) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Confetti falling from top */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            width: `${10 + Math.random() * 10}px`,
            height: `${10 + Math.random() * 10}px`,
            backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 6)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
      <div className="new-year-animation text-center">
        <h1 className="new-year-text text-6xl md:text-8xl font-bold drop-shadow-2xl">
          <span className="animate-bounce inline-block" style={{ animationDelay: '0s' }}>H</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.1s' }}>a</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.2s' }}>p</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.3s' }}>p</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.4s' }}>y</span>
          <span className="mx-4"></span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.5s' }}>N</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.6s' }}>e</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.7s' }}>w</span>
          <br />
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.8s' }}>Y</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '0.9s' }}>e</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1s' }}>a</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1.1s' }}>r</span>
          <span className="mx-4"></span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1.2s' }}>2</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1.3s' }}>0</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1.4s' }}>2</span>
          <span className="animate-bounce inline-block" style={{ animationDelay: '1.5s' }}>6</span>
        </h1>
      </div>
    </div>
  )
}

export default NewYearAnimation

