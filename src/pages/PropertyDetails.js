import React from 'react';
import { housesData } from '../data'; // Değişiklik burada
import { useParams } from 'react-router-dom'; // Değişiklik burada
import {  BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoIosPeople } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";

const PropertyDetails = () => {
    const { id } = useParams();
    const house = housesData.find((house) => house.id === parseInt(id)); // Değişiklik burada

    console.log(house);

    return (
        <section>
            <div className="container mx-auto min-h-[800px] mb-14">
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'style={{color: '#3B5B5D'}} >{house.name}</h2>
                        <h3 className='text-lg font-semibold max-w-[260px]'>{house.address}</h3>
                    </div>
                    <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                    <div className='rounded-full text-white px-3' style={{ backgroundColor: '#3B5B5D' }}>{house.type}</div>
                       <div className='rounded-full text-white px-3' style={{ backgroundColor: '#6be619' }}>{house.country}</div>
                    </div>
                    <div className='text-3xl font-semibold text-violet-600'style={{color: '#3B5B5D'}}>$ {house.price}</div>
                </div>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt='' />
                        </div>
                        <div className='flex gap-x-6 text-violet-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <IoIosPeople className="text-4xl text-gray-500" />  
                                <div className="ml-1 text-m" style={{color: '#3B5B5D'}} >{house.bedrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <FaDoorOpen  className="text-3xl text-gray-500" />
                                <div className="ml-1 text-m"style={{color: '#3B5B5D'}}  >{house.bathrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className="text-3xl text-gray-500" />
                                <div className="ml-1 text-m" style={{color: '#3B5B5D'}} >{house.surface}</div>
                            </div>
                        </div>
                        <div>{house.description}</div>
                    </div>
                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                <img src={house.agent.image} alt='' />
                            </div>
                            <div>
                                <div className='font-bold text-lg'>{house.agent.name}</div>
                                <Link to='' className='text-violet-700 text-sm'>View Listing</Link>
                            </div>
                        </div>
                        <form className='flex flex-col gap-y-4'>
                            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Name*' />
                            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Email*' />
                            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Phone*' />
                            <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='I want to ask a question about the sports field?' ></textarea>
                            <div className='flex gap-x-2'>
                                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send message</button>
                                <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;
