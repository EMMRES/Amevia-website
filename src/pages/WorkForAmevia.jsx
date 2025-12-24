import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import { storage } from '../config/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const WorkForAmevia = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    professionalArea: '',
    additionalInfo: ''
  })
  const [cvFile, setCvFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      let cvDownloadUrl = ''

      // Upload CV file to Firebase Storage if file exists
      if (cvFile) {
        try {
          // Check if Firebase is configured
          if (!storage) {
            throw new Error('Firebase Storage is not configured. Please set up Firebase Storage first.')
          }

          // Create a unique filename with timestamp
          const timestamp = Date.now()
          const fileName = `cvs/${timestamp}_${cvFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
          const storageRef = ref(storage, fileName)

          // Upload file
          const uploadTask = uploadBytesResumable(storageRef, cvFile)
          
          // Wait for upload to complete
          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                // Progress tracking (optional)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload progress:', progress + '%')
              },
              (error) => {
                console.error('Upload error:', error)
                reject(error)
              },
              async () => {
                // Upload completed, get download URL
                try {
                  cvDownloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
                  console.log('File uploaded, download URL:', cvDownloadUrl)
                  resolve()
                } catch (urlError) {
                  console.error('Error getting download URL:', urlError)
                  reject(urlError)
                }
              }
            )
          })
        } catch (uploadError) {
          console.error('Firebase upload error:', uploadError)
          // If upload fails, continue without the download URL
          // The email will still be sent with file information
        }
      }

      // Prepare template parameters
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        professional_area: formData.professionalArea,
        additional_info: formData.additionalInfo || 'No additional information provided.',
        cv_file_name: cvFile ? cvFile.name : 'No file uploaded',
        cv_file_size: cvFile ? `${(cvFile.size / 1024).toFixed(2)} KB` : 'N/A',
        cv_file_type: cvFile ? cvFile.type : 'N/A',
        cv_url: cvDownloadUrl || '', // Download URL from Firebase Storage
        to_email: 'solutions@amevia.co.uk'
      }

      // Send email using Email.js
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        'template_ehm0036', // CV Registration Template ID
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('Email sent successfully:', result)
      handleSuccess()
    } catch (error) {
      console.error('Error:', error)
      handleError(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSuccess = () => {
    setSubmitStatus({
      type: 'success',
      message: 'Thank you! Your CV has been submitted successfully. We will review your application and get back to you soon.'
    })
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      professionalArea: '',
      additionalInfo: ''
    })
    setCvFile(null)
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput) fileInput.value = ''
    setIsSubmitting(false)
  }

  const handleError = (error) => {
    console.error('EmailJS Error:', error)
    setSubmitStatus({
      type: 'error',
      message: error.text || 'Failed to submit your CV. Please try again or contact us directly at solutions@amevia.co.uk'
    })
    setIsSubmitting(false)
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 md:mb-8">
            Work for Amevia
          </h1>
          <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-8 md:mb-12"></div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12 mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Register Your CV</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
              Join our network of skilled construction professionals. Whether you're a tradesperson,
              site manager, or health & safety specialist, we want to hear from you.
            </p>

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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
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
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Professional Area *</label>
                <select
                  name="professionalArea"
                  value={formData.professionalArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                >
                  <option value="">Select an area</option>
                  <option value="Site Management">Site Management</option>
                  <option value="Trades">Trades</option>
                  <option value="Labour">Labour</option>
                  <option value="Health & Safety">Health & Safety</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Upload CV *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                />
                <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX</p>
                <p className="text-xs text-gray-400 mt-1">Note: File will be sent via email attachment</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amevia-light-blue"
                  placeholder="Tell us about your experience and qualifications..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amevia-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit CV'}
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Why Work with Amevia?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amevia-light-blue mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to top construction projects across the UK
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amevia-light-blue mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Competitive rates and regular work opportunities
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amevia-light-blue mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Support with certifications and training
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amevia-light-blue mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional development opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkForAmevia


