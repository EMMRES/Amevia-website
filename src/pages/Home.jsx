import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    '/hero-background.jpg',
    '/hero-woman-construction.jpg',
    '/crane-building-construction-exterior.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center rounded-b-3xl bg-amevia-blue">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundColor: '#1e3a8a' // Fallback color if image doesn't load
              }}
            ></div>
          ))}
        </div>
        {/* Dark black transparent overlay covering full section */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-32 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-wide">
              <span className="text-white">Your Partner in</span>
              <br />
              <span className="text-white">Construction Talent.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 leading-relaxed">
              Providing skilled, reliable, and vetted temporary staff<br />
              to keep your projects on track, on budget, and compliant with safety standards.
            </p>
            <Link
              to="/work-for-amevia"
              className="inline-block border-2 border-white text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-500 relative overflow-hidden group animate-fadeInUp w-full sm:w-auto text-center hover:bg-white hover:text-amevia-blue"
              style={{
                animation: 'fadeInUp 1s ease-out forwards',
                opacity: 0
              }}
            >
              <span className="relative z-10">Find Your Next Role</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="bg-gray-100 py-8 md:py-12 -mt-8 md:-mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search job, keyword or reference number."
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue text-sm sm:text-base"
              />
              <button className="bg-amevia-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base w-full md:w-auto">
                Search
              </button>
            </div>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">Or choose professional area.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {['Site Management', 'Trades', 'Labour', 'Health & Safety'].map((area) => (
                <button
                  key={area}
                  className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 hover:border-amevia-light-blue hover:bg-blue-50 transition text-left"
                >
                  <span className="font-semibold text-gray-700 text-sm sm:text-base">{area}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Amevia
            </h2>
            <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed px-2">
              In the fast-paced world of construction, having access to agile, skilled labour is
              non-negotiable. Amevia Limited is a specialist recruitment and consultancy partner
              dedicated to the built environment. We connect you with a trusted pool of temporary
              trades, labour, and site management professionals all rigorously vetted for skill,
              safety, and reliability.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
              In addition, our Health & Safety Consultancy Support ensures that your operations,
              projects, and workforce remain compliant, protected, and prepared.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amevia-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Workforce Provision</h3>
              <p className="text-sm md:text-base text-gray-600">
                Access to skilled, vetted professionals across all construction disciplines.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amevia-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Health & Safety</h3>
              <p className="text-sm md:text-base text-gray-600">
                Comprehensive consultancy to keep your projects compliant and safe.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amevia-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Rapid Response</h3>
              <p className="text-sm md:text-base text-gray-600">
                Quick deployment of qualified professionals when you need them most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

