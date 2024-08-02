'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

interface Service {
    num: string;
    title: string;
    description: string;
    href: string;
}

const services: Service[] = [
    {
        num: '01',
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    },
    {
        num: '02',
        title: 'Backend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    },
    {
        num: '03',
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    },
    {
        num: '04',
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    }
];

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
                <Link href={href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
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

const Services: React.FC = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.3, duration: 0.4, ease: 'easeInOut' }
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
