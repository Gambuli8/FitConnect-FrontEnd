import Card_Membresias from "../../components/Card_Membresias/Card_Membresias"

export default function Membresias() {
  return (
    <div className='flex flex-col items-center justify-between m-9'>
      <h1 className='font-[600] text-center text-[30px]'>Tipos de Membresias</h1>
      <div className='flex justify-between'>
      <button className='border-[2px] border-slate-950 rounded-full w-[80px] h-[45px] m-3 bg-gray-400 font-bold hover:scale-110 transition'>Mensual</button>
      <button className='border-[2px] border-slate-950 rounded-full w-[80px] h-[45px] m-3 bg-gray-400 font-bold hover:scale-110 transition'>Anual</button>
      </div>
      <div className='flex justify-between'>
      <Card_Membresias />
      <Card_Membresias />
      <Card_Membresias />
      </div>
    </div>
  )
}
