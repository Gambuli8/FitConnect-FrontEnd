/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { AuthContextProvider } from "../../context/AuthContext";
// import { useContext } from "react";
import { useSelector } from "react-redux";

const Card_Membresias = ({
  levelMembreship,
  price,
  duration,
  activities,
  button,
  idMembership,
}) => {
  const allActivities = useSelector((state) => state.allActivities);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const MedalHandler = () => {
    if (levelMembreship === 'Basic Monthly' || levelMembreship === 'Basic Annual') {
        return  <svg width="45px" height="45px" viewBox="0 0 120 120" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
        <polygon fill = '#C4C4C4' points="75.7,107.4 60,97.5 44.3,107.4 44.3,41.1 75.7,41.1  "/>
        <circle fill = '#E5B97F' cx="60" cy="44.8" r="32.2"/>
        <circle fill='#C19A6B' cx="60" cy="44.8" r="25.3"/>
        <path fill='#FFFFFF' d="M61.2,29.7l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,61.1c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,28.7,60.7,28.7,61.2,29.7z"/>
        </g>
      </svg>
    } else if (levelMembreship === 'medium Monthly' || levelMembreship === 'medium Annual') {
      return <svg width="40px" height="40px" viewBox="0 0 120 120" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
      <polygon fill='#FFBF4B' points="75.7,107.4 60,97.5 44.3,107.4 44.3,41.1 75.7,41.1  "/>
      <circle fill='#EDEDED' cx="60" cy="44.8" r="32.2"/>
      <circle fill='#BCBCBC' cx="60" cy="44.8" r="25.3"/>
      <path fill='#FFFFFF' d="M61.2,29.7l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,61.1c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,28.7,60.7,28.7,61.2,29.7z"/>
      </g>
      </svg>
    } else if (levelMembreship === 'premium Monthly' || levelMembreship === 'premium Annual') {
      return <svg width="40px" height="40px" viewBox="0 0 120 120" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
      <polygon fill='#285FFF' points="75.7,107.4 60,97.5 44.3,107.4 44.3,41.1 75.7,41.1  "/>
      <circle fill='#FFC54D' cx="60" cy="44.8" r="32.2"/>
      <circle fill='#E8B04B' cx="60" cy="44.8" r="25.3"/>
      <path fill='#FFFFFF' d="M61.2,29.7l4.2,8.4c0.2,0.4,0.6,0.7,1,0.8l9.3,1.4c1.1,0.2,1.6,1.5,0.8,2.3l-6.7,6.6c-0.3,0.3-0.5,0.8-0.4,1.2   l1.6,9.3c0.2,1.1-1,2-2,1.4l-8.3-4.4c-0.4-0.2-0.9-0.2-1.3,0L51,61.1c-1,0.5-2.2-0.3-2-1.4l1.6-9.3c0.1-0.4-0.1-0.9-0.4-1.2   l-6.7-6.6c-0.8-0.8-0.4-2.2,0.8-2.3l9.3-1.4c0.4-0.1,0.8-0.3,1-0.8l4.2-8.4C59.3,28.7,60.7,28.7,61.2,29.7z"/>
      </g>
      </svg>
    }
  };

  return (
    <div>
      <div className="flex flex-col p-2 border border-[#ffd277] w-[300px] h-[520px] m-3 mx-8 rounded-[20px] bg-gray-950 text-white">
      <div className="flex flex-col">
        <div className='flex flex-row justify-between'>
        <h6 className="text-[14px] text-[#826b3e]"> {duration} Days</h6>
        <MedalHandler/>
        </div>
    <div className="flex flex-col items-center">
        <h1 className="uppercase font-bold text-[20px] border-b-2 border-gray-300 w-[100%] items-center text-center text-[#ffd277]">
          {levelMembreship}
        </h1>
      </div><h6 className="text-[18px] text-[#ffd277] font-semibold">
        Actividades
      </h6><div className="flex flex-col items-center m-3 p-1">
        <div className="justify-start h-[120px] m-0 p-0 ">
          <ul className="grid grid-cols-2 items-start justify-start">
            {activities?.map((a, index) => {
              const act = allActivities?.filter(
                (all) => all.idAct == a.activityId
              );
              return (
                <li className="m-0 font-medium" key={index}>
                  {act[0]?.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div><p className="border-t-2 m-3 border-gray-300 text-[20px] items-center justify-center text-center">
        Más que un <strong className='text-[#ffd277]'>gimnasio</strong>, somos una <strong className='text-[#ffd277]'>FAMILIA</strong> fitness. ¡Únete con nuestra increíble membresía!
      </p></div>
      <div>Precio: {price}</div>
      {isLoggedIn === "true" ? (
        <div className="flex items-center justify-center">{button}</div>
        ) : (
          <div className="flex max-w-[100%] m-3 text-center items-center text-[20px] text-[#ffd277]">
          Debes iniciar sesion
        </div>
      )}
      </div>
    </div>
  );
};

export default Card_Membresias;
