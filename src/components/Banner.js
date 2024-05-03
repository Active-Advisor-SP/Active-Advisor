import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4x1 lg:text-[48px] font-semibold leading-none mb-6'>
            <span className='text-violet-700' style={{ color: '#3B5B5D' }}>Active Advisor</span> chose the right sport for you.
          </h1>
          <p className='max-w-[480px] lg:text-[20px] mb-8' style={{ color: '#3B5B5D' }}>It's up to you to choose the perfect field of sports. Sports preserve health, enhance endurance, reduce stress, and improve quality of life.</p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
