import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../assets/logo.png';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={logoImage}
              alt="Sweatchi logo"
              width={120}
              height={32}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Privacy Content */}
      <main className="max-w-4xl mx-auto px-4 py-4">
        <div className="sm:glassmorphism sm:rounded-2xl p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-white leading-relaxed mb-6">
              We at Spicestorm Inc. (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) respect your concerns about privacy. This Privacy
              Policy explains how we use any personal data we collect about you
              and your rights in relation to the information. &quot;Personal
              data&quot; means any information that identifies you as an
              individual or is capable of identifying you as an individual. For
              the purpose of applicable data protection laws, including the
              General Data Protection Regulation (the &quot;GDPR&quot;) and the
              California Consumer Privacy Act (&quot;CCPA&quot;) the data
              controller is Spicestorm Inc. with email address{' '}
              <a
                href="mailto:sweatchiofficial@gmail.com?subject=Privacy%20Inquiry"
                className="text-[#FEC3DB] hover:text-[#E56197] transition-colors"
              >
                sweatchiofficial@gmail.com
              </a>
              .
            </p>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Information covered by this Privacy Policy
              </h2>
              <p className="text-white leading-relaxed">
                This Privacy Policy covers all personal data collected and used
                by us. This includes your name, age, postal address, email
                address, phone number, credit card number, details of the
                preferences you express to us, your comments and questions, and
                technical information from the devices you use to access our
                website. It also includes information on your body and
                wellbeing, including height, weight (including information on
                obesity), body statistics, workouts, mood, meals, nutrition and
                general health and wellbeing, that you decide to disclose to us
                on this website or through the use of our app, as well as any
                pictures that you choose to share with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Personal Data we obtain
              </h2>
              <p className="text-white leading-relaxed mb-4">
                We (and our service providers) collect this personal data from
                you when you:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  purchase products or services from us, including a coaching
                  subscription.
                </li>
                <li>submit any information through this website.</li>
                <li>
                  create an account with us, or otherwise sign up for our
                  services.
                </li>
                <li>
                  opt in to or otherwise receive marketing from us or our
                  representatives.
                </li>
                <li>choose to participate in our customer feedback surveys.</li>
                <li>
                  communicate with us via third-party social media websites.
                </li>
                <li>
                  contact us, correspond with us, or otherwise provide
                  information to us.
                </li>
              </ul>

              <p className="text-white leading-relaxed mb-4">
                We also work closely with third parties (such as business
                partners and analytics providers) and may receive other personal
                data about you from those third parties, which we may combine
                with the information you have provided to us. We process all
                data we obtain from such other sources in accordance with this
                Privacy Notice. When you visit our website and/or the app, we
                (and our service providers) may use cookies and other
                technologies to automatically collect the following information
                on you:
              </p>

              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  technical information, including your IP address, your login
                  information, browser type and version, device identifier,
                  location and time zone setting, browser plug-in types and
                  versions, operating system and platform, page response times
                  and download errors.
                </li>
                <li>
                  information about your visit, including the websites you visit
                  before and after our website and products you viewed or
                  searched for.
                </li>
                <li>
                  length of visits to certain pages, page interaction
                  information (such as scrolling, clicks and mouseovers) and
                  methods used to browse away from the page.
                </li>
              </ul>

              <p className="text-white leading-relaxed mb-4">
                Within our app you may choose to:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  record a fitness activity, for example a run. You must first
                  allow the app to access your location. Then the app will
                  access your location data from the moment you start recording
                  the activity until the moment you stop the recording. To
                  ensure that your full activity is recorded, we need to
                  continue to access the location data if the app is in the
                  background during the activity. You can remove the permission
                  at any time by adjusting your device settings.
                </li>
                <li>
                  import your history of fitness activities from Apple Health or
                  Google Fit. You must first allow the app to access your data
                  from these sources. We will then use Google APIs to receive
                  the information. Our use of information received from Google
                  APIs will adhere to Google API Services User Data Policy,
                  including the Limited Use requirements. You can remove the
                  permission at any time by adjusting your app settings.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                How we use the information we obtain
              </h2>
              <p className="text-white leading-relaxed mb-4">
                We use the personal data we collect from and about you for the
                following purposes:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>to set up and manage your online account.</li>
                <li>
                  to provide our services to you, which may include designing
                  tailored meal and workout plans.
                </li>
                <li>
                  monitoring changes or adaptations in your body to improve your
                  coaching cycle, and to combine information we receive and
                  collect (e.g. from updates you provide on your body
                  transformation) to provide you with a more personalised
                  experience and to make informed decisions about future
                  coaching to best facilitate your improvement. This also
                  provides vital statistics which we use to better understand
                  the efficacy of different approaches to dieting and workouts.
                </li>
                <li>
                  a history of your fitness activities, including (where
                  eligible) duration, distance, speed, activity type and heart
                  rate, as well as an overview of your fitness progression.
                </li>
                <li>
                  access to the chat functionality, including a group chat with
                  other clients, where you may post and communicate.
                </li>
                <li>
                  to provide you with information about our products and
                  services (provided you have either consented to this or we by
                  other means are allowed to reach out to you for marketing
                  purposes).
                </li>
                <li>to process your payments.</li>
                <li>to keep our website safe and secure.</li>
                <li>
                  to keep an up-to-date suppression list where you have asked
                  not to be contacted, in order for us to not inadvertently
                  re-contact you.
                </li>
                <li>
                  to notify you of any changes to our services that may affect
                  you.
                </li>
                <li>
                  to comply with our legal obligations to keep internal
                  (financial) records.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                The use of consent for processing of your health data
              </h2>
              <p className="text-white leading-relaxed mb-4">
                In order for us to be able to deliver customized meal- and
                workout plans to you, we may process certain health data
                provided by you, including information on allergens, information
                that might reveal obesity or specific injuries or other relevant
                information related to your physical or mental health status.
                The legal basis for our processing of your health information is
                Article 9 2) a cf. Article 6 1) b) of the GDPR, which means that
                we will ask you for your explicit consent to allow us to process
                your health data prior to you becoming a client with us.
              </p>
              <p className="text-white leading-relaxed mb-4">
                You may at any time withdraw your consent to us processing your
                health data. However, you should be aware that if we are
                prevented from processing relevant personal data, including
                information on any allergens, information that might reveal
                obesity or specific injuries or other relevant information
                related to your physical or mental health status, we will not be
                able to provide you with our services (customized meal- and
                workout plans based on your unique needs).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Third Parties, including processing by Lenus eHealth ApS
              </h2>
              <p className="text-white leading-relaxed mb-4">
                The security of your personal data is extremely important to us.
                We do not sell your personal data to any third parties, and we
                never will. Access to your personal data is only provided to
                carefully selected third parties, including:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  our service providers who help us to provide our services to
                  you, such as our infrastructure and IT service providers.
                  These include Lenus eHealth ApS and Stripe, who support our
                  business by providing technical infrastructure services,
                  analysing product performance, providing technical assistance
                  and facilitating payments.
                </li>
                <li>
                  our regulators, or organisations to whom we are required to
                  disclose your personal data by law.
                </li>
                <li>
                  third parties connected with business transfers, such as in
                  connection with a reorganisation, restructuring, merger,
                  acquisition or transfer of assets, provided that the receiving
                  party agrees to treat your personal data in a manner
                  consistent with this Privacy Notice.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                How long we retain your personal data for
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Your personal data will only be stored for as long as necessary
                for the purposes for which they were collected and only to the
                extent permitted by applicable laws. When we no longer need to
                use your information, we will remove it from our systems and
                records and / or take steps to promptly anonymise it so that you
                can no longer be identified from it (unless we need to keep your
                information to comply with legal or regulatory obligations to
                which we are subject).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20 rounded-lg">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="border border-white/20 p-3 text-left text-white font-bold">
                        Processing purposes
                      </th>
                      <th className="border border-white/20 p-3 text-left text-white font-bold">
                        Retention period
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-white/20 p-3 text-white">
                        Management of your account
                      </td>
                      <td className="border border-white/20 p-3 text-white">
                        36 months after your last activity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3 text-white">
                        Delivery of coaching services
                      </td>
                      <td className="border border-white/20 p-3 text-white">
                        36 months after your last activity (except health
                        information and uploaded pictures, which is only 6
                        months)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3 text-white">
                        Marketing purposes, targeting our product to your needs
                        (including based on a profiling of you and your
                        activities) and customer satisfaction surveys
                      </td>
                      <td className="border border-white/20 p-3 text-white">
                        6 months after your last activity
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3 text-white">
                        Mandatory recordkeeping including payments
                      </td>
                      <td className="border border-white/20 p-3 text-white">
                        60 months after the end of the fiscal year of your last
                        activity
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white leading-relaxed mt-4">
                Any health information as well as uploaded body images will
                however always be deleted 6 months after your last activity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Your Personal Data Rights
              </h2>
              <p className="text-white leading-relaxed mb-4">
                You have various rights in connection with our processing of
                your personal data:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  <strong>Access.</strong> You have the right to request a copy
                  of the personal data we are processing about you, which we
                  will provide back to you in electronic form.
                </li>
                <li>
                  <strong>Rectification.</strong> You have the right for any
                  incomplete or inaccurate personal data that we process about
                  you to be rectified.
                </li>
                <li>
                  <strong>Deletion.</strong> You have the right to request that
                  we delete personal data that we process about you, except we
                  are not obligated to do so if we need to retain such data in
                  order to comply with a legal obligation or to establish,
                  exercise or defend legal claims.
                </li>
                <li>
                  <strong>Restriction.</strong> You have the right to restrict
                  our processing of your personal data where you believe such
                  data to be inaccurate, our processing is unlawful or that we
                  no longer need to process such data for a particular purpose.
                </li>
                <li>
                  <strong>Objection.</strong> Where the legal justification for
                  our processing of your personal data is our legitimate
                  interest, you have the right to object to such processing on
                  grounds relating to your particular situation.
                </li>
                <li>
                  <strong>Withdrawing Consent.</strong> Where we process certain
                  personal data on the basis of your consent, you have the right
                  to withdraw your consent, including with regard to direct
                  marketing.
                </li>
              </ul>

              <p className="text-white leading-relaxed mb-4">
                If you wish to exercise one or more of the above rights, please
                contact us with your request at{' '}
                <a
                  href="mailto:sweatchiofficial@gmail.com?subject=Data%20Rights%20Request"
                  className="text-[#FEC3DB] hover:text-[#E56197] transition-colors"
                >
                  sweatchiofficial@gmail.com
                </a>
                , and include your name, email and postal address, as well as
                your specific request and any other information we may need in
                order to provide or otherwise process your request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                How to Contact Us
              </h2>
              <p className="text-white leading-relaxed">
                We are here to help. If you wish to contact us for any reason,
                please email us at{' '}
                <a
                  href="mailto:sweatchiofficial@gmail.com?subject=General%20Inquiry"
                  className="text-[#FEC3DB] hover:text-[#E56197] transition-colors"
                >
                  sweatchiofficial@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
