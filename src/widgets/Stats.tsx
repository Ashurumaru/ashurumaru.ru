"use client";

import useGithubStats from "react-github-user-stats";
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaHeart, FaCheckCircle, FaLaptopCode, FaTrophy, FaBook, FaTv, FaGamepad } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface GithubData {
    publicRepos: number;
    followers: number;
}

interface FallbackData {
    publicRepos: number;
    followers: number;
}

const FALLBACK_DATA: FallbackData = {
    publicRepos: 12,
    followers: 3,
};

const STATIC_STATS = {
    completedProjects: 1,
    knownTechnologies: 4,
    apexHours: 1854,
    hackathonsParticipated: 2,
    mangasRead: 999,
    animesWatched: 280,
};

interface StatCardProps {
    value: number;
    label: string;
    IconComponent: IconType;
}

const StatCard: React.FC<StatCardProps> = React.memo(({ value, label, IconComponent }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
        className="relative p-6 rounded-lg shadow-2xl transition-transform duration-500 transform group hover:scale-110 bg-transparent border border-gray-700 flex flex-col items-center"
    >
        <div className="flex items-center justify-center mb-4 space-x-4 transition-colors duration-300 group-hover:text-accent-hover group-hover:translate-z-10">
            <div className="text-5xl font-extrabold text-white group-hover:text-accent-hover">
                <CountUp end={value} duration={5} delay={0.3} />
            </div>
            <IconComponent className="text-5xl text-gray-400 group-hover:text-accent-hover transition-colors duration-300" />
        </div>
        <p className="text-lg leading-snug text-white/80 text-center group-hover:text-accent-hover">
            {label}
        </p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
    </motion.div>
));

StatCard.displayName = "StatCard";

const Stats: React.FC = () => {
    const { error, loading, userData } = useGithubStats("Ashurumaru");
    const [githubData, setGithubData] = useState<GithubData>(FALLBACK_DATA);

    useEffect(() => {
        if (userData && !error) {
            setGithubData({
                publicRepos: userData.public_repos,
                followers: userData.followers,
            });
        } else if (error) {
            console.error("Failed to fetch GitHub data. Using fallback data.", error);
        }
    }, [userData, error]);

    const renderStatCards = (stats: { value: number, label: string, IconComponent: IconType }[]) =>
        stats.map((stat, index) => <StatCard key={index} value={stat.value} label={stat.label} IconComponent={stat.IconComponent} />);

    return (
        <section className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80vw] mx-auto sm:max-w-none text-center">
                {renderStatCards([
                    { value: githubData.publicRepos, label: "Public Repos", IconComponent: FaCode },
                    { value: githubData.followers, label: "Github Followers", IconComponent: FaHeart },
                    { value: STATIC_STATS.completedProjects, label: "Completed Projects", IconComponent: FaCheckCircle },
                    { value: STATIC_STATS.knownTechnologies, label: "Known Technologies", IconComponent: FaLaptopCode },
                    { value: STATIC_STATS.hackathonsParticipated, label: "Hackathons Participated", IconComponent: FaTrophy },
                    { value: STATIC_STATS.mangasRead, label: "Mangas Read", IconComponent: FaBook },
                    { value: STATIC_STATS.animesWatched, label: "Animes Watched", IconComponent: FaTv },
                    { value: STATIC_STATS.apexHours, label: "Hours in Apex Legends", IconComponent: FaGamepad },
                ])}
            </div>
        </section>
    );

};

export default Stats;
