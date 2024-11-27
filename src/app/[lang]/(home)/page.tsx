import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { Skeleton } from '@/components/ui/skeleton';

const Social = dynamic(() => import('@/components/home/social'), { ssr: false });
const Photo = dynamic(() => import('@/components/home/photo'), { ssr: false });
const Stats = dynamic(() => import('@/components/home/stats'), { ssr: false });

type HomePageProps = {
  params: {
    lang: Locale;
  };
};

const Home: React.FC<HomePageProps> = async ({
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
            <p className="text-lg max-w-[500px] text-white/80 mb-8 leading-relaxed mt-8">
              {dictionary.home.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-14 h-14 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Загрузка фото с Skeleton */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Suspense fallback={<Skeleton className="w-40 h-40 rounded-full mx-auto" />}>
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
