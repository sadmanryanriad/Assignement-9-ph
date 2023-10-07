import { useLoaderData, useParams } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { getLocalStorageId, saveToLocalStorage } from "../../Utilities/localStorage";
import toast from "react-hot-toast";

const ServiceDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleData = data.find((element) => element.id == id);
  const { title, description, image, price } = singleData;


  function handleButton() {
    const intId = parseInt(id);

    const storedId = getLocalStorageId();

    const alreadyExist = storedId.find(Id => Id === intId);

    if (!alreadyExist) {
        saveToLocalStorage(intId);
        toast.success("Added to Cart");
    }
    else{
        toast.error('Already in the cart');
    }
}

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
        <h1 className="text-4xl font-semibold mt-12 mb-6 text-center text-orange-600">{title}</h1>
        <h1 className="text-xl font-semibold mt-12 mb-6 text-center text-green-600">Price: {price}</h1>
        <div className="text-center">
              <button onClick={handleButton} className="btn btn-success mb-5">Add to Cart</button>
          </div>
        <p className="text-base mb-28 text-center text-orange-700 w-[80%] mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
