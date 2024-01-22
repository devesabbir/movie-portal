import { useState } from "react";

import Sidebar from "../../Sidebar/Sidebar";
import MovieCard from "../MovieCard";
import Modal from "../Modal/Modal";
import { getAllMovies } from "../../../data/movies";
import {
  useCineContext,
  useCineDispatcher,
} from "../../../context/CineContext";
import { ADD_TO_CART } from "../../../reducers/CineReducer";

export default function MainLayout() {
  const data = getAllMovies();
  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const carts = useCineContext();
  const dispatch = useCineDispatcher();

  const handleAddToCart = (e, movie) => {
    e?.preventDefault();
    e?.stopPropagation();
    const index = carts.findIndex((m) => m.id === movie.id);
    if (index === -1) {
      dispatch({
        type: ADD_TO_CART,
        payload: movie,
      });
      alert("Item Added to cart");
    } else {
      alert("Item already in cart");
    }
  };

  const handleModalOpen = (movie) => {
    setModalOpen(true);
    setMovieDetails(movie);
  };

  const handleModalClose = (e) => {
    e?.stopPropagation();
    if (
      e?.target.className.includes("backdrop-blur-sm") ||
      e?.target.className.includes("cancel-btn")
    ) {
      setModalOpen(false);
      setMovieDetails({});
    }
  };

  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {data.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onModalOpen={handleModalOpen}
                  onAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          movieDetails={movieDetails}
          onAddToCart={handleAddToCart}
          onModalClose={handleModalClose}
        />
      )}
    </main>
  );
}
