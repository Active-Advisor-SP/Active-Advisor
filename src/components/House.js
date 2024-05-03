import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price, description, name, typetip } = house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full hover:shadow-2xl' style={{ boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.6)', marginBottom: '15px', marginTop: '-10px' }}>
      <div className="flex items-center relative">
        <img
          src={image}
          alt=''
          className='mb-8 mr-8'
          style={{
            borderRadius: '20%', // Kenarları oval yapmak için
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Hafif bir gölgelendirme
          }}
        />
        <div className="flex flex-col">
          <div className='text-lg font-semibold max-w' style={{color: '#3B5B5D'}}>{name}</div>
          <div className='text-lg font-semibold max-w' style={{color: '#3B5B5D'}}>{typetip}</div>
          <div className="font-semibold">{description}</div>
          <div className="flex items-center font-semibold max-w" style={{color: '#3B5B5D'}}>
            <div className="icon-container mr-2">
              <IoIosPeople className="text-2xl text-gray-500" />
            </div>
            <div className="ml-1 text-sm">{bedrooms}</div>
          </div>
          <div className="flex items-center font-semibold max-w" style={{color: '#3B5B5D'}}>
            <div className="icon-container mr-2">
              <FaDoorOpen  className="text-2xl text-gray-500" />
            </div>
            <div className="ml-1 text-sm">{bathrooms}</div>
          </div>
          <div className="flex items-center font-semibold max-w" style={{color: '#3B5B5D'}}>
            <div className="icon-container mr-2">
              <BiArea className="text-2xl text-gray-500" />
            </div>
            <div className="ml-1 text-sm">{surface} </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-3 bg-white shadow-md rounded-tl-[90px] rounded-bl-[90px] text-3xl font-semibold" style={{ color: '#3B5B5D', marginTop: '-10px' }}> $ {price} </div>
      </div>
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='rounded-full text-white px-3' style={{ backgroundColor: '#3B5B5D' }}>{type}</div>
        <div className='rounded-full text-white px-3' style={{ backgroundColor: '#6be619' }}>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    </div>
  );
};

export default House;
