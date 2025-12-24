const Sectors = () => {
  const sectors = [
    {
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Residential Construction',
      description: 'Expert workforce for residential projects of all scales.',
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Commercial Development',
      description: 'Specialized teams for commercial and office developments.',
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Civils & Infrastructure',
      description: 'Experienced professionals for major infrastructure projects.',
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Logistics & Site Support',
      description: 'Comprehensive support services for construction sites.',
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          Sectors We Serve
        </h1>
        <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-8 md:mb-16"></div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto mb-8 md:mb-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 hover:bg-gray-50 rounded-lg transition"
            >
              <div className="text-amevia-light-blue mb-4 md:mb-6">{sector.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{sector.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our dual focus on workforce provision and health & safety consultancy means we can
            support every phase of your project from manpower to compliance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sectors


