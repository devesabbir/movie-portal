import { useState } from "react";

import Sidebar from "../../Sidebar/Sidebar";
import MovieCard from "../MovieCard";
import Modal from "../Modal/Modal";
import { getAllMovies } from "../../../data/movies";

export default function MainLayout() {
  const data = getAllMovies();
  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const handleModalOpen = (movie) => {
    setModalOpen(true);
    setMovieDetails(movie);
  };

  const handleModalClose = (e) => {
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
                />
              );
            })}
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal movieDetails={movieDetails} onModalClose={handleModalClose} />
      )}
    </main>
  );
}
