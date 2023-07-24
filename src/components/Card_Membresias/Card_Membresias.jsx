/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { AuthContextProvider } from "../../context/AuthContext";
// import { useContext } from "react";
import { useSelector } from "react-redux";

const Card_Membresias = ({levelMembreship, price, duration, activities, button, idMembership }) => {
  const allActivities = useSelector((state) => state.allActivities);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div className='flex flex-col p-2 border border-black w-[300px] h-[480px] m-3 mx-8 rounded-[20px] bg-gray-950 text-white'>
      <div className='flex flex-col'>
        <h6 className='text-[14px] text-[#826b3e]'> {duration} Days</h6>
        <div className='flex flex-col items-center'>
      <h1 className='uppercase font-bold text-[20px] border-b-2 border-gray-300 w-[100%] items-center text-center text-[#ffd277]' >{levelMembreship}</h1>
        </div>
        <h6 className='text-[18px] text-[#ffd277] font-semibold'>Actividades</h6>
      <div className='flex flex-col items-center m-5 p-1'>
        <div className='justify-start h-[120px] m-0 p-0 '>
      <ul className='grid grid-cols-2 items-start justify-start'>
      {activities?.map((a, index)=>{
        const act = allActivities?.filter(all=>all.idAct==a.activityId)
        return (<li className='m-1 font-medium' key={index}>{act[0]?.name}</li>
        ) 
      })}
      </ul>
      </div>
      </div>
      <p className='border-t-2 border-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta.</p>
      </div>
      <div>Precio: {price}</div>
      { isLoggedIn === 'true' ? <div className='flex items-center justify-center'>{button}</div>
      : <div className='flex max-w-[100%] m-3 text-center items-center text-[20px] text-[#ffd277]'>Debes iniciar sesion</div>
      }
    </div>
  );
};

export default Card_Membresias;
