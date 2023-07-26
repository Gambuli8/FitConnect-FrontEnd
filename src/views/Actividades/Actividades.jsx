/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card_Actividades from "../../components/Card_Actividades/Card_Actividades";
import Card_Extras from "../../components/Card_ExtraActivities/Card_Extras";
import { Link } from "react-router-dom";
import { getActivities, filterActivities, getExtraActivities, filterMembership, FilterExtraAct, filterActivitiesForCAtegori, searchActivities } from "../../redux/Actions/Actions";
import useCart from "../../Hooks/useCart";
import style from "./act.module.css";

function Actividades() {
  const dispatch = useDispatch();


  window.onscroll = function () {
    if(scrollY > 100){
      document.getElementById('container').classList.add(style.show);
    }else{
      document.getElementById('container').classList.remove(style.show);
    }
  }

  const handlerButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const { cart, addToCart, removeFromCart } = useCart();

  const checkActivity = (Activity) => {
    return cart.some((p) => p.id === Activity?.idExtraAct);
  };


  useEffect(() => {
    dispatch(getActivities());
    dispatch(getExtraActivities());
    dispatch(filterMembership(31))
  }, [dispatch]);

  const allActivities = useSelector((state) => state.allActivities);
  const allExtraActivities = useSelector((state) => state.allExtraActivities);
  const filterExtraAct = useSelector((state) => state.filterExtraAct);
  const Filtered = useSelector((state) => state.filtered);
  
  console.log(filterExtraAct);
  //logica del filter y order Activities.
  const [filters, setFilters] = useState({
    filter: 0,
    order: "az",
  });

  const filterOrder = (e) => {
    dispatch(FilterExtraAct(e.target.value));
    dispatch(filterActivitiesForCAtegori(e.target.value));
    dispatch(searchActivities(e.target.value));
  };

  // const [Search, setSearch] = useState('');
  
  // const searchHandler = (event) => {
  //   setSearch(event.target.value);
  // };
  
  // let result = [];
  // if(Search.length > 0){
  //   result = allExtraActivities.filter((extraActivity) => {
  //     return extraActivity.name.toLowerCase().includes(Search.toLowerCase())
  //   })
  // } else {
  //   result = allExtraActivities;
  // }

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    switch (property) {
      case "memberships":
        setFilters(() => {
          const updateFilter = { ...filters, filter: value };
          return updateFilter;
        });
        break;
      case "order":
        setFilters(() => {
          const updateOrder = { ...filters, order: value };
          return updateOrder;
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(filterActivities(filters));
  }, [filters, dispatch]);

  return (
    <div className="flex flex-col bg-black w-[100%] h-[100%] m-0 p-0 ">
      <Link to="/">
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
      <div id='titulo' className="flex flex-col items-center justify-center m-5">
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[35px]">
          NUESTRAS ACTIVIDADES
        </h1>
        <p className="font-titulo text-[22px] items-center text-white font-medium">
          Estos son algunos de los servicios que ofrecemos en nuestro gimnasio
        </p>
        {/*        filter y order activities
         */}{" "}
        <div>
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

      <div className=" w-[100%] h-[100%] grid grid-cols-3 grid-rows-3 justify-between items-star my-4">
        {allActivities?.map((activity) => (
          <Card_Actividades
            key={activity?.id}
            id={activity?.id}
            name={activity?.name}
            schedule={activity?.schedule}
            rating={activity?.rating}
            type_activity={activity?.type_activity}
            image={activity?.image}
            memberships={activity?.memberships}
          />
        ))}
      </div>
      <div className=' text-center justify-center items-center'>
      <h1 className='text-[#ffd277] font-bold uppercase text-[30px] my-8 ml-2 flex w-[620px]'>Every activity is an opportunity to...</h1>
      <h1 className='text-[#ffd277] uppercase font-bold text-[30px] my-8 ml-[400px] w-[500px]'>learn</h1>
      <h1 className='text-[#ffd277] uppercase font-bold text-[30px] my-8 ml-[530px] w-[500px]'>grow</h1>
      <h1 className='text-[#ffd277] uppercase font-bold text-[30px] my-8 ml-[850px] w-[400px]'>And have fun to the fullest.</h1>
      <p className='flex justify-center items-center'>
        <img className='w-[80px] h-[80px]' src="https://res.cloudinary.com/djqwbu0my/image/upload/v1690138662/arrow-circle-down-svgrepo-com_1_dhcqqr.svg" alt="" />
      </p>
      </div>
        <h1 className='text-[#ffd277] font-bold text-[40px] ml-0 flex justify-center items-center my-10'>¡Here are some Extras Activities that you will like!</h1>
      
      <div className='flex items-center mt-20 justify-evenly'>
        <select name="Categori" onChange={e => filterOrder(e)}>
          <option value="all">All</option>
          {allExtraActivities?.map((extraActivity) => (
            <option key={extraActivity?.idExtraAct} value={extraActivity?.type_activity}>
              {extraActivity?.type_activity}
            </option>
          ))}
        </select>
        <input name="search" onChange={e => filterOrder(e)} type="text" placeholder="Swimming, Lockers ..." className='flex bg-[#ffd277] text-black items-center h-[30px] placeholder:text-gray-600 font-medium justify-center text-center rounded-xl w-[200px]' />
        <select name="OrderPrice" onChange={e => filterOrder(e)}>
          <option value="all">Order for Price</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
      
      
      <div className='mt-[100px] w-[100%] h-[100%] grid grid-cols-3 grid-rows-3 justify-between items-star my-4'>
        {filterExtraAct?.map((extraActivity) => {
          const isAdded = checkActivity(extraActivity);
          return (
            <li key={extraActivity?.idExtraAct}>
            <Card_Extras
            key={extraActivity?.idExtraAct}
            name={extraActivity?.name}
            schedule={extraActivity?.schedule}
            rating={extraActivity?.rating}
            type_activity={extraActivity?.type_activity}
            image={extraActivity?.image}
            price={extraActivity?.price}
            buttonInfo= {<Link to={`/detailExtraAct/${extraActivity?.idExtraAct}`}><button className="w-[100%] bg-[#ffd277] rounded-lg hover:bg-yellow-500 my-3 text-black font-bold items-center text-center">More Info</button></Link>}
            button={ 
              <button
          className="w-[100%] bg-[#ffd277] rounded-lg hover:bg-yellow-500 my-3 text-black font-bold items-center text-center"
          style={{ backgroundColor: isAdded ? "red" : "#ffd277" }}
          onClick={() => {
            isAdded 
            ? removeFromCart(extraActivity)
            : addToCart(extraActivity) && alert('Actividad agregada al carrito')
          }}
          >
          {isAdded.id ? "Remove from cart" : "Add to cart"}
        </button>
        }
            />
          </li>
          );
          })}
      </div>
       <div id="container" className={style.container}>
        <div id="button" className={style.btn}>
          <img onClick={handlerButton} fill='#ffd277' className='w-[60px] h-[60px] absolute font-[1.7rem] top-[40%] left-[50%] translate-[-50%, 50%] scale-0 text-black transition-all duration-200 ' src="https://res.cloudinary.com/djqwbu0my/image/upload/v1690138662/arrow-up-svgrepo-com_mtjlma.svg" alt="" />
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute font-[1.7rem] top-[40%] left-[50%] translate-[-50%, 50%] scale-0 text-black transition-all duration-200'>
          <path opacity="1" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffd277"/>
          <path d="M15.5295 10.9699L12.5295 7.96994C12.2395 7.67994 11.7595 7.67994 11.4695 7.96994L8.46945 10.9699C8.17945 11.2599 8.17945 11.7399 8.46945 12.0299C8.75945 12.3199 9.23945 12.3199 9.52945 12.0299L11.2495 10.3099V15.4999C11.2495 15.9099 11.5895 16.2499 11.9995 16.2499C12.4095 16.2499 12.7495 15.9099 12.7495 15.4999V10.3099L14.4695 12.0299C14.6195 12.1799 14.8095 12.2499 14.9995 12.2499C15.1895 12.2499 15.3795 12.1799 15.5295 12.0299C15.8195 11.7399 15.8195 11.2599 15.5295 10.9699Z" fill="#292D32"/>
        </svg>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
