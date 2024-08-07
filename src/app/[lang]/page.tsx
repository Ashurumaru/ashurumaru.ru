import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';

const Social = dynamic(() => import('@/widgets/Social'), { ssr: false });
const Photo = dynamic(() => import('@/widgets/Photo'), { ssr: false });
const Stats = dynamic(() => import('@/widgets/Stats'), { ssr: false });

const Home: React.FC<{ params: { lang: Locale } }> = async ({
  params: { lang },
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Текстовый блок */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{dictionary.home.jobTitle}</span>
            <h1 className="h1">
              {dictionary.home.greeting} <br />
              <span className="text-accent">{dictionary.home.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {dictionary.home.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Suspense fallback={<div>Loading photo...</div>}>
              <Photo />
            </Suspense>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
