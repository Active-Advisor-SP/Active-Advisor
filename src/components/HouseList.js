import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner2 className="animate-spin text-4xl" style={{ color: '#6be619' }}/>
        <p className="ml-2"style={{ color: '#3B5B5D' }}>Loading...</p>
      </div>
    );
  }

  if (houses.length < 1) {
    return <div className="text-center mt-8">Sorry, no properties found.</div>;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div>
          {houses.map((house) => (
            <Link to={`/property/${house.id}`} key={house.id}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
