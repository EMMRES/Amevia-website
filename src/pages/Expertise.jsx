import { useState, useEffect } from 'react'

const Expertise = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Recruitment Excellence',
      description: 'We specialize in connecting construction companies with top-tier talent across all disciplines.',
      backgroundImage: '/construction-workers.jpg', // Update this with your image filename
    },
    {
      title: 'Health & Safety Leadership',
      description: 'Comprehensive consultancy services ensuring your projects meet the highest safety standards.',
      backgroundImage: '/construction-engineer.jpg',
    },
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of the built environment and construction industry requirements.',
      backgroundImage: '/executives-comparing-blueprint-with-actual-building.jpg',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance carousel in infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8">
          <span className="text-gray-900">Where we </span>
          <span className="text-amevia-light-blue">specialise</span>
        </h1>
        <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-8 md:mb-16"></div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl h-64 sm:h-80 md:h-96 lg:h-[500px]">
            {/* Carousel Content */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full flex items-center justify-center p-6 sm:p-8 md:p-12 relative ${
                    slide.backgroundImage ? '' : 'bg-gray-100'
                  }`}
                  style={
                    slide.backgroundImage
                      ? {
                          backgroundImage: `url(${slide.backgroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : {}
                  }
                >
                  {/* Overlay for slides with background images */}
                  {slide.backgroundImage && (
                    <div className="absolute inset-0 bg-black/50"></div>
                  )}
                  <div className={`text-center max-w-2xl relative z-10 px-4 ${slide.backgroundImage ? 'text-white' : ''}`}>
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${slide.backgroundImage ? 'text-white' : 'text-gray-900'}`}>
                      {slide.title}
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl ${slide.backgroundImage ? 'text-white' : 'text-gray-700'}`}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-amevia-light-blue text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition shadow-lg z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-amevia-light-blue text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition shadow-lg z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-amevia-light-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Vetted Professionals</h3>
              <p className="text-sm md:text-base text-gray-600">
                Every candidate undergoes rigorous screening for skills, qualifications, and safety
                certifications.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Compliance First</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our health & safety consultancy ensures your projects meet all regulatory
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise

