'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logoImage from '../assets/logo.png';
import type { PageContent } from '../utils/fetch-page-content';

const BASE_URL = 'https://api.sweatchi.com/api/v1';

export default function Terms() {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${BASE_URL}/content/pages/terms/`);

        if (!response.ok) {
          throw new Error(`Failed to fetch terms page: ${response.statusText}`);
        }

        const data: PageContent = await response.json();
        setPageContent(data);
      } catch (err) {
        console.error('Error fetching terms page:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

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
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
              <p className="text-white text-lg">
                Loading terms and conditions...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 text-lg mb-4">{error}</p>
              <p className="text-white leading-relaxed">
                Unable to load terms and conditions content. Please try again
                later.
              </p>
            </div>
          ) : (
            <>
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
                    Unable to load terms and conditions content. Please try
                    again later.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
