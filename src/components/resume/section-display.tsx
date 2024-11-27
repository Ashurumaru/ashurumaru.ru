import React from 'react';

interface SectionDisplayProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const  SectionDisplay: React.FC<SectionDisplayProps> = ({
                                                         title,
                                                         description,
                                                         icon,
                                                         children,
                                                       }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <div className="flex items-center justify-center xl:justify-start gap-4">
      {icon && <div className="text-accent text-4xl">{icon}</div>}
      <h2 className="text-4xl font-semibold">{title}</h2>
    </div>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    {children}
  </div>
);

export default SectionDisplay;
