import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left'
            >
                <RiMapPinLine className='dropdown-icon-primary' style={{ color: '#3B5B5D' }} />
                <div>
                    <div className='text-[15px] font-medium leading-tight' style={{ color: '#3B5B5D' }}>{country}</div>
                    <div className='text-[13px]' style={{ color: '#3B5B5D' }}>Select your place</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondry' style={{ color: '#3B5B5D' }} />
                )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {countries.map((country, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setCountry(country)}
                            className='cursor-pointer hover:text-#3B5B5D transition'
                            as='li'
                            key={index}
                        >
                            {country}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default CountryDropdown;
