/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import useCart from "../../Hooks/useCart";
import Form from "../../views/Form/Form";
import { useParams } from "react-router";


export default function detailCart() {
  const { cart, ClearCart,removeFromCart } = useCart();
  let {id} = useParams()
  id = Number(id)
  return (
    <div className='flex'>
      <div className="w-[50%] h-[68vh] pb-6 overflow-x-auto justify-center items-center text-center bg-gray-700">

              {cart[0]?.idMembership ? cart.map((membership) => { 
                return (
                  <div
              key={membership?.idMembership}
              className=" h-[100px] items-center my-20 flex justify-around text-[20px] bg-gray-700"
            >
              <img className="w-[200px] h-[100px] m-3" src={membership.image} alt="" />
              <div className="flex flex-col">
                <h3 className="text-[20px] uppercase text-[#ffd277]">Membership: {membership.levelMembership}</h3>
                <p className="">Duration: {membership.duration} Days</p>
                <p className="">Price: ${membership.price}</p>
              </div>
            </div>
                )}) : cart[0]?.idExtraAct ? cart.map((item) => {
                  return (
                    <div
              key={item?.id}
              className=" h-[100px] items-center my-20 flex justify-around text-[20px] bg-gray-700"
            >
              <img className="w-[200px] h-[100px] m-3" src={item.image} alt="" />
              <div className="flex flex-col">
                <h1 className="text-[20px] uppercase text-[#ffd277]">Activity: {item.name}</h1>
                <h3 className="">Type Activity: {item.type_activity}</h3>
                <h3>Schedule {item.schedule}</h3>
                <p className="">Price: ${item.price}</p>
                </div>
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
            </div> )}) : null
              } 
              <h1 className='text-[30px] m-5 uppercase font-medium text-[#ffd277]'>
              total price: ${cart.reduce((acc, item) => acc + item.price, 0)}
              </h1>
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
      </div>
      <div className="w-[50%] h-[68vh] flex justify-center items-center text-center">
      <Form idMembership={id}/>
      </div>
    </div>
  );
}
