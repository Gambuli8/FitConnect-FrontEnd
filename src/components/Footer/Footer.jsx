/* eslint-disable react/no-unknown-property */
export default function Footer() {
  return (
    <div
      id="footer"
      className="text-white bg-gradient-to-t from-gray-800 to-black w-[100%] h-[100px] font-light font-parrafo flex justify-around text-[12px] m-0 p-0 items-center"
    >
      <div className="text-white bg-gradient-to-t from-gray-800 to-black w-[100%] h-[100px] font-light font-parrafo flex justify-around text-[12px] m-0 p-0 items-center">
        <div className="flex flex-col cursor-pointer ">
          <div className="text-[15px]">Politica de Privacidad</div>
          <div className="text-[15px]">Terminos y Condiciones</div>
          <div className="text-[15px]">Contacto</div>
        </div>
        <div className="flex cursor-pointer">
          Copyright (c) 2022 FITCONNECT. Todos los derechos reservados.
        </div>
        <div className="flex">
          <a
            href="https://www.instagram.com/fitconnect"
            target="_blank"
            rel="noreferrer"
          >
            <img className="flex w-[20px] h-[20px] hover:scale-125 hover:transition-all hover:ease-out hover:duration-700 mx-2" src="https://res.cloudinary.com/djqwbu0my/image/upload/v1689777002/instagram-1-svgrepo-com_fmc3w5.svg" alt="" />
          </a>
          <a
            href="https://www.twitter.com/fitconnect"
            target="_blank"
            rel="noreferrer"
          >
            <img className="hover:scale-125 w-[20px] h-[20px] hover:transition-all hover:ease-out hover:duration-700 mx-2 " src="https://res.cloudinary.com/djqwbu0my/image/upload/v1689777002/twitter-color-svgrepo-com_gxkdtc.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
