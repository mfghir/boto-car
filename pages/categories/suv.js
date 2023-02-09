import CarsList from '@/components/templates/CarsList';
import carsData from '@/data/carsData';
import React from 'react'

const Suv = () => {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CarsList data={suvCars} />;
}

export default Suv