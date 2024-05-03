// TypetipDropdown.js
import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import { MdOutlineSportsSoccer } from "react-icons/md";

const TypetipDropdown = () => {
  const { Typetip, setTypetip, Typetipies } = useContext(HouseContext);
  console.log(Typetipies);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
        style={{color: '#3B5B5D'}}
      >
        <MdOutlineSportsSoccer className='dropdown-icon-primary' style={{color: '#3B5B5D'}} />
        <div>
          <div className='text-[15px] font-medium leading-tight' style={{color: '#3B5B5D'}}>{Typetip}</div>
          <div className='text-[13px]' style={{color: '#3B5B5D'}}>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{color: '#3B5B5D'}} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{color: '#3B5B5D'}} />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {Typetipies.map((Typetip, index) => {
          return (
            <Menu.Item
              onClick={() => setTypetip(Typetip)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}
              style={{color: '#3B5B5D'}}
            >
              {Typetip}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default TypetipDropdown;
