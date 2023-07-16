import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/Actions/Actions";

const ActividadesEj = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.allActivities);

  return (
    <div className="bg-gray-950 block pl-16 ">
      <div className="flex text-left flex-col items-lef mx-auto items-center my-7">
        <h1 className="text-4xl font-lg text-white flex-1 z-10 ">
          NUESTRAS
          <br className="block md:hidden" />
          <span className="text-yellow-500"> ACTIVIDADES</span> EXCLUSIVAS
        </h1>
        <p className="py-2 text-xl font-xl text-white">
          Es importante tener en cuenta la combinación de actividades para poder
          trabajar todo tu cuerpo!
        </p>
        <button className="bg-yellow-500 text-black font-medium py-2 px-6 rounded-full w-[200px] my-10">
          Asociate ahora!
        </button>
      </div>
      <div className="text-white columns-5 w-[50%] relative">
        <div className="float-left"> GAP </div>{" "}
        <div className="float-right">FUNCTIONAL</div>
        <div className="float-right">PILATES</div>
        <div className="float-left">YOGA</div>
      </div>
    </div>
  );
};

export default ActividadesEj;
