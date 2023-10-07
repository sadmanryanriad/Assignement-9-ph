import { useLoaderData, useParams } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleData = data.find((element) => element.id == id);
  console.log(singleData);
  const { title, description, image, price } = singleData;

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img className="w-2/3 mx-auto rounded-lg" src={image} alt="" />
        </div >
        <div className="mx-auto border bg-base-300 rounded-lg my-6" data-aos="zoom-in-up" data-aos-duration="1000">
        <h1 className="text-4xl font-semibold mt-12 mb-6 text-center">{title}</h1>
        <h1 className="text-xl font-semibold mt-12 mb-6 text-center text-red-500">Price: {price}</h1>
        <p className="text-base mb-28 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
