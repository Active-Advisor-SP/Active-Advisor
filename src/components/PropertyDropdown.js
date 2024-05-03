import React, { useState, useEffect, useContext } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import { IoHomeOutline } from "react-icons/io5";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <IoHomeOutline className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
        <div>
          <div className='text-[15px] font-medium leading-tight' style={{ color: '#3B5B5D' }}>{property}</div>
          <div className='text-[13px]' style={{ color: '#3B5B5D' }}>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((prop, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(prop)}
              className='cursor-pointer hover:text-#3B5B5D transition'
              key={index}
              as='li'
            >
              {prop}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
