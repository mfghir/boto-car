import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;

  const carDetails = carsData[carId - 1];
  console.log(carDetails);

  return <div>CarDetail</div>;
};

export default CarDetail;
