/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import useCart from "../../Hooks/useCart";
import logo from "../../assets/logoFitConnect.jpg";
import Form from "../../views/Form/Form";
import { useParams } from "react-router";
export default function detailCart() {
  const { cart, ClearCart } = useCart();
  let {id} = useParams()
  id = Number(id)
  return (
    <div className='flex'>
      <div className="w-[50%] h-[68vh] flex justify-center items-center text-center bg-gray-700">
        {cart.map((membership) => {
          return (
            <div
              key={membership?.id}
              className=" h-[100px] items-center flex justify-around text-[20px] bg-gray-700"
            >
              <img className="w-[200px]" src={logo} alt="" />
              <div className="flex flex-col m-10">
                <p>Id: {membership.idMembership}</p>
                <h3 className="m-2">Membership: {membership.levelMembership}</h3>
                <p className="m-2">Duration: {membership.duration} Days</p>
                <p className="m-2">Price: ${membership.price}</p>
              </div>
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
          );
        })}
      </div>
      <div className="w-[50%] h-[68vh] flex justify-center items-center text-center">
      <Form idMembership={id}/>
      </div>
    </div>
  );
}
