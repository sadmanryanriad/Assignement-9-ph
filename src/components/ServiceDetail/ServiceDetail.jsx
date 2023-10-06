import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleData = data.find((element) => element.id == id);
  console.log(singleData);
  const { title, description, image, price } = singleData;

  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <div className=" ">
          <img className="w-2/3 mx-auto rounded-lg" src={image} alt="" />
        </div>
        <div className="mx-auto border bg-base-300 rounded-lg my-6">
        <h1 className="text-4xl font-semibold mt-12 mb-6 text-center">{title}</h1>
        <h1 className="text-xl font-semibold mt-12 mb-6 text-center text-red-500">Price: {price}</h1>
        <p className="text-base mb-28 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
