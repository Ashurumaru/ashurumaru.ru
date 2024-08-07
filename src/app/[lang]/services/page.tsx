'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';

interface Service {
  num: string;
  title: string;
  description: string;
  href: string;
}

const ServiceItem: React.FC<Service> = ({ num, title, description, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeInOut' }}
      className="flex flex-1 flex-col justify-center gap-6 group"
    >
      <div className="flex justify-between items-center">
        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {num}
        </div>
        <Link
          href={href}
          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </div>
      <h2 className="text-[42px] font-bold float-none text-white group-hover:text-accent transition-all duration-500">
        {title}
      </h2>
      <p className="text-white/60">{description}</p>
      <div className="border-b border-white/20 w-full"></div>
    </motion.div>
  );
};

const Services: React.FC<{ params: { lang: Locale } }> = ({
  params: { lang },
}) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const dictionary = await getDictionary(lang);

      const fetchedServices: Service[] = [
        {
          num: dictionary.services.coursework.num,
          title: dictionary.services.coursework.title,
          description: dictionary.services.coursework.description,
          href: '',
        },
        {
          num: dictionary.services.thesis.num,
          title: dictionary.services.thesis.title,
          description: dictionary.services.thesis.description,
          href: '',
        },
        {
          num: dictionary.services.essays.num,
          title: dictionary.services.essays.title,
          description: dictionary.services.essays.description,
          href: '',
        },
        {
          num: dictionary.services.labs.num,
          title: dictionary.services.labs.title,
          description: dictionary.services.labs.description,
          href: '',
        },
        {
          num: dictionary.services.telegramBot.num,
          title: dictionary.services.telegramBot.title,
          description: dictionary.services.telegramBot.description,
          href: '',
        },
        {
          num: dictionary.services.landingPage.num,
          title: dictionary.services.landingPage.title,
          description: dictionary.services.landingPage.description,
          href: '',
        },
        {
          num: dictionary.services.businessCardSite.num,
          title: dictionary.services.businessCardSite.title,
          description: dictionary.services.businessCardSite.description,
          href: '',
        },
        {
          num: dictionary.services.examPreparation.num,
          title: dictionary.services.examPreparation.title,
          description: dictionary.services.examPreparation.description,
          href: '',
        },
      ];

      setServices(fetchedServices);
    };

    fetchServices();
  }, [lang]);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4, ease: 'easeInOut' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <ServiceItem
              key={service.num}
              num={service.num}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
