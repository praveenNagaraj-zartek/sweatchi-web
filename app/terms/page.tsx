import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../assets/logo.png';
import { fetchPageContent } from '../utils/fetch-page-content';

// ISR: Revalidate every hour
// export const revalidate = 3600;

export default async function Terms() {
  const pageContent = await fetchPageContent('terms');

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
            {pageContent?.title || 'Terms and Conditions'}
          </h1>

          <div className="prose prose-invert max-w-none">
            {pageContent?.content ? (
              <div
                className="text-white leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pageContent.content }}
              />
            ) : (
              <p className="text-white leading-relaxed">
                Unable to load terms and conditions content. Please try again
                later.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
