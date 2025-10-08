export const metadata = {
  title: 'Privacy Policy',
  description: 'YayaGo Privacy Policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
          <p className='text-lg text-gray-600'>Last Updated: October 8, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          {/* Introduction */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>1. Introduction</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Welcome to YayaGo ("we," "our," or "us"). We are committed to protecting your personal information and
              your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo operates as a listing platform that connects car owners with potential renters in Azerbaijan. We do
              not process payments or bookings directly; instead, we facilitate direct communication between parties.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              By using YayaGo, you agree to the collection and use of information in accordance with this Privacy
              Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>2. Information We Collect</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.1 Personal Information You Provide</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Register for an account</li>
              <li>Create a vehicle listing</li>
              <li>Subscribe to a membership plan</li>
              <li>Contact our support team</li>
              <li>Sign up for newsletters or marketing communications</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>This information may include:</p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Date of birth</li>
              <li>Government-issued ID or driver's license information</li>
              <li>Vehicle registration documents</li>
              <li>Insurance information</li>
              <li>Payment information (processed securely by third-party payment processors)</li>
              <li>Profile photo</li>
              <li>Vehicle photos and descriptions</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.2 Information Automatically Collected</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              When you visit our website, we automatically collect certain information about your device and browsing
              activity, including:
            </p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>IP address and geolocation data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information (model, screen size, etc.)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Search queries within our platform</li>
              <li>Clicks, scrolling behavior, and other interactions</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.3 Information from Third Parties</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may receive information about you from third-party services when you:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Sign in using social media accounts (if available)</li>
              <li>Make payments through third-party payment processors</li>
              <li>Use third-party authentication services</li>
              <li>Interact with our social media pages</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>3. How We Use Your Information</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>We use the information we collect to:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Create and manage your account</li>
              <li>Process membership subscriptions and payments</li>
              <li>Display your vehicle listings to potential renters</li>
              <li>Facilitate communication between car owners and renters</li>
              <li>Verify your identity and vehicle ownership</li>
              <li>Send you transactional emails (account confirmation, password resets, etc.)</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Improve and optimize our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Prevent fraud, abuse, and security threats</li>
              <li>Comply with legal obligations</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Conduct research and development</li>
              <li>Enforce our Terms of Service</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>4. How We Share Your Information</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may share your information in the following circumstances:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.1 With Other Users</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              When you list a vehicle, certain information becomes publicly visible to all users, including your name,
              profile photo, vehicle details, contact information (phone number), and location. Renters need this
              information to contact you directly about rental inquiries.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.2 With Service Providers</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We share information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>Payment processing companies</li>
              <li>Cloud hosting providers</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Customer support platforms</li>
              <li>Marketing and advertising partners</li>
              <li>Security and fraud prevention services</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.3 For Legal Reasons</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>We may disclose your information if required to do so:</p>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>To comply with applicable laws, regulations, or legal processes</li>
              <li>To respond to lawful requests from public authorities</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>To investigate fraud, security issues, or violations of our Terms of Service</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.4 With Your Consent</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may share your information with third parties when you explicitly consent or direct us to do so.
            </p>
          </section>

          {/* Data Security */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>5. Data Security</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Encryption of data in transit using SSL/TLS</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection</li>
              <li>Access controls and authentication mechanisms</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive
              to protect your personal information, we cannot guarantee its absolute security. You are responsible for
              maintaining the confidentiality of your account password and for restricting access to your devices.
            </p>
          </section>

          {/* Data Retention */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>6. Data Retention</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We retain your personal information for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements. Specifically:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Account information is retained while your account is active</li>
              <li>Listing information is retained while listings are active or for archival purposes</li>
              <li>Transaction records are retained for at least 7 years for accounting and tax purposes</li>
              <li>Marketing data is retained until you unsubscribe or withdraw consent</li>
              <li>
                Backup copies may persist in our systems for a limited time after deletion for disaster recovery
                purposes
              </li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              When we no longer need your information, we will securely delete or anonymize it in accordance with our
              data retention policies.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>7. Your Rights and Choices</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Depending on your location, you may have the following rights:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.1 Access and Portability</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              You have the right to request access to the personal information we hold about you and receive a copy of
              your data in a portable format.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.2 Correction</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              You can update or correct your personal information at any time through your account settings or by
              contacting us.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.3 Deletion</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              You can request deletion of your account and personal information. Note that we may retain certain
              information as required by law or for legitimate business purposes.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.4 Opt-Out of Marketing</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              You can opt out of receiving marketing emails by clicking the "unsubscribe" link in any marketing email or
              adjusting your communication preferences in your account settings.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.5 Cookie Preferences</h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              You can control cookies through your browser settings. However, disabling cookies may affect the
              functionality of our website.
            </p>

            <p className='text-gray-700 leading-relaxed mb-4'>
              To exercise any of these rights, please contact us at{' '}
              <a href='mailto:privacy@yayago.az' className='text-primary hover:underline'>
                privacy@yayago.az
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>8. Cookies and Tracking Technologies</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We use cookies, web beacons, and similar tracking technologies to collect information about your browsing
              activity and improve your experience. Cookies are small text files stored on your device.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>8.1 Types of Cookies We Use</h3>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li>
                <strong>Essential Cookies:</strong> Required for basic website functionality (login, account access)
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how visitors use our site
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track your activity for advertising purposes
              </li>
            </ul>

            <p className='text-gray-700 leading-relaxed mb-4'>
              You can control cookies through your browser settings, but disabling certain cookies may impact your
              ability to use some features of our website.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>9. Third-Party Links and Services</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Our website may contain links to third-party websites or services that are not operated by us. We are not
              responsible for the privacy practices of these third parties. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>10. Children's Privacy</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo is not intended for use by individuals under the age of 18. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>11. International Data Transfers</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Your information may be transferred to and processed in countries other than Azerbaijan. These countries
              may have different data protection laws than your jurisdiction. By using YayaGo, you consent to the
              transfer of your information to these countries. We ensure that appropriate safeguards are in place to
              protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>12. Changes to This Privacy Policy</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes by posting the updated policy
              on our website with a new "Last Updated" date. We encourage you to review this Privacy Policy
              periodically.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Your continued use of YayaGo after any changes to this Privacy Policy constitutes your acceptance of the
              updated terms.
            </p>
          </section>

          {/* Contact Us */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>13. Contact Us</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700'>
              <p className='mb-2'>
                <strong>YayaGo</strong>
              </p>
              <p className='mb-2'>Email: privacy@yayago.az</p>
              <p className='mb-2'>Support: support@yayago.az</p>
              <p className='mb-2'>Phone: +994 XX XXX XX XX</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
