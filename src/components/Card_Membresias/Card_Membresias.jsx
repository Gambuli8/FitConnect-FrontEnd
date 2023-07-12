const Card_Membresias = () => {
  return (
    <div className='flex flex-col p-2 border border-black w-[300px] h-[300px] m-3'>
      <div className='flex flex-col'>
        <h6 className='text-[14px] text-gray-500'>Mensual</h6>
        <div className='flex flex-col items-center'>
      <h1 className='uppercase font-bold text-[20px] border-b-2' >Plan Basic</h1>
        </div>
      <div className='flex flex-col items-start'>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta.</p>
      </div>
      <button className=''>Comprar</button>
    </div>
  );
};

export default Card_Membresias;
