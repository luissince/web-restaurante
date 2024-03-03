import Image from "next/image";
// import { LogoOftalmogia2 } from "../lib/images";
import Link from "next/link";
import { Container } from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 px-6 py-12">
      <Container>
        <div className="flex pb-8">
          <div className="flex flex-grow">
            <div>
              {/* <img
                className="w-52"
                src="/static/media/logo2.7419725d.png"
                alt="logo"
              /> */}
              <Link href="/" className="text-white uppercase font-bold text-base lg:text-2xl tracking-widest">Rapido y Sabroso</Link>
            </div>
          </div>
          <div className="flex space-x-12">
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Acerca de nosotoros</span>
              <span className="text-white poppins">Mi carrito</span>
              <span className="text-white poppins">Delivery</span>
              <span className="text-white poppins">Retiro en tienda</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Locales</span>
              <span className="text-white poppins">Preguntanos</span>
              <span className="text-white poppins">Pedir Ahora</span>
              <span className="text-white poppins">Contactanos</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-white poppins">Facebook</span>
              <span className="text-white poppins">Instagram</span>
              <span className="text-white poppins">Twitter</span>
              <span className="text-white poppins">Youtube</span>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-8">
          <div className="flex flex-grow justify-center">
            <span className="poppins text-gray-500">
              Copyright ©{currentYear}. All Rights Reserved. — Designed by Rahamsis C.G. Distributed By SysoftIntegra
            </span>
          </div>
          {/* <div className="flex justify-end items-center space-x-6">
            <span className="poppins text-white cursor-pointer">
              Politicas de privacidad
            </span>
            <span className="poppins text-white cursor-pointer">
              Terminos de 
            </span>
            <span className="poppins text-white cursor-pointer">Pricing</span>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
