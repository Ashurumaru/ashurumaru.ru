import Link from "next/link";
import { FaGithub, FaVk, FaTelegram, FaDiscord } from "react-icons/fa";
import { memo } from "react";

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Ashurumaru' },
    { icon: <FaVk />, path: 'https://vk.com/o.velikiy.sergio' },
    { icon: <FaTelegram />, path: 'https://t.me/ashurumaru' },
    { icon: <FaDiscord />, path: 'https://discordapp.com/users/572333393384308746' },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} aria-label={item.path}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default memo(Social);
