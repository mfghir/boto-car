import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];

  return <CarDetails {...carDetails} />;
};

export default CarDetail;
