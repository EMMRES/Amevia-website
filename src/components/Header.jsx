import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'
import Snowfall from './Snowfall'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/expertise', label: 'Expertise' },
    { path: '/sectors', label: 'Sectors' },
    { path: '/work-for-amevia', label: 'Work for Amevia' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-amevia-blue text-white relative">
      <Snowfall />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition">
            <Logo className="h-20 sm:h-24 md:h-32 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-amevia-light-blue'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:02039166257"
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>0203 916 6257</span>
            </a>
            <Link
              to="/work-for-amevia"
              className="bg-white text-amevia-blue px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Register CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? 'text-amevia-light-blue'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:02039166257"
                className="flex items-center space-x-2 text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0203 916 6257</span>
              </a>
              <Link
                to="/work-for-amevia"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-amevia-blue px-6 py-2 rounded-lg font-semibold text-center"
              >
                Register CV
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

