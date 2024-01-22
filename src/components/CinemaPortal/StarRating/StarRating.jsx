/* eslint-disable react/prop-types */
import star from "./../../../assets/star.svg";

export default function StarRating({ value }) {
  const stars = Array(value).fill(star);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((star, index) => {
        return (
          <img key={index} src={star} width={14} height={14} alt={"star"} />
        );
      })}
    </div>
  );
}
