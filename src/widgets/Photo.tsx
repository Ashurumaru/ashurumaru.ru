'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo } from 'react';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}
          className="relative w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.webp"
            priority={true}
            quality={70}
            fill
            alt="Decorative photo"
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <motion.svg
          className="absolute w-[305px] xl:w-[410px] h-[305px] xl:h-[410px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#C5B8A5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default memo(Photo);
