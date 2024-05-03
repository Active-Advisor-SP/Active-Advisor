import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown  from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import TypetipDropdown from './TypetipDropdown';
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return(
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <TypetipDropdown/>
      <button onClick={()=> handleClick()} className='bg-#3B5B5D hover:bg-green-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg border border-gray-400'>
        <RiSearch2Line className="text-2xl text-gray-500" style={{ color: '#3B5B5D' }} />
      </button>

    </div>
  );
};

export default Search;