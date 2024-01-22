/* eslint-disable react/prop-types */
import deleteIcon from "../../../assets/delete.svg";
import { getImageUrl } from "../../../utils/movie-utility";

export default function CartItem({ item, onRemoveItem }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src={getImageUrl(item.cover)}
          alt={"cart-icon"}
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{item.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{item.genre}</p>
          <span className="max-md:text-xs">${item.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          onClick={onRemoveItem}
          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
        >
          <img className="w-5 h-5" src={deleteIcon} alt={"delete-item"} />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
}
