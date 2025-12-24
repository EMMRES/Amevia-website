const TermsAndConditions = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Use & Disclaimer
            </h1>
            <div className="w-24 h-1 bg-amevia-light-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 font-semibold">Amevia Limited</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: December 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is operated by Amevia Limited, a company registered in England and Wales (Company No. 16818407).
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Registered office:</strong> 321–323 High Road, Romford, England, RM6 6AX.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:solutions@amevia.co.uk" className="text-amevia-light-blue hover:underline">solutions@amevia.co.uk</a>
                </p>
                <p className="text-gray-700">
                  <strong>Tel:</strong> <a href="tel:02039166257" className="text-amevia-light-blue hover:underline">0203 916 6257</a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Amevia Limited provides temporary staffing services and health and safety consultancy support to the construction, civil engineering, logistics, and built environment sectors.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using this website, you confirm that you accept these Terms of Use and agree to comply with them.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you do not agree, you must not use this website.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose of the Website</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is provided for the purposes of:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Supplying general information about Amevia Limited and its services</li>
                <li>Allowing clients to make enquiries regarding staffing or consultancy services</li>
                <li>Allowing candidates to submit applications and expressions of interest</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Nothing on this website constitutes a binding offer, contractual commitment, or professional advice unless expressly agreed in writing.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Website Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website, including text, graphics, branding, documents, and layout, is owned by or licensed to Amevia Limited.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2 font-semibold">You may:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>View and print content for personal or internal business use only</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-2 font-semibold">You must not:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Copy, reproduce, distribute, modify, or commercially exploit website content without prior written consent</li>
                <li>Use the website for unlawful, misleading, or fraudulent purposes</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we take reasonable steps to ensure the accuracy and timeliness of information on this website:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Content is provided for general information only</li>
                <li>We do not guarantee that information is complete, accurate, or up to date at all times</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Amevia Limited reserves the right to update or remove website content without notice.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Recruitment & Candidate Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Submission of candidate information via this website:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Does not guarantee work, placement, or engagement</li>
                <li>Does not create an employment relationship</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-2">All placements are subject to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Client requirements</li>
                <li>Verification of qualifications, right-to-work, and compliance checks</li>
                <li>Separate contractual terms</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Health & Safety Consultancy Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any health and safety information provided on this website:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Is not a substitute for project-specific professional advice</li>
                <li>Does not constitute a formal appointment as a competent person</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Consultancy services are provided only under a separate written agreement defining scope, responsibilities, and limitations.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Amevia Limited shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                <li>Any loss or damage arising from reliance on website content</li>
                <li>Loss of business, profit, data, or opportunity</li>
                <li>Indirect or consequential losses</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Nothing in these Terms excludes liability for death or personal injury caused by negligence or fraud.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website may contain links to third-party websites.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Amevia Limited has no control over and accepts no responsibility for third-party content or policies.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Use of this website is also governed by our Privacy Policy, which explains how personal data is collected and processed.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction.
              </p>
            </section>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:solutions@amevia.co.uk" className="text-amevia-light-blue hover:underline">solutions@amevia.co.uk</a>
                </p>
                <p className="text-gray-700">
                  <strong>Tel:</strong> <a href="tel:02039166257" className="text-amevia-light-blue hover:underline">0203 916 6257</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions

