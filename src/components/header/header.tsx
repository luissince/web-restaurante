"use client";
/** @jsxImportSource @emotion/react */
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { Container } from "../container";

const active = {
  fontWeight: "500",
  color: "rgb(255, 255, 255, 0.01)",
  position: "relative",
  paddingLeft: "8px",
  paddingRight: "8px",
  borderBottom: "4px solid #32a1ce",
};

const disactive = {
  default: {
    fontWeight: "500",
    color: "rgb(255, 255, 255, 0.01)",
    position: "relative",
    paddingLeft: "8px",
    paddingRight: "8px",
    opacity: 0.5,
  },
  Hovered: {
    fontWeight: "500",
    color: "rgb(255, 255, 255, 0.01)",
    position: "relative",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
};

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="lg:hidden bg-greenBanner py-5 fixed flex flex-wrap items-center justify-between w-full z-50"
      arial-label="Furni navigation bar"
    >
      <div className="flex items-center justify-between w-full px-3 mx-auto">
        <a
          className="text-3xl font-semibold text-white py-[0.3125rem] mr-4 whitespace-nowrap"
          href="/"
        >
          Los Chasquis
        </a>

        <button
          className="text-white focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl"
          onClick={toggleMenu}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      {/* Lista del menú que se mostrará o ocultará */}
      <div
        className={`lg:hidden w-full mx-auto px-3 pt-2 ${menuOpen ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col text-lg font-medium text-white">
          <li className="my-3">
            <Link className="opacity-50 w-full " href="/">
              Inicio
            </Link>
          </li>
          <li className="my-3">
            <Link className="opacity-50" href="shop" onClick={toggleMenu}>
              Tienda
            </Link>
          </li>
          <li className="my-3">
            <Link className="opacity-50" href="nosotros" onClick={toggleMenu}>
              Nosotros
            </Link>
          </li>
          <li className="my-3">
            <Link className="opacity-50" href="services" onClick={toggleMenu}>
              Servicios
            </Link>
          </li>
          <li className="my-3">
            <Link className="opacity-50" href="blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li className="my-3">
            <Link className="opacity-50" href="contact" onClick={toggleMenu}>
              Contáctanos
            </Link>
          </li>
        </ul>

        <ul className="flex flex-row text-lg font-medium text-white">
          <li className="my-3 mr-5">
            <Link className=" relative" href="#">
              <Image width={18} height={20} src="assets/user.svg" className="" alt="" />
            </Link>
          </li>
          <li className="my-3">
            <Link className="relative" href="#">
              <Image width={18} height={20} src="assets/cart.svg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function NavbarMultiDevice() {
  const pathName = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-amber-700/0");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 50 && scrollY < 120) {
        setBackgroundColor("bg-amber-700/50");
      } else if (scrollY >= 120) {
        setBackgroundColor("bg-amber-700/100");
      } else if (scrollY < 50) {
        setBackgroundColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundColor]);

  return (
    <nav className={`flex bg-red py-5 items-center flex-nowrap justify-start fixed top-0 left-0 w-full z-50 ${backgroundColor}`} arial-label="Furni navigation bar" >
      <Container>
        <div className="h-24 relative grid grid-cols-3">
          <div className="flex items-center">
            {/* inicio boton open and close */}
            <label id="show-button" className={`order-1 flex cursor-pointer items-center lg:order-1 text-white ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
              </svg>
            </label>
            <label id="hide-button" className={`order-2 cursor-pointer items-center lg:order-1 text-white ${menuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon>
              </svg>
            </label>
            {/* fin boton open and close */}

            {/* <button className="text-white focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button> */}
            <div className={`absolute transition-all duration-700 right-0 ${menuOpen ? "w-full block absolute ml-auto mr-auto top-[250%] left-0 right-0 text-center" : "text-center -top-[700px] -left-[2000px] mx-auto"}`}>
              <Link className="text-4xl block mt-0 text-white" href="/" onClick={toggleMenu}>
                <span className={`${pathName === "/" ? "border-b-4 border-b-secondary" : "opacity-50"}`}>Inicio</span>
              </Link>
              <Link className="text-4xl block mt-5 text-white" href="/pedir" onClick={toggleMenu}>
                <span className={`${pathName === "/pedir" ? "border-b-4 border-b-secondary" : "opacity-50"}`}>Pide Ahora</span>
              </Link>
              <Link className="text-4xl block mt-5 text-white" href="/nosotros" onClick={toggleMenu}>
                <span className={`${pathName === "/nosotros" ? "border-b-4 border-b-secondary" : "opacity-50"}`}>Nosotros</span>
              </Link>
              <Link className="text-4xl block mt-5 text-white" href="/local" onClick={toggleMenu}>
                <span className={`${pathName === "/local" ? "border-b-4 border-b-secondary" : "opacity-50"}`}>Locales</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <Link href="/" className="text-white uppercase font-bold text-base lg:text-2xl tracking-widest">Rapido y Sabroso</Link>
          </div>

          <div className="flex items-center justify-end">
            <ul className="ml-10 flex ms-5">
              <li className="ml-4 mr-4">
                <Link className="font-medium text-white relative" href="#">
                  <Image width={18} height={20} src="assets/user.svg" className="" alt="" />
                </Link>
              </li>
              <li className="ml-4">
                <Link className="font-medium text-white relative" href="#">
                  <Image width={18} height={20} src="assets/cart.svg" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {/* inicio background circular*/}
      <div className={`absolute  w-screen h-screen -z-[1] rounded-br-[80%] bg-amber-700 transition-all duration-500 ${menuOpen ? "top-0 left-0 w-screen h-scree" : "-top-[1500px] -left-[4000]px"}`}>
      </div>
      {/* inicio background circular*/}
    </nav>

  );
}

const Navbar = () => {
  return (
    <>
      {/* Navbar para pantallas grandes */}
      <NavbarMultiDevice />

      {/* Navbar para pantallas pequeñas */}
      {/* <NavbarMobile /> */}
    </>
  );
};

export default Navbar;
