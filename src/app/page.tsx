import dynamic from 'next/dynamic';
import { FiDownload } from 'react-icons/fi';
import React from 'react';
import { Button } from '@/components/ui/button';

const Social = dynamic(() => import('@/components/Social'), { ssr: false });
const Photo = dynamic(() => import('@/components/Photo'), { ssr: false });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false });

const Home: React.FC = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Текстовый блок */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1">
                            Hello, I&apos;m <br />
                            <span className="text-accent">Ashurumaru</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            {/* <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button> */}
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Фотография */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;
