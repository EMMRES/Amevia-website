import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amevia-blue text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/" className="inline-block mb-0 -mt-2">
              <Logo className="h-24 md:h-28 lg:h-36 w-auto" />
            </Link>
            <p className="text-blue-100 text-sm md:text-base leading-tight mt-0">
              Your partner in construction talent. Providing skilled, reliable, and vetted temporary staff to keep your projects on track.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 md:mb-6 mt-0">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 md:mb-6 mt-0">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/expertise"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Workforce Provision
                </Link>
              </li>
              <li>
                <Link
                  to="/expertise"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Health & Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/work-for-amevia"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Work for Amevia
                </Link>
              </li>
              <li>
                <Link
                  to="/work-for-amevia"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  Register CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 md:mb-6 mt-0">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amevia-light-blue mr-3 mt-1 flex-shrink-0"
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
                <a
                  href="tel:02039166257"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base"
                >
                  0203 916 6257
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amevia-light-blue mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:solutions@amevia.co.uk"
                  className="text-blue-100 hover:text-amevia-light-blue transition text-sm md:text-base break-all"
                >
                  solutions@amevia.co.uk
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amevia-light-blue mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-blue-100 text-sm md:text-base">United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © {currentYear} Amevia Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-blue-100 hover:text-amevia-light-blue transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-blue-100 hover:text-amevia-light-blue transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

