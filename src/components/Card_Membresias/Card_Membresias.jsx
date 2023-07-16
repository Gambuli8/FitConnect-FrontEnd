/* eslint-disable react/prop-types */
const Card_Membresias = ({levelMembreship, price, duration, idMembership, button }) => {

  return (
    <div className='flex flex-col p-2 border border-black w-[300px] h-[480px] m-3 mx-8 rounded-[20px] bg-gray-950 text-white'>
      <div className='flex flex-col'>
        <h6 className='text-[14px] text-gray-500'>Mensual {duration} Days</h6>
        <h6 className='text-[14px] text-gray-500'>id: {idMembership}</h6>
        <div className='flex flex-col items-center'>
      <h1 className='uppercase font-bold text-[20px] border-b-2 border-gray-300 w-[100%] items-center text-center' >Plan {levelMembreship}</h1>
        </div>
        <h6 className='text-[18px] text-gray-700'>Actividades</h6>
      <div className='flex flex-col items-center m-5'>
      <ul className='grid grid-cols-3'>
        <li className='m-1'>aaaaa</li>
        <li className='m-1'>bbbbb</li>
        <li className='m-1'>ccccc</li>
        <li className='m-1'>ddddd</li>
        <li className='m-1'>eeeee</li>
        <li className='m-1'>fffff</li>
      </ul>
      </div>
      <p className='border-t-2 border-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta.</p>
      </div>
      <div>Precio: {price}</div>
      <div>{button}</div>
    </div>
  );
};

export default Card_Membresias;
