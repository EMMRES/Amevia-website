import { useState, useEffect, useRef } from 'react'

const AboutUs = () => {
  const [counts, setCounts] = useState({ professionals: 0, projects: 0, years: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const stats = [
    { key: 'professionals', target: 500, label: 'Professionals' },
    { key: 'projects', target: 200, label: 'Projects' },
    { key: 'years', target: 2, label: 'Years Experience' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat) => {
      let currentStep = 0
      const increment = stat.target / steps

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.target)

        setCounts((prev) => ({
          ...prev,
          [stat.key]: currentValue,
        }))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <div className="py-12 md:py-20 bg-white">
      {/* Content */}
      <div className="container mx-auto px-4">
        {/* About Us Card with Background Image */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/building-concrete-house.jpg)',
                backgroundColor: '#f3f4f6'
              }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Card Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About Us
              </h1>
              <div className="w-24 h-1 bg-amevia-light-blue mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed mb-8 md:mb-12 px-2">
            <p>
              Amevia Limited is a specialist recruitment and consultancy partner dedicated to the
              built environment. With years of experience in the construction industry, we understand
              the unique challenges and demands of construction projects.
            </p>
            <p>
              Our mission is to provide construction companies with access to agile, skilled labour
              while ensuring the highest standards of safety and compliance. We believe that having
              the right people in place is crucial for project success, and we're committed to
              connecting you with professionals who are not only skilled but also reliable and
              safety-conscious.
            </p>
            <p>
              What sets us apart is our dual focus on workforce provision and health & safety
              consultancy. This integrated approach means we can support every phase of your project,
              from initial manpower planning to ongoing compliance and safety management.
            </p>
          </div>
        </div>

        {/* Full Width Animated Stats Section */}
        <div 
          ref={statsRef}
          className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-900 py-16 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.key}
                className="text-center transform transition-all duration-700"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-amevia-light-blue mb-2">
                  {counts[stat.key]}+
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-700">
                  We prioritize safety in everything we do, ensuring all our professionals meet the
                  highest safety standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-700">
                  You can count on us to deliver skilled professionals when and where you need them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in recruitment and consultancy services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-700">
                  We build long-term relationships with our clients, understanding their unique needs
                  and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

