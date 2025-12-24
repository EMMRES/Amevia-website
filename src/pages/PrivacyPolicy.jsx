const PrivacyPolicy = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 font-semibold">Amevia Limited</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: December 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Amevia Limited is committed to protecting your personal data and complying with the UK GDPR and the Data Protection Act 2018.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect personal information obtained through our website and recruitment activities.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Controller</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2 font-semibold">Amevia Limited</p>
                <p className="text-gray-700 mb-2">
                  <strong>Registered office:</strong> 321–323 High Road, Romford, England, RM6 6AX
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:solutions@amevia.co.uk" className="text-amevia-light-blue hover:underline">solutions@amevia.co.uk</a>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Personal Data We Collect</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Clients & Enquiries</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name</li>
                  <li>Company name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Enquiry details</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Candidates</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name</li>
                  <li>Contact details</li>
                  <li>Trade or role</li>
                  <li>CVs and employment history</li>
                  <li>Right-to-work and qualification information (where applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Website Usage</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser and device data</li>
                  <li>Basic analytics (cookies)</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process personal data to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Respond to enquiries</li>
                <li>Provide staffing and consultancy services</li>
                <li>Assess candidate suitability</li>
                <li>Meet legal, contractual, and regulatory obligations</li>
                <li>Maintain internal records</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Lawful Basis for Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We rely on one or more of the following lawful bases:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Consent</strong> – where you submit forms or upload CVs</li>
                <li><strong>Contractual necessity</strong> – to provide services or placements</li>
                <li><strong>Legal obligation</strong> – right-to-work and compliance checks</li>
                <li><strong>Legitimate interests</strong> – recruitment, service improvement, and business operations</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share personal data with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Clients (for recruitment purposes)</li>
                <li>Payroll or compliance partners</li>
                <li>Regulatory or legal authorities where required</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold">
                We do not sell personal data.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain personal data only for as long as necessary:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Candidate records:</strong> typically up to 12 months unless continued engagement applies</li>
                <li><strong>Client data:</strong> for the duration of the business relationship and legal retention periods</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organisational measures to protect personal data against:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Unauthorised access</li>
                <li>Loss or misuse</li>
                <li>Alteration or disclosure</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Requests can be made via <a href="mailto:solutions@amevia.co.uk" className="text-amevia-light-blue hover:underline">solutions@amevia.co.uk</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses essential and analytical cookies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can manage cookie preferences via your browser settings.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. The latest version will always be published on our website.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For privacy-related enquiries, contact:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amevia-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:solutions@amevia.co.uk" className="text-amevia-light-blue hover:underline text-lg">
                      solutions@amevia.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-amevia-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:02039166257" className="text-amevia-light-blue hover:underline text-lg">
                      0203 916 6257
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

