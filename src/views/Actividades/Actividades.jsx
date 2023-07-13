/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card_Actividades from "../../components/Card_Actividades/Card_Actividades";
import { Link } from "react-router-dom";
import { getActivities, filterActivities } from "../../redux/Actions/Actions";

function Actividades() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.allActivities);
  console.log(allActivities);

  //logica del filter y order Activities.

  const [filters, setFilters] = useState({
    filter: 0,
    order: "az"
  })

  const changeHandler = (event)=>{
    const property = event.target.name
    const value = event.target.value;
    switch (property) {
        case "memberships":
          setFilters(()=>{
            const updateFilter = {...filters, filter:value}
            return updateFilter
          });
            break;
        case "order":
          setFilters(()=>{
            const updateOrder = {...filters, order:value}
            return updateOrder
          });
            break
    }
  };  
  useEffect(() => {
    dispatch(filterActivities(filters));
  }, [filters, dispatch]);

  return (
    <div className="flex flex-col bg-black w-[100%] h-[100%] m-0 p-0 ">
      <Link to="/home">
        <a
          href=""
          className="fixed cursor-pointer z-50 m-[20px] text-white flex-row"
        >
          <svg
            className="flex justify-center items-center"
            fill="#ffffff"
            height="40px"
            width="40px"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M19.5,28C19.5,28,19.5,28,19.5,28c-1,0-1.8-0.4-2.5-1l-9.3-9.4c-0.9-0.9-0.9-2.3,0-3.1l9.3-9.4c0.7-0.7,1.6-1,2.5-1 c0,0,0,0,0,0c1,0,1.8,0.4,2.5,1c1.4,1.4,1.4,3.6,0,5l-5.7,5.8c-0.1,0.1-0.1,0.2,0,0.3l5.7,5.8c1.4,1.4,1.4,3.6,0,5 C21.3,27.6,20.4,28,19.5,28z M8.3,15.1L8.3,15.1L8.3,15.1z" />{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[35px]">
          NUESTRAS ACTIVIDADES
        </h1>
        <p className="font-titulo text-[22px] items-center text-white font-medium">
          Estos son algunos de los servicios que ofrecemos en nuestro gimnasio
        </p>

{/*        filter y order activities
 */}      <div>
          <select name="memberships" onChange={changeHandler}>
            <option value={0}>All Memberships</option>
            <option value={1}>Basic</option>
            <option value={2}>Medium</option>
            <option value={3}>Premium</option>
          </select>
          <select name="order" onChange={changeHandler}>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

      </div>
      <div className=" w-[1200px] h-[2000px] grid grid-cols-3 grid-rows-4 justify-between items-star m-8 my-4">
        {allActivities?.map((activity) => (
          <Card_Actividades
            key={activity?.id}
            id={activity?.id}
            name={activity?.name}
            schedule={activity?.schedule}
            rating={activity?.rating}
            type_activity={activity?.type_activity}
            image={activity?.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Actividades;


//commit de prueba