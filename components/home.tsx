'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Header from './header';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="min-h-screen bg-[#0a0a20] text-white">
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t('title')}</h1>

            <div className="space-y-4">
              <p className="text-gray-300">{t('intro1')}</p>
              <p className="text-gray-300">{t('intro2')}</p>
            </div>

            <p className="font-medium">{t('perfectChoice')}</p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{t('feature1')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{t('feature2')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{t('feature3')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{t('feature4')}</span>
              </li>
            </ul>

            <div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
                {t('registerNow')}
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/proxy-servers.png"
              alt="Proxy servers illustration"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
