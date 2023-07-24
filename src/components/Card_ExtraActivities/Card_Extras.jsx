/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {FaStar} from 'react-icons/fa';

/* eslint-disable react/prop-types */
export default function Card_Extras({
  name,
  schedule,
  type_activity,
  image,
  price,
  button,
  description,
}) {
  const starRating = Array(5).fill(0);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const colorRelleno = "#fab62c";
  const colorVacio = "#ffffff";

  const handlerClick = (index) => {
    setRating(index + 1);
  };

  const handlerMouseOver = (index) => {
    setHover(index + 1);
  };

  const handlerMouseLeave = () => {
    setHover(undefined);
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userId = useSelector((state) => state.userId);

  const [aux, setAux] = useState(true);

  useEffect(() => {
    setAux(!aux);
  }, [userId, isLoggedIn]);
  return (
    <div className="w-[340px] h-[500px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-4 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
      <div className="flex flex-col text-justify p-1 items-center text-white">
        <img
          src={`${image}`}
          alt="imagen de la actividad"
          className="mx-auto w-50 h-40 object-cover"
        />
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">
          {name}
        </h1>
        <h3 className="font-parrafo my-1 text-[20px]">Schedule: {schedule}</h3>
        <h3 className="font-parrafo my-1 text-[20px]">
          Type Activity: {type_activity}
        </h3>
        <h3 className="font-parrafo text-[23px] uppercase text-[#ffd277]">Price: ${price}</h3>
        <p className="font-Inconsolata my-1 text-[17px] font-medium capitalize text-gray-400">
          {description}
        </p>
        <div className="flex">
          {starRating.map((_, index) => {
            return (
              <img 
              style={{transition: "color 200ms", width: '20px', height:'20px', outline: 'none', margin: '0 2px', padding: '0', fontSize: '1.2rem', color: ''}}
              src="https://res.cloudinary.com/djqwbu0my/image/upload/v1690138662/star-vacia_zygqve.svg" 
              alt='estrella rating' 
              onClick={() => handlerClick(index)}
              onMouseOver={() => handlerMouseOver(index)}
              onMouseLeave={handlerMouseLeave}
              color={(hover || rating) > index ? colorRelleno : colorVacio}
              key={index}
              />
            );
          })}
        </div>
        {isLoggedIn === "true" && userId?.uid?.length > 0 ? (
          <div>{button}</div>
        ) : (
          <p className="flex max-w-[100%] m-3 text-center items-center text-[20px] text-[#ffd277]">
            You must have an active membership to be able to buy
          </p>
        )}
      </div>
    </div>
  );
}
