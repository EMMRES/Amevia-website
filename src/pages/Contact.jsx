import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Send email using Email.js
      // Note: The sender email must be set in Email.js template settings
      // Make sure "From Email" in template_lxcrooq is set to: solutions@amevia.co.uk
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email, // Reply-to address
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'solutions@amevia.co.uk',
          to_name: 'Amevia Limited',
          // Explicitly set sender to valid email (if template supports it)
          user_email: 'solutions@amevia.co.uk',
          user_name: 'Amevia Limited',
          time: new Date().toLocaleString('en-GB', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: error.text || 'Failed to send message. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 md:mb-8">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-8 md:mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="workforce">Workforce Requirements</option>
                    <option value="safety">Health & Safety Consultancy</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amevia-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amevia-light-blue mr-4 mt-1 flex-shrink-0"
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
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:02039166257"
                        className="text-amevia-light-blue hover:underline"
                      >
                        0203 916 6257
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amevia-light-blue mr-4 mt-1 flex-shrink-0"
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
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:solutions@amevia.co.uk"
                        className="text-amevia-light-blue hover:underline"
                      >
                        solutions@amevia.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amevia-light-blue mr-4 mt-1 flex-shrink-0"
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
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-700">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amevia-blue text-white rounded-lg p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Business Hours</h3>
                <div className="space-y-2 text-blue-100">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


