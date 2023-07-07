import Card_Actividades from "../../components/Card_Actividades/Card_Actividades";

function Actividades() {
  return (
    <div className="flex items-center flex-col p-7 bg-gray-700 w-[100%] h-[100%] ">
      <button className="w-[140px] h-[40px] fixed cursor-pointer border-[1px] border-[#ffd277] text-[19px] font-light  rounded-[10px] bg-black text-[#ffd277] hover:bg-[#ffd277] hover:text-black ">
        Back
      </button>
      <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[35px]">
        NUESTRAS ACTIVIDADES
      </h1>
      <p className="font-parrafo text-[20px] text-gray-900 font-medium">
        Estos son algunos de los servicios que ofrecemos en nuestro gimnasio.
      </p>
      <div className=" w-[1200px] h-[2000px] grid grid-cols-3 grid-rows-4 justify-between items-star m-5 my-4">
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
        <Card_Actividades />
      </div>
    </div>
  );
}

export default Actividades;
