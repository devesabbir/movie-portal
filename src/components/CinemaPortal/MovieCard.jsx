/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils/movie-utility";
import StarRating from "./StarRating/StarRating";
import tag from "../../assets/tag.svg";

export default function MovieCard({ movie, onModalOpen, onAddToCart }) {
  return (
    <figure
      style={{ cursor: "pointer" }}
      onClick={() => onModalOpen(movie)}
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
    >
      <img
        className="w-full object-cover"
        src={getImageUrl(movie.cover)}
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <StarRating value={movie.rating} />
        <a
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(e, movie);
          }}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={tag} alt={"tag"} />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
}
