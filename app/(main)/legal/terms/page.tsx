export const metadata = {
  title: 'Terms of Service',
  description: 'YayaGo Terms of Service - Rules and guidelines for using our car rental listing platform.',
};

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Terms of Service</h1>
          <p className='text-lg text-gray-600'>Last Updated: October 8, 2025</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          {/* Introduction */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>1. Agreement to Terms</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Welcome to YayaGo. These Terms of Service ("Terms") constitute a legally binding agreement between you and
              YayaGo ("we," "us," or "our") governing your access to and use of our website, mobile application, and
              services (collectively, the "Platform").
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              By accessing or using YayaGo, you agree to be bound by these Terms and our Privacy Policy. If you do not
              agree to these Terms, you may not access or use our Platform.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We reserve the right to modify these Terms at any time. We will notify users of material changes by
              posting updated Terms with a new effective date. Your continued use of the Platform after changes are
              posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Platform Description */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>2. Description of Service</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo is a listing platform that connects car owners ("Owners" or "Hosts") with individuals seeking to
              rent vehicles ("Renters"). We provide a marketplace where:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Owners can create listings for their vehicles with photos, descriptions, and pricing</li>
              <li>Renters can browse, search, and filter available vehicles</li>
              <li>Both parties can communicate directly via phone or messaging platforms</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Important:</strong> YayaGo is NOT a booking platform, payment processor, or rental agency. We do
              not:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Process or facilitate rental payments</li>
              <li>Verify the condition or safety of listed vehicles</li>
              <li>Conduct background checks on Owners or Renters</li>
              <li>Manage rental agreements or contracts</li>
              <li>Provide insurance coverage for rentals</li>
              <li>Take responsibility for disputes between Owners and Renters</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              All rental transactions, agreements, and communications occur directly between Owners and Renters. YayaGo
              simply provides the platform for discovery and connection.
            </p>
          </section>

          {/* Eligibility */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>3. Eligibility</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>To use YayaGo, you must:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the accuracy of your account information</li>
              <li>Not be prohibited from using the Platform under applicable laws</li>
              <li>
                Not have been previously banned or suspended from YayaGo for violating these Terms or engaging in
                fraudulent activity
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>3.1 Additional Requirements for Owners</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Be at least 21 years of age</li>
              <li>Own or have legal authorization to rent the listed vehicle</li>
              <li>Hold valid vehicle registration and insurance</li>
              <li>Maintain an active membership subscription</li>
              <li>Provide accurate contact information for Renters to reach you</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>3.2 Additional Requirements for Renters</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Hold a valid driver's license recognized in Azerbaijan</li>
              <li>Meet any age requirements specified by individual Owners</li>
              <li>Have the financial means to pay for rentals and any associated deposits</li>
            </ul>
          </section>

          {/* Account Registration */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>4. Account Registration and Security</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              To list vehicles or access certain features, you must create an account. You agree to:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your information</li>
              <li>Maintain the security and confidentiality of your password</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities occurring under your account</li>
              <li>Not transfer or share your account with others</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We reserve the right to suspend or terminate accounts that violate these Terms or contain false,
              misleading, or fraudulent information.
            </p>
          </section>

          {/* Membership and Fees */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>5. Membership Plans and Fees</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.1 Owner Memberships</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              To list vehicles, Owners must maintain an active paid membership. Membership tiers are based on the number
              of vehicles you wish to list. Current plans and pricing are available on our Pricing page.
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Memberships are billed monthly or annually at your choice</li>
              <li>Fees are non-refundable except as required by law</li>
              <li>You can upgrade or downgrade your membership at any time</li>
              <li>Downgrades take effect at the end of your current billing period</li>
              <li>If payment fails, your listings may be suspended until payment is successful</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.2 Renter Access</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Renters can browse and search listings completely free of charge. There are no booking fees, service fees,
              or commissions charged by YayaGo to Renters.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.3 No Commission on Rentals</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo does not take any commission or percentage from rental transactions. Owners keep 100% of the rental
              income they negotiate with Renters. Our revenue comes solely from membership subscriptions.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.4 Cancellation</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You may cancel your membership at any time from your account settings. Cancellation takes effect at the
              end of your current billing period. No refunds will be issued for partial months.
            </p>
          </section>

          {/* Listings */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>6. Vehicle Listings</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.1 Creating Listings</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>When creating a listing, Owners must:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Provide accurate and truthful information about the vehicle</li>
              <li>Upload clear, recent photos that accurately represent the vehicle's condition</li>
              <li>Set fair and transparent pricing</li>
              <li>Specify all terms, conditions, and requirements (age limits, deposits, mileage limits, etc.)</li>
              <li>Include valid contact information</li>
              <li>Update listings promptly when information changes</li>
              <li>Mark vehicles as unavailable when they cannot be rented</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.2 Prohibited Listings</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>You may not list vehicles that:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Are stolen, salvaged, or have fraudulent documentation</li>
              <li>Lack proper registration or insurance</li>
              <li>Are unsafe or in poor mechanical condition</li>
              <li>Are older than 15 years (manufactured before 2010)</li>
              <li>Do not belong to you or you lack authorization to rent</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.3 Listing Content</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>All listing content must:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Be accurate and not misleading</li>
              <li>Not contain offensive, discriminatory, or illegal content</li>
              <li>Not include external links or attempts to circumvent the Platform</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not infringe on intellectual property rights of others</li>
            </ul>

            <p className='text-gray-700 leading-relaxed mb-4'>
              We reserve the right to remove, modify, or reject any listing that violates these Terms or is otherwise
              deemed inappropriate.
            </p>
          </section>

          {/* Owner Responsibilities */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>7. Owner Responsibilities</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>As an Owner, you are responsible for:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Ensuring your vehicle is in safe, working condition before each rental</li>
              <li>Maintaining valid registration, insurance, and all required documentation</li>
              <li>Complying with all local, state, and national laws regarding vehicle rentals</li>
              <li>Responding to Renter inquiries in a timely and professional manner</li>
              <li>Honoring agreements made with Renters</li>
              <li>Verifying Renter credentials and eligibility before handing over your vehicle</li>
              <li>Inspecting your vehicle before and after each rental</li>
              <li>Setting clear terms regarding deposits, payment methods, and rental conditions</li>
              <li>Reporting any fraudulent activity or suspicious behavior</li>
              <li>Handling all payments, disputes, and issues directly with Renters</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Important:</strong> You are solely responsible for all aspects of the rental transaction. YayaGo
              is not liable for any damages, losses, disputes, or issues arising from rentals.
            </p>
          </section>

          {/* Renter Responsibilities */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>8. Renter Responsibilities</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>As a Renter, you are responsible for:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Contacting Owners directly and negotiating rental terms</li>
              <li>Verifying vehicle condition, documentation, and Owner legitimacy</li>
              <li>Holding a valid driver's license and meeting all eligibility requirements</li>
              <li>Operating the vehicle safely and in accordance with all traffic laws</li>
              <li>Returning the vehicle on time and in the same condition as received</li>
              <li>Paying agreed-upon rental fees and deposits directly to the Owner</li>
              <li>Being responsible for any damage, theft, or loss during the rental period</li>
              <li>Maintaining appropriate insurance coverage during the rental</li>
              <li>Reporting accidents or damage to the Owner immediately</li>
              <li>Not subletting or allowing unauthorized drivers to operate the vehicle</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Important:</strong> You rent vehicles at your own risk. YayaGo does not verify vehicle conditions,
              Owner credentials, or the accuracy of listings. Always inspect vehicles thoroughly and use good judgment.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>9. Prohibited Conduct</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>Users may not:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Provide false, misleading, or fraudulent information</li>
              <li>Impersonate another person or entity</li>
              <li>Use the Platform for any illegal purpose</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Post spam, advertisements, or irrelevant content</li>
              <li>Attempt to scrape, copy, or duplicate listing data</li>
              <li>Circumvent or manipulate our systems, security measures, or algorithms</li>
              <li>Use automated systems or bots to access the Platform</li>
              <li>Interfere with or disrupt the Platform's operation</li>
              <li>Infringe on intellectual property rights</li>
              <li>Discriminate against users based on protected characteristics</li>
              <li>Engage in price gouging or unfair pricing practices</li>
              <li>Create multiple accounts to evade suspensions or restrictions</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Violations may result in account suspension or termination, and we may report illegal activity to law
              enforcement.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>10. Intellectual Property Rights</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>10.1 Platform Content</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              All content on the Platform, including text, graphics, logos, icons, images, software, and design, is the
              property of YayaGo or its licensors and is protected by copyright, trademark, and other intellectual
              property laws. You may not copy, modify, distribute, or create derivative works without our express
              written permission.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>10.2 User Content</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You retain ownership of content you upload (photos, descriptions, etc.). However, by posting content on
              YayaGo, you grant us a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and
              distribute your content for the purpose of operating and promoting our Platform.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You represent and warrant that you own or have the necessary rights to all content you post and that it
              does not infringe on any third-party rights.
            </p>
          </section>

          {/* Disclaimers */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>11. Disclaimers</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO
              THE FULLEST EXTENT PERMITTED BY LAW, YAYAGO DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Any warranty regarding the accuracy, reliability, or quality of listings</li>
              <li>Any warranty that the Platform will be uninterrupted, secure, or error-free</li>
              <li>Any warranty regarding the conduct or credentials of users</li>
              <li>Any warranty regarding the safety or condition of listed vehicles</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We do not verify, endorse, or guarantee any listings, users, or rental transactions. You use the Platform
              at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>12. Limitation of Liability</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, YAYAGO AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Personal injury or property damage</li>
              <li>Vehicle damage, theft, or accidents</li>
              <li>Disputes between Owners and Renters</li>
              <li>Fraudulent or illegal activity by users</li>
              <li>Failure to complete rental transactions</li>
              <li>Inaccurate or misleading listings</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE AMOUNT YOU
              PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ₼100, WHICHEVER IS GREATER.
            </p>
          </section>

          {/* Indemnification */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>13. Indemnification</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You agree to indemnify, defend, and hold harmless YayaGo and its officers, directors, employees, and
              agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising
              from:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Your use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or regulation</li>
              <li>Your violation of any third-party rights</li>
              <li>Your rental transactions with other users</li>
              <li>Content you post on the Platform</li>
              <li>Any disputes with other users</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>14. Dispute Resolution</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>14.1 User-to-User Disputes</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo is not responsible for disputes between Owners and Renters. You are solely responsible for
              resolving any disputes, and you release YayaGo from any claims related to such disputes.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>14.2 Disputes with YayaGo</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Any disputes arising from these Terms or your use of the Platform shall be governed by the laws of
              Azerbaijan. You agree to submit to the exclusive jurisdiction of the courts of Baku, Azerbaijan.
            </p>
          </section>

          {/* Termination */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>15. Termination</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We may suspend or terminate your account at any time, with or without notice, for any reason, including:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of membership fees</li>
              <li>Abusive or harassing behavior</li>
              <li>Multiple user complaints</li>
              <li>Inactivity for an extended period</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You may terminate your account at any time from your account settings. Upon termination, your listings
              will be removed, but we may retain certain information as required by law or for legitimate business
              purposes.
            </p>
          </section>

          {/* General Provisions */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>16. General Provisions</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>16.1 Entire Agreement</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and YayaGo.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>16.2 Severability</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
              remain in full force and effect.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>16.3 Waiver</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or
              provision.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>16.4 Assignment</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              You may not assign or transfer these Terms or your account without our prior written consent. We may
              assign our rights and obligations without restriction.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>16.5 Force Majeure</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable
              control, including but not limited to acts of God, war, terrorism, riots, natural disasters, or technical
              failures.
            </p>
          </section>

          {/* Contact */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>17. Contact Information</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you have questions about these Terms, please contact us at:
            </p>
            <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700'>
              <p className='mb-2'>
                <strong>YayaGo</strong>
              </p>
              <p className='mb-2'>Email: legal@yayago.az</p>
              <p className='mb-2'>Support: support@yayago.az</p>
              <p className='mb-2'>Phone: +994 XX XXX XX XX</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className='mb-10'>
            <div className='bg-primary/5 border-2 border-primary/20 rounded-lg p-6'>
              <p className='text-gray-800 leading-relaxed font-medium'>
                BY USING YAYAGO, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF
                SERVICE.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
