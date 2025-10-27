'use client';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../assets/logo.png';
import { createMailLink } from '../utils/mail-redirect';

export default function Terms() {
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

      {/* Terms Content */}
      <main className="max-w-4xl mx-auto px-4 py-4">
        <div className="sm:glassmorphism sm:rounded-2xl p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Terms and Conditions
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                1. WHO WE ARE
              </h2>
              <p className="text-white leading-relaxed">
                We are Sweatchi, Spicestorm Inc a Canada, Ontario company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                2. ORDERING COACHING SERVICES
              </h2>
              <p className="text-white leading-relaxed">
                Orders for paid coaching services are processed via our
                third-party payment provider, Apple App Store, Google Play,
                Stripe, Inc. (&quot;Stripe&quot;) and are subject to App
                store&apos;s, Google Play store and Stripe&apos;s Terms and
                Privacy Policy, accessible at App store&apos;s website or Google
                Play store website or{' '}
                <a
                  href="https://stripe.com/legal/ssa"
                  className="text-[#FEC3DB] hover:text-[#E56197] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://stripe.com/legal/ssa
                </a>
                , and any other applicable agreements Stripe may require. Your
                exact payment terms and dates will depend on the specific
                services that you signed up for, reflected in your order
                confirmation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                4. CANCELING YOUR MEMBERSHIP
              </h2>
              <p className="text-white leading-relaxed">
                You may end your membership by ending the subscription on App
                store or Google Play store
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                5. NON REFUNDABLE MEMBERSHIP FEES
              </h2>
              <p className="text-white leading-relaxed">
                All fees paid up to the point of cancellation, including the
                penalty charge for early termination, are non-refundable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                6. MEDICAL LIABILITY WAIVER
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Your safety is very important. Please consult your physician,
                assess your fitness level and follow all safety instructions
                before beginning any exercise program, nutrition program, meal
                guide, and/or using any equipment. This program provides a
                variety of exercises, some of which are physically demanding and
                may be high-intensity in nature at times. For this reason, you
                must listen to your body, use common sense, take breaks, and
                hydrate as needed to avoid injury. If at any time you feel
                discomfort, pain, dizziness, lightheadedness, shortness of
                breath, or nausea, stop exercising immediately and consult your
                physician. Incorrect or excessive training can result in serious
                injury or fatality if done wrong. When doing any outdoor workout
                or activities, be aware of your surroundings and avoid anything
                that could hurt you or disrupt your exercise, especially when
                walking or running in public areas such as sidewalks/pavements
                and streets.
              </p>

              <p className="text-white leading-relaxed mb-4">
                If you have any unique or special medical conditions, such as if
                you&apos;re pregnant, have diabetes or asthma, or If you have a
                history of knee, ankle, hip, shoulder or spinal (back or neck)
                problems, you must consult your physician to understand
                potential risks and complications of using our exercise
                programs, meal guide/nutrition, and/or equipment, and receive
                approval from them to proceed before beginning. Failure to do so
                could result in significant injury to you and others (including,
                if applicable, your unborn child). By engaging in any exercise,
                meal guide/nutrition plan, and/or equipment, you assume all
                dangers, hazards, and risks of injury or fatality/death.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Safe use of equipment:
              </h3>
              <p className="text-white leading-relaxed mb-4">
                Fitness equipment presents hazards which, if not avoided, could
                cause serious injury or fatality/ death. Certain program may
                utilize equipment, such as the fitness bike, jump ropes,
                resistance bands, dumbbells, loops, pull-up bars, benches,
                stability balls, sliding discs, treadmill, weights and other
                equipment which, if not used correctly, could lead to serious
                injury or fatality/death. Carefully, review all safety, care and
                use instructions and manuals prior to beginning.
              </p>

              <p className="text-white leading-relaxed mb-4">
                For your safety, you must:
              </p>
              <ul className="list-disc list-inside text-white leading-relaxed mb-4 space-y-2">
                <li>
                  Use any equipment shown in the workouts only as demonstrated,
                  using the proper form
                </li>
                <li>
                  Inspect any equipment for wear or damage prior to each use and
                  refrain from using any equipment that appears damaged, worn or
                  defective
                </li>
                <li>
                  Keep children, pets and any other obstacles away from
                  equipment and exercise area at all times
                </li>
                <li>
                  Always use a secure, proper and stable anchor for any
                  equipment that requires hanging or attaching
                </li>
                <li>
                  Always exercise caution during use of any equipment to make
                  sure you do not lose your grip or control, such as making sure
                  your hands are not wet or sweaty
                </li>
                <li>
                  Ensure exercise bands are firmly secure and assembled to
                  prevent slipping, snapping, recoiling and injury to yourself
                  or anyone else
                </li>
                <li>
                  Ensure your workout bench, floor mat and pull-up bar is
                  stable, strong enough to hold your weight and does not move
                  during use. If you do not think you can safely perform
                  exercises with your bench or pull-up bar or floor mat, or if
                  you do not have proper equipment, you should do the modifier
                  exercises instead or if uncomfortable then do not proceed till
                  you fix this problem at your end
                </li>
              </ul>

              <p className="text-white leading-relaxed mb-4">
                Please consult your physician before engaging in heart rate
                training, especially if you are pregnant, are younger than 18
                years old, have any underlying heart, lung, or any other medical
                condition, or are unsure about elevating your heart rate to the
                max. If you are younger than 18 years old, please also get your
                parent or guardian&apos;s permission before beginning. To the
                fullest extent permitted by law, Sweatchi, Spicestorm Inc, its
                affiliate, and subsidiary companies will not be liable to any
                person or entity for any injury, fatality/death, damage or loss
                caused or alleged to be caused directly or indirectly by any
                exercise programs, meal guide/nutrition plans, supplements
                recommended, equipment (not limited to the one mentioned above
                in point 5), advice or any other products, services or materials
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                7. HOW TO CONTACT US
              </h2>
              <p className="text-white leading-relaxed">
                We are here to help. If you wish to contact us for any reason,
                please email us at{' '}
                <a
                  {...createMailLink(
                    'sweatchiofficial@gmail.com',
                    'General Inquiry',
                    'Hello Sweatchi Team,\n\n'
                  )}
                  className="text-[#FEC3DB] hover:text-[#E56197] transition-colors"
                >
                  sweatchiofficial@gmail.com
                </a>
                . By signing up for our coaching services, you agree that we,
                along with our representatives and business partners, may
                contact you regarding our coaching services.
              </p>
            </section>

            <div className="border-t border-white/20 pt-6 mt-8">
              <p className="text-white/70 text-sm">
                Published at: Sep 1st, 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
