export const metadata = {
  title: 'Insurance Policy',
  description:
    'YayaGo Insurance Policy - Information about insurance requirements and recommendations for car rentals.',
};

export default function InsurancePage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Insurance Policy</h1>
          <p className='text-lg text-gray-600'>Last Updated: October 8, 2025</p>
        </div>

        {/* Important Notice */}
        <div className='bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-10'>
          <h2 className='text-xl font-bold text-gray-900 mb-3'>⚠️ Important Notice</h2>
          <p className='text-gray-800 leading-relaxed mb-2'>
            <strong>
              YayaGo does not provide, facilitate, or guarantee any insurance coverage for vehicle rentals conducted
              through our platform.
            </strong>
          </p>
          <p className='text-gray-800 leading-relaxed'>
            All insurance matters, coverage, and claims are the sole responsibility of Owners and Renters. This document
            provides information and recommendations to help you understand insurance requirements and protect yourself
            during rental transactions.
          </p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          {/* Introduction */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>1. Overview</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo is a listing platform that connects car owners with renters. We do not participate in, manage, or
              oversee rental transactions, including insurance arrangements. Both Owners and Renters are responsible for
              ensuring appropriate insurance coverage is in place before any rental occurs.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>This document outlines:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Legal insurance requirements in Azerbaijan</li>
              <li>Recommended insurance coverage for both parties</li>
              <li>Responsibilities of Owners and Renters</li>
              <li>Common insurance questions and scenarios</li>
              <li>Steps to take in case of accidents or damage</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Please consult with insurance professionals and legal advisors</strong> to ensure you have
              adequate coverage for your specific situation. This document is for informational purposes only and does
              not constitute legal or insurance advice.
            </p>
          </section>

          {/* Legal Requirements */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>2. Legal Insurance Requirements in Azerbaijan</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.1 Mandatory Third-Party Liability Insurance</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              According to Azerbaijani law, all vehicles operating on public roads must have valid third-party liability
              insurance (Məcburi Sığorta). This insurance:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Covers damage or injury caused to third parties (other people, vehicles, or property)</li>
              <li>Is required to register and operate any vehicle in Azerbaijan</li>
              <li>Must be purchased from licensed insurance providers</li>
              <li>Typically covers the vehicle itself, not specific drivers</li>
              <li>Has minimum coverage limits set by law</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.2 Owner Responsibilities</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>As a vehicle owner, you are legally required to:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Maintain valid third-party liability insurance at all times</li>
              <li>Ensure insurance documents are current and accessible in the vehicle</li>
              <li>Verify that your insurance policy covers usage by other drivers (renters)</li>
              <li>
                Check if your policy has restrictions on commercial or rental use—some personal policies do not cover
                rentals
              </li>
              <li>Notify your insurance provider if you plan to rent out your vehicle</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2.3 Renter Responsibilities</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>As a renter, you are required to:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Hold a valid driver's license</li>
              <li>Verify that the vehicle you rent has valid insurance</li>
              <li>
                Understand that you may be personally liable for damage or injury caused while driving, even if the
                vehicle has insurance
              </li>
              <li>Consider obtaining additional coverage for your protection</li>
            </ul>
          </section>

          {/* YayaGo's Role */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>3. YayaGo's Role and Limitations</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>YayaGo is NOT an insurance provider, broker, or intermediary.</strong> We do not:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Provide any insurance coverage for rentals</li>
              <li>Verify that listed vehicles have valid insurance</li>
              <li>Validate insurance documents submitted by Owners</li>
              <li>Facilitate insurance claims or disputes</li>
              <li>Guarantee that Owners or Renters have appropriate coverage</li>
              <li>Accept liability for accidents, damage, theft, or injury during rentals</li>
              <li>Process insurance claims on behalf of users</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Owners and Renters communicate directly and arrange all aspects of the rental, including insurance
              verification, independently. YayaGo provides the platform for connection only.
            </p>
          </section>

          {/* Recommended Coverage for Owners */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>4. Recommended Insurance for Owners</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              While only third-party liability insurance is legally required, Owners renting out their vehicles should
              strongly consider additional coverage:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.1 Comprehensive Insurance (KASKO)</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Comprehensive insurance covers damage to your own vehicle, including:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Collision damage (accidents caused by the driver)</li>
              <li>Theft or vandalism</li>
              <li>Fire, natural disasters, falling objects</li>
              <li>Damage caused by uninsured or underinsured drivers</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Important:</strong> Standard KASKO policies may exclude coverage when the vehicle is rented to
              others. Check with your insurance provider about:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Commercial or rental use coverage options</li>
              <li>Additional premiums for rental coverage</li>
              <li>Driver restrictions (age, experience requirements)</li>
              <li>Deductibles and coverage limits</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.2 Commercial Rental Insurance</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you frequently rent your vehicle, consider specialized commercial rental insurance, which:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Specifically covers rentals to multiple drivers</li>
              <li>May offer higher coverage limits</li>
              <li>Can include loss-of-income coverage if your vehicle is out of service</li>
              <li>Typically has clearer terms for rental scenarios</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.3 Gap Insurance</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If you have a loan or lease on your vehicle, gap insurance covers the difference between the vehicle's
              actual value and the amount you owe if it's totaled or stolen.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>4.4 Owner Best Practices</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Verify that your insurance policy allows rentals before listing your vehicle</li>
              <li>Keep insurance documents accessible and provide copies to renters</li>
              <li>Document vehicle condition with photos before and after each rental</li>
              <li>Collect security deposits to cover deductibles</li>
              <li>Require renters to provide proof of their own insurance if possible</li>
              <li>Have clear rental agreements outlining insurance responsibilities</li>
            </ul>
          </section>

          {/* Recommended Coverage for Renters */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>5. Recommended Insurance for Renters</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Even if the Owner's insurance covers the vehicle, Renters should consider their own protection:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.1 Personal Auto Insurance</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Check if your own auto insurance policy extends coverage to rental or borrowed vehicles. Some policies
              include:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Liability coverage for damage you cause</li>
              <li>Collision and comprehensive coverage for the rental vehicle</li>
              <li>Medical payments or personal injury protection</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Note:</strong> Coverage for peer-to-peer rentals (like YayaGo) may differ from traditional rental
              agencies. Contact your insurance provider to clarify.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.2 Temporary Rental Insurance</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Some insurance companies offer short-term policies specifically for renting vehicles from private owners.
              These can provide:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Full coverage for the rental period (daily, weekly, etc.)</li>
              <li>Liability, collision, and comprehensive protection</li>
              <li>No impact on your primary auto insurance</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.3 Credit Card Coverage</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Some credit cards provide rental car insurance if you pay for the rental with that card. However:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Coverage is usually secondary (after owner's insurance)</li>
              <li>May only cover damage to the vehicle, not liability</li>
              <li>Often excludes peer-to-peer rentals—verify with your card issuer</li>
              <li>Requires the rental to be paid in full with the card</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>5.4 Renter Best Practices</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Always verify that the vehicle has valid third-party liability insurance</li>
              <li>Request copies of insurance documents before starting the rental</li>
              <li>Understand what is and isn't covered by the Owner's insurance</li>
              <li>Consider your own liability exposure—accidents can result in significant costs</li>
              <li>Inspect the vehicle thoroughly before accepting it and document existing damage</li>
              <li>
                Obtain written rental agreements specifying insurance responsibilities and what happens in case of
                damage
              </li>
              <li>Keep emergency contact information for the Owner and relevant insurance companies</li>
            </ul>
          </section>

          {/* Common Scenarios */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>6. Common Insurance Scenarios</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.1 Scenario: Minor Accident (Renter at Fault)</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If the Renter causes an accident resulting in damage to the rental vehicle or other property:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>The Owner's insurance may cover third-party damage</li>
              <li>
                The Renter is typically responsible for the deductible and any damage to the rental vehicle itself
              </li>
              <li>The Owner may claim against the Renter's security deposit</li>
              <li>The Renter's personal insurance may cover some costs if applicable</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.2 Scenario: Theft of Vehicle</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>If the vehicle is stolen during the rental period:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>The Owner's comprehensive insurance (if any) may cover the loss</li>
              <li>The Renter may be liable if theft resulted from negligence (keys left in car, unlocked, etc.)</li>
              <li>Police reports must be filed immediately</li>
              <li>Insurance claims can take time, and the Renter may owe the Owner compensation in the interim</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.3 Scenario: Accident (Other Party at Fault)</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>If another driver causes an accident:</p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>The at-fault driver's insurance should cover damage and injuries</li>
              <li>The Owner or Renter may need to pursue a claim against the other party's insurer</li>
              <li>The Owner's insurance may also be involved depending on circumstances</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>6.4 Scenario: Injury to Renter or Passengers</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If the Renter or passengers are injured in an accident:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Medical costs may be covered by personal health insurance</li>
              <li>The at-fault driver's liability insurance should cover injury claims</li>
              <li>Additional personal injury protection (if Renter has it) may apply</li>
              <li>Owners are generally not liable unless negligence (e.g., faulty brakes) is proven</li>
            </ul>
          </section>

          {/* What to Do in Case of Accident */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>7. Steps to Take in Case of Accident or Damage</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              If an accident, damage, or theft occurs during a rental, follow these steps:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.1 Immediate Actions</h3>
            <ol className='list-decimal pl-6 mb-4 text-gray-700 space-y-2'>
              <li>
                <strong>Ensure safety:</strong> Check for injuries and call emergency services (103 for ambulance, 102
                for police) if needed
              </li>
              <li>
                <strong>Secure the scene:</strong> Move to a safe location if possible, turn on hazard lights
              </li>
              <li>
                <strong>Contact the Owner:</strong> Notify the vehicle owner immediately about the incident
              </li>
              <li>
                <strong>Call the police:</strong> File an official police report (required for insurance claims)
              </li>
              <li>
                <strong>Document everything:</strong> Take photos and videos of all damage, the scene, license plates,
                and other relevant details
              </li>
              <li>
                <strong>Exchange information:</strong> Get contact and insurance information from all parties involved
              </li>
              <li>
                <strong>Do not admit fault:</strong> Provide facts but avoid making statements about responsibility
              </li>
            </ol>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.2 Follow-Up Actions</h3>
            <ol className='list-decimal pl-6 mb-4 text-gray-700 space-y-2'>
              <li>
                <strong>Report to insurance:</strong> The Owner should contact their insurance company promptly
              </li>
              <li>
                <strong>Provide documentation:</strong> Submit police reports, photos, and witness information
              </li>
              <li>
                <strong>Cooperate with investigations:</strong> Work with insurance adjusters and authorities
              </li>
              <li>
                <strong>Discuss costs:</strong> Owner and Renter should agree on how to handle deductibles and
                out-of-pocket expenses
              </li>
              <li>
                <strong>Keep records:</strong> Maintain copies of all documents, communications, and expenses
              </li>
            </ol>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>7.3 YayaGo's Role</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              YayaGo is not involved in accident resolution, insurance claims, or disputes. However, we may:
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Provide basic contact information if requested by authorities</li>
              <li>Suspend or ban users involved in fraudulent activity</li>
              <li>Share general resources and guidance (but not legal advice)</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Users are responsible for resolving all issues directly with each other and their insurance providers.
            </p>
          </section>

          {/* Fraud Prevention */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>8. Fraud Prevention and Red Flags</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Be cautious of potential fraud or insurance issues. Watch for these red flags:
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>8.1 For Renters</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Owner refuses to provide proof of insurance</li>
              <li>Insurance documents look forged or outdated</li>
              <li>Owner pressures you to skip inspections or documentation</li>
              <li>Vehicle has significant undisclosed damage</li>
              <li>Owner asks for payment in untraceable methods without proper receipts</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>8.2 For Owners</h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>Renter refuses to provide identification or driver's license</li>
              <li>Renter seems evasive about rental purpose or plans</li>
              <li>Renter resists signing rental agreements or providing deposits</li>
              <li>Renter's story or credentials don't add up</li>
            </ul>

            <p className='text-gray-700 leading-relaxed mb-4'>
              If something feels wrong, trust your instincts and don't proceed with the rental. Report suspicious
              activity to YayaGo support and local authorities if necessary.
            </p>
          </section>

          {/* FAQs */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>9. Frequently Asked Questions</h2>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>Q: Does YayaGo provide insurance?</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> No. YayaGo is a listing platform only. We do not provide, facilitate, or guarantee any
              insurance coverage.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>Q: Am I covered by the Owner's insurance?</h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> It depends on the Owner's specific policy. Many policies cover additional drivers, but
              some exclude rentals. You must verify coverage directly with the Owner and their insurer.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Q: What happens if I get into an accident as a Renter?
            </h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> You are generally liable for damage caused while you were driving. The Owner's
              insurance may cover third-party damage, but you'll likely be responsible for deductibles and damage to the
              rental vehicle itself. This is why having your own insurance or setting clear terms in a rental agreement
              is critical.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Q: Can I rent out my car if I only have basic third-party insurance?
            </h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> Legally, yes, as long as your vehicle has valid third-party insurance. However, you
              take on significant financial risk. If the Renter damages your car, basic insurance won't cover repairs.
              We strongly recommend comprehensive coverage before renting out your vehicle.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Q: Do I need special "commercial" insurance to list my car?
            </h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> It depends on your insurance provider and local regulations. Some personal policies
              allow occasional rentals; others require commercial coverage. Check with your insurer before listing your
              vehicle.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Q: What if the Renter refuses to pay for damage they caused?
            </h3>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>A:</strong> This is a dispute between you and the Renter. YayaGo does not mediate disputes or
              enforce payments. You may need to pursue legal action. Having a signed rental agreement and documentation
              (photos, police reports) strengthens your case.
            </p>
          </section>

          {/* Conclusion */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>10. Conclusion</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Insurance is a critical component of safe and responsible vehicle rentals. While YayaGo facilitates
              connections between Owners and Renters, all insurance matters are handled directly between the parties
              involved and their insurance providers.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              <strong>Key Takeaways:</strong>
            </p>
            <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
              <li>
                Owners must have valid third-party liability insurance; comprehensive coverage is strongly recommended
              </li>
              <li>Renters should verify insurance coverage and consider their own protection</li>
              <li>Always document vehicle condition and obtain written rental agreements</li>
              <li>In case of accidents, follow proper procedures and contact insurance providers promptly</li>
              <li>YayaGo is not responsible for insurance matters or claims</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mb-4'>
              When in doubt, consult with insurance professionals and legal advisors to ensure you have appropriate
              coverage for your situation.
            </p>
          </section>

          {/* Contact */}
          <section className='mb-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>11. Contact Information</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              For questions about this Insurance Policy or general platform inquiries:
            </p>
            <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700'>
              <p className='mb-2'>
                <strong>YayaGo Support</strong>
              </p>
              <p className='mb-2'>Email: support@yayago.az</p>
              <p className='mb-2'>Phone: +994 XX XXX XX XX</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
            <p className='text-gray-700 leading-relaxed mt-4'>
              <strong>Note:</strong> YayaGo support cannot provide insurance advice or handle claims. For insurance
              matters, contact your insurance provider or a licensed insurance professional.
            </p>
          </section>

          {/* Disclaimer */}
          <section className='mb-10'>
            <div className='bg-red-50 border-2 border-red-300 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>Legal Disclaimer</h3>
              <p className='text-gray-800 leading-relaxed text-sm'>
                This Insurance Policy document is for informational purposes only and does not constitute legal,
                insurance, or financial advice. YayaGo makes no representations or warranties about the accuracy,
                completeness, or applicability of this information. Insurance laws, requirements, and policies vary and
                change over time. You are solely responsible for ensuring compliance with all applicable laws and
                obtaining appropriate insurance coverage. Consult with qualified insurance professionals and legal
                advisors for advice specific to your situation. By using YayaGo, you acknowledge that you have read and
                understood this Insurance Policy and agree that YayaGo bears no responsibility for insurance matters
                related to vehicle rentals.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
