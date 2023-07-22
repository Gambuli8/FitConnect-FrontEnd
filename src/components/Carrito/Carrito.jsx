/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useId } from "react";
import { ShoppingCart } from "react-feather";
import style from "./Carrito.module.css";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

 function CartItem({idMembership,levelMembership, price, duration, quantity, removeFromCart, image}) {
  return (
    <li className='flex flex-col items-center justify-between '>
    <div>
      <img src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689956873/logoFitConnect-removebg-preview_g34p2p.png" />
      <p>id: {idMembership}</p>
      <h3>Membership: {levelMembership}</h3>
      <p>Duration: {duration} Days</p>
      <p>Price: ${price}</p>
    </div>
    <footer>
      <small>Cantidad: {quantity}</small>
    </footer>
    <button onClick={removeFromCart}>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12V17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 12V17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 7H20"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </li>
  )
}

function CartItemActivity({ name, schedule, type_activity, image, price, quantity, removeFromCart}) {
  return (
    <li className='flex flex-col items-center justify-between'>
    <div>
      <img src={image} alt="image de membresia"/>
      <h3>Activity: {name}</h3>
      <p>Schedule: {schedule}</p>
      <p>Type Activity: {type_activity}</p>
      <p>Price: ${price}</p>
    </div>
    <footer>
      <small>Cantidad: {quantity}</small>
    </footer>
    <button onClick={removeFromCart}>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12V17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 12V17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 7H20"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    </li>
  )}


export default function Carrito() {
  const cartCheck = useId();
  const {cart, addToCart, removeFromCart} = useCart();
  console.log(cart);
  return (
    <div className="w-[50%]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <label className={style.card_button} htmlFor={cartCheck}>
            <ShoppingCart />
          </label>
          <input type="checkbox" id={cartCheck} hidden />
          <aside id={style.cart} className={style.cart}>
            <ul>
              {cart[0]?.idMembership ? cart.map((item) => ( 
                <CartItem
                key={item?.idMembership}
                id={item.idMembership}
                levelMembership={item.levelMembership}
                addToCart={() => addToCart(item)}
                removeFromCart={() => removeFromCart(item)}
                {...item}
                /> ))
                : cart[0]?.idExtraAct ? cart.map((item1) => (
                    <CartItemActivity
                    key={item1?.idExtraAct}
                    id={item1.idExtraAct}
                    type_activity={item1.type_activity}
                    addToCart={() => addToCart(item1)}
                    removeFromCart={() => removeFromCart(item1)}
                    {...item1}
                    /> )) : <p className='text-[20px]'>Carrito vacio</p> 
                  }
            </ul>
            {cart.length !== 0 ? <Link to={`/carrito/${cart[0].idMembership}`}><button className='items-end align-bottom'>Finalizar Compra</button></Link> : null
            }
          </aside>
        </div>
      </div>
    </div>
  );
}
