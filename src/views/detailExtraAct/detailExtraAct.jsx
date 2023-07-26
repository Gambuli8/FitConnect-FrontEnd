/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCart from "../../Hooks/useCart";

export default function detailExtraAct() {
    const allExtraActivities = useSelector((state) => state.allExtraActivities);
    
    const [extraAct, setExtraAct] = useState({});
    const {id} = useParams();

    const { cart, addToCart, removeFromCart } = useCart();
    
    const checkActivity = (Activity) => {
        return cart.some((p) => p.id === Activity?.idExtraAct);
      };

      const isAdded = checkActivity(extraAct)
      console.log(extraAct);
      useEffect(() => {
          setExtraAct(allExtraActivities.find((extraAct) => extraAct.idExtraAct === parseInt(id)));
        },[]);
        return (
            <div className='bg-black'>
        {extraAct?.idExtraAct ? (
            <>
            {<Link to="/actividades" className="text-[#ffd277] font-parrafo text-[20px] hover:text-[#fab62c] duration-300">Back</Link>}
            <div className="w-[100%] h-[80vh] flex justify-center items-center m-0">
                    <div className='flex items-center justify-center mr-[80px]'>
                    <img
                    src={`${extraAct?.image}`}
                    alt="imagen de la actividad"
                    className="mx-auto w-[400px] h-[300px] object-cover"
                    />
                    </div>
                <div className="flex flex-col text-justify p-1 items-center text-white">
                    <h1 className="font-titulo text-center text-[#ffd277] mb-10 uppercase text-[35px] my-2">
                    {extraAct?.name}
                    </h1>
                    <h3 className="font-parrafo my-3 text-[20px]">Schedule: {extraAct?.schedule}</h3>
                    <h3 className="font-parrafo my-3 text-[20px]">
                    Type Activity: {extraAct?.type_activity}
                    </h3>
                    <h3 className="font-parrafo text-[23px] my-3 uppercase text-[#ffd277]">
                    Price: {extraAct?.price}
                    </h3>
                    <h3 className="font-parrafo text-[23px] my-3 uppercase text-[#ffd277]">
                    Description: {extraAct?.description}
                    </h3>
                    <button className="bg-[#ffd277] text-black font-parrafo text-[20px] rounded-xl px-4 py-2 my-2 hover:bg-[#fab62c] duration-300"
                            style={{ backgroundColor: isAdded ? "red" : "#ffd277" }}
                            onClick={() => {
                                isAdded 
                                ? removeFromCart(extraAct)
                                : addToCart(extraAct) && alert('Actividad agregada al carrito')
                            }}
                            >
                            {isAdded.id ? "Remove from cart" : "Add to cart"}
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