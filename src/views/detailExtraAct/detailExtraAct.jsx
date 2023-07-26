/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function detailExtraAct() {
    const allExtraActivities = useSelector((state) => state.allExtraActivities);
    
    
    const [extraAct, setExtraAct] = useState({});
    const {id} = useParams();


    console.log(extraAct);
    useEffect(() => {
        setExtraAct(allExtraActivities?.find((extraActiviti) => extraActiviti?.idExtraAct === id));
    },[ allExtraActivities, id]);
  return (
    <div>
        {extraAct?.idExtraAct ? (
            <>
            {<Link to="/actividades" className="text-[#ffd277] font-parrafo text-[20px] hover:text-[#fab62c] duration-300">Back</Link>}
            <div className="w-[340px] h-[500px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-4 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
                <div className="flex flex-col text-justify p-1 items-center text-white">
                    <img
                    src={`${extraAct?.image}`}
                    alt="imagen de la actividad"
                    className="mx-auto w-50 h-40 object-cover"
                    />
                    <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">
                    {extraAct?.name}
                    </h1>
                    <h3 className="font-parrafo my-1 text-[20px]">Schedule: {extraAct?.schedule}</h3>
                    <h3 className="font-parrafo my-1 text-[20px]">
                    Type Activity: {extraAct?.type_activity}
                    </h3>
                    <h3 className="font-parrafo text-[23px] uppercase text-[#ffd277]">
                    Price: {extraAct?.price}
                    </h3>
                    <h3 className="font-parrafo text-[23px] uppercase text-[#ffd277]">
                    Description: {extraAct?.description}
                    </h3>
                    <button className="bg-[#ffd277] text-black font-parrafo text-[20px] rounded-xl px-4 py-2 my-2 hover:bg-[#fab62c] duration-300">
                    {extraAct?.button}
                    </button>
                </div>
                </div>
        </>
        ) : (
            <h1>Loading...</h1>
        )}

    </div>
  )
}
