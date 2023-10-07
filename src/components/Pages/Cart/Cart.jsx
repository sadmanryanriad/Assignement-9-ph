import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLocalStorageId } from "../../../Utilities/localStorage";
import CartProduct from "./CartProduct";
import toast from "react-hot-toast";

const Cart = () => {
  const cards = useLoaderData();
  const [display, setDisplay] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleCheckout = () => {
    if (getLocalStorageId().length) {
      toast.success("Purchased successfully!");
      localStorage.clear();
      setDisplay(null);
      setTotalPrice(0);
    } else toast.error("There is no Product in the cart");
  };

  useEffect(() => {
    let temp = 0;
    const LocalStoredData = getLocalStorageId();
    const showCard = cards.filter((card) =>
      LocalStoredData.includes(parseInt(card.id))
    );
    setDisplay(showCard);
    showCard.forEach((card) => {
      temp += parseInt(card.price);
    });
    setTotalPrice(temp);
  }, [cards]);

  return (
    <div className="pt-10">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {display?.length ? (
            display.map((card) => (
              <CartProduct key={card.id} card={card}></CartProduct>
            ))
          ) : (
            <p className="text-5xl">
              No data found.{" "}
              <span className="text-red-500">Add product to show!</span>
            </p>
          )}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Sub total</p>
            <p className="text-gray-700">${totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{totalPrice && '$4.99'}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${totalPrice && totalPrice + 4.99}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
