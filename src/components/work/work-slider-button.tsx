'use client';

import React from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

interface WorkSliderBtnProps {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
}

const WorkSliderButton: React.FC<WorkSliderBtnProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButton;
