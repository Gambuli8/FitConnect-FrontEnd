/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Card_Membresias from "../../components/Card_Membresias/Card_Membresias";
import { getMembership, filterMembership } from "../../redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";

export default function Membresias() {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const [aux, setAux] = useState(false);

  useEffect(() => {
    setAux(!aux);
    return;
  }, [isLoggedIn, aux]);

  const { addToCart, cart, removeFromCart, cleanCart } = useCart();

  const checkMembership = (membership) => {
    const membershipIndex = cart.findIndex(
      (p) => p.idMembership === membership.idMembership
    );
    if (membershipIndex >= 0 && cart[membershipIndex].quantity > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch(filterMembership(31));
  }, [dispatch]);
  const allMemberships = useSelector((state) => state.allMemberships);

  const [filter, setFilter] = useState(31);
  const changeHandler = (event) => {
    const value = event.target.value;
    setFilter(() => {
      const updateFilter = value;
      return updateFilter;
    });
  };
  useEffect(() => {
    dispatch(filterMembership(filter));
  }, [filter, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center py-9 bg-gray-950 w-[100%]">
      <h1 className="font-[600] text-center text-[40px] text-white my-4">
        Tipos de Membresias
      </h1>
      <div className="flex justify-center">
        <button
          className="border-[2px] border-slate-950 rounded-full w-[80px] h-[45px] m-3 bg-gray-400 font-bold hover:scale-110 transition"
          value={31}
          onClick={changeHandler}
        >
          Mensual
        </button>
        <button
          className="border-[2px] border-slate-950 rounded-full w-[80px] h-[45px] m-3 bg-gray-400 font-bold hover:scale-110 transition"
          value={365}
          onClick={changeHandler}
        >
          Anual
        </button>
      </div>

      <div className="grid grid-cols-3">
        {allMemberships?.map((membership) => {
          const isAdded = checkMembership(membership);  
          return (
            <li key={membership?.idMembership}>
              <Card_Membresias
                levelMembreship={membership.levelMembership}
                price={membership?.price}
                duration={membership?.duration}
                idMembership={membership?.idMembership}
                activities={membership?.activities}
                cleanCart={cleanCart}
                button={
                    isAdded ? <button className="border-[2px] border-slate-950 text-black items-center justify-center rounded-full w-[80px] h-[45px] m-3 bg-[#ffd277] font-bold hover:scale-110 transition"
                    onClick={() => removeFromCart(membership)}
                    >
                      Eliminar
                    </button> : <button className="border-[2px] border-slate-950 text-black rounded-full w-[80px] h-[45px] m-3 bg-[#ffd277] font-bold hover:scale-110 transition"
                    onClick={() => addToCart(membership)}
                    >
                      Comprar
                    </button> 
                  }
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}
