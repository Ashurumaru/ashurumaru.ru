'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { Service } from '@/shared/types/types';

const ServiceItem: React.FC<Service> = ({ num, title, description, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeInOut' }}
      className="flex flex-col justify-between gap-6 bg-white shadow-lg rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl font-bold text-accent group-hover:text-primary transition-all duration-300">
          {num}
        </div>
        <Link
          href={href}
          className="w-[50px] h-[50px] rounded-full bg-accent group-hover:bg-primary transition-all duration-300 flex justify-center items-center transform group-hover:rotate-45"
        >
          <BsArrowDownRight className="text-white text-xl" />
        </Link>
      </div>
      <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-all duration-300 mb-4">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      <div className="border-t border-gray-200 pt-4 mt-auto">
        <Link
          href={href}
          className="text-accent hover:text-primary text-sm font-medium transition-all duration-300"
        >
          Подробнее
        </Link>
      </div>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]"
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
