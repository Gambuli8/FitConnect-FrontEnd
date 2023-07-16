/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useId } from "react";
import { ShoppingCart } from "react-feather";
import style from "./Carrito.module.css";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import logo from '../../assets/logoFitConnect.jpg'

 function CartItem({idMembership,levelMembership, price, duration, quantity, ClearCart, addToCart}) {
  return (
    <li className='flex flex-col items-center justify-between '>
    <div>
      <img src={logo} alt="image de membresia"/>
      <p>id: {idMembership}</p>
      <h3>Membership: {levelMembership}</h3>
      <p>Duration: {duration} Days</p>
      <p>Price: ${price}</p>
    </div>
    <footer>
      <small onClick={addToCart}>Cantidad: {quantity}</small>
    </footer>
    <button onClick={ClearCart}>
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


export default function Carrito() {
  const cartCheck = useId();
  const {cart, ClearCart} = useCart();
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
              {cart.map((item) => ( 
                <CartItem
                key={item.idMembership}
                id={item.idMembership}
                addToCart={() => addToCart(item)}
                levelMembership={item.levelMembership}
                ClearCart={() => ClearCart(item)}
                {...item}
                />
                ))}
            </ul>
            {cart.length === 0 ? <p className='text-[20px]'>Carrito vacio</p> && <p className='text-[20px]'>Carrito vacio</p>
            : <Link to={`/carrito/${cart[0].idMembership}`}><button className='items-end align-bottom'>Finalizar Compra</button></Link>
            }
          </aside>
        </div>
      </div>
    </div>
  );
}
