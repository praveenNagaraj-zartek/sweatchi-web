import Image from 'next/image';
import Link from 'next/link';
import bannerImage from './assets/banner.png';
import logoImage from './assets/logo.png';

export default function Home() {
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

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative">
          <Image
            src={bannerImage}
            alt="Fitness banner"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover rounded-2xl"
            priority
            placeholder="blur"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-4xl z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-lg">
                Your Ultimate Fitness Companion
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-6 md:mb-8 font-normal max-w-3xl mx-auto drop-shadow-md">
                Track your progress, discover new exercises, and stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center">
            Achieve Your Fitness Goals
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-12 font-normal max-w-4xl mx-auto text-center">
            Our app provides you with the tools and support you need to reach
            your fitness aspirations. Whether you&apos;re a beginner or a
            seasoned athlete, we&apos;ve got you covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:backdrop-blur-3xl hover:border-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                💪
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                Train With Me
              </h3>
              <p className="text-white font-normal leading-relaxed text-xs sm:text-sm md:text-base">
                Follow programs I&apos;ve designed — and do alongside you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:backdrop-blur-3xl hover:border-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                🥗
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                Eat Smart
              </h3>
              <p className="text-white font-normal leading-relaxed text-xs sm:text-sm md:text-base">
                Calorie-counted recipes, no strict meal plans.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:backdrop-blur-3xl hover:border-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                🧘‍♀️
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                Learn & Grow
              </h3>
              <p className="text-white font-normal leading-relaxed text-xs sm:text-sm md:text-base">
                Quick lessons on fitness, food, and mindset.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:backdrop-blur-3xl hover:border-white/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                💬
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
                Find Your Community
              </h3>
              <p className="text-white font-normal leading-relaxed text-xs sm:text-sm md:text-base">
                Join real women making real progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4">
            <Link
              href="/terms"
              className="text-white hover:text-[#FEC3DB] transition-colors text-sm sm:text-base"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-[#FEC3DB] transition-colors text-sm sm:text-base"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FEC3DB] transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-white text-xs sm:text-sm">
            © {new Date().getFullYear()} Sweatchi
          </p>
        </div>
      </footer>
    </div>
  );
}
