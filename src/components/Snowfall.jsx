import { useEffect, useState } from 'react'

const Snowfall = () => {
  const [showSnow, setShowSnow] = useState(false)

  useEffect(() => {
    const checkDate = () => {
      const today = new Date()
      const year = today.getFullYear()
      const currentMonth = today.getMonth() + 1 // 1-12
      
      // Show snow from December 1st, 2025 to December 31st, 2025
      // Stop on January 1st, 2026 (when New Year animation appears)
      const isDecember2025 = year === 2025 && currentMonth === 12
      
      setShowSnow(isDecember2025)
    }

    checkDate()
    // Check every minute in case the page is open when the date changes
    const interval = setInterval(checkDate, 60000)
    
    return () => clearInterval(interval)
  }, [])

  if (!showSnow) return null

  return (
    <div className="snowfall-navbar absolute top-0 left-0 right-0 pointer-events-none z-10 overflow-hidden" style={{ height: '128px' }}>
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 2 + Math.random() * 3 // 2-5px
        const left = Math.random() * 100
        const delay = Math.random() * 5
        const duration = 4 + Math.random() * 3 // 4-7 seconds
        const opacity = 0.4 + Math.random() * 0.4 // 0.4-0.8
        
        return (
          <div
            key={i}
            className="snowflake-navbar"
            style={{
              left: `${left}%`,
              top: `${-10 - Math.random() * 10}px`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.8)`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: opacity,
            }}
          />
        )
      })}
    </div>
  )
}

export default Snowfall

