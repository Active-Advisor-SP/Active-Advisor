import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    { value: 'Price range (any)' },
    { value: '0-0' },
    { value: '0-100' },
    { value: '100-200' },
    { value: '200-300' },
    { value: '300-400' },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
        <div>
          <div className='text-[15px] font-medium leading-tight' style={{ color: '#3B5B5D' }}>{price}</div>
          <div className='text-[13px]' style={{ color: '#3B5B5D' }}>Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className='cursor-pointer hover:text-#3B5B5D transition'
              as='li'
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
