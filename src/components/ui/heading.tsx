import React from 'react';

interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};
