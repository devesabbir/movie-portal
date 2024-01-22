/* eslint-disable react/prop-types */

import checkout from "../../../assets/icons/checkout.svg";

import {
  useCineContext,
  useCineDispatcher,
} from "../../../context/CineContext";
import { REMOVE_FROM_CART } from "../../../reducers/CineReducer";
import CartItem from "./CartItem";

export default function Cart({ onCartHide }) {
  const carts = useCineContext();
  const dispatch = useCineDispatcher();

  const handleRemoveItem = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      id: id,
    });
  };

  let content = null;

  if (carts.length === 0) {
    content = <p>Cart Is Empty!</p>;
  }

  if (carts.length > 0) {
    content = carts.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onRemoveItem={() => handleRemoveItem(item.id)}
      />
    ));
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {content}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkout} width={24} height={24} alt={"checkout"} />
              <span>Checkout</span>
            </a>
            <a
              onClick={onCartHide}
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
