"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { CustomModalForm } from "../components/modal/modal";
import { Container } from "../components/container";
import { BannerPrincipal } from "../components/banner";
import { TituloSeccion } from "../components/titulo";
import { CardPlato } from "../components/card";

interface ItemModalProps {
  nombre: string;
  precio: string;
}

const ItemModal: React.FC<ItemModalProps> = ({ nombre, precio }) => {
  return (
    <li>
      <div className="flex justify-between items-center py-2 pr-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer">
        <div className="ms-2 text-sm">
          <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-300">
            <p>{nombre}</p>
            <p id="helper-radio-text-4" className="text-sm font-normal text-gray-500 dark:text-gray-300">{precio}</p>
          </label>
        </div>

        <div className="flex items-center h-5">
          <input
            id="helper-radio-4"
            name="helper-radio"
            type="radio"
            value=""
            className="w-5 h-5 text-[#de4202] bg-white border-2 border-gray-900 focus:ring-[#de4202] dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        </div>
      </div>
    </li>
  );
}


function Menu() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>();
  const modalRefPlus = useRef<HTMLButtonElement>(null);
  const [modalCantidad, setModalCantidad] = useState(1);

  function openModal() {
    console.log("dasd")
    setIsOpen(true);
  }

  function closeModal() {
    const data = modalRef.current as HTMLDivElement
    data.classList.add("close-cm")
    data.addEventListener('animationend', () => {
      setIsOpen(false);
    })
  }

  function saveModal() {
    console.log("asdasd")
    closeModal()
  }

  return (
    <section className=" bg-white py-10">
      <Container>

        <TituloSeccion className="text-center" texto={"El menú del día"} />

        <CustomModalForm
          contentRef={(ref: any) => modalRef.current = ref}
          isOpen={modalIsOpen}
          onOpen={() => {
            const bodyRef = document.body as HTMLBodyElement;
            bodyRef.style.overflow = "hidden"
            modalRefPlus.current?.focus();
          }}
          onClose={closeModal}
          onHidden={() => {
            const bodyRef = document.body as HTMLBodyElement;
            bodyRef.style.overflow = "initial"
          }}
          contentLabel={""}
          titleHeader={""}
          onSubmit={saveModal}
          body={
            <div className="flex-1 flex w-full h-full">
              <div className="hidden md:block flex-1 w-1/2">
                <div className="h-full relative">
                  <Image
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                    src="https://tofuu.getjusto.com/orioneat-prod-resized/z28AKtxPAMdcZyb9m-1200-1200.webp"
                    alt="Salchipapa Nación + chicha"
                    title="Salchipapa Nación + chicha"
                  />
                </div>
              </div>

              <div className="hidden md:flex flex-1 flex-col">
                <div className="h-full overflow-auto">
                  <div className="h-full">
                    <div className="p-4 pb-0 flex-1">
                      <h2 className="text-xl mb-1 text-grey-darkest">Nombre del producto</h2>
                      <div className="text-xs flex items-center mb-4 ">
                        <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                        descripción
                      </div>

                      <span className="text-4xl text-grey-darkest ">S/63.00<span className="text-lg"> PEN</span></span>
                    </div>

                    <div className="border-b mt-3"></div>

                    <div className="flex px-4 items-center justify-between mt-4">
                      <div className="pr-2 text-base">
                        <i className="fas fa-wifi text-green"></i> Agregamos un postre tradicional?
                      </div>
                      <div className="px-2 text-xs bg-gray-200 text-gray-900 rounded">
                        <i className="text-grey-darker far fa-building"></i> Opcional
                      </div>
                    </div>

                    <div className="">
                      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">

                        <ItemModal nombre={"Arroz con leche 250ml"} precio={"S/ 7.00"} />
                        <ItemModal nombre={"Mazamorra morada 250ml"} precio={"S/ 7.00"} />
                        <ItemModal nombre={"Arroz zambito 250ml"} precio={"S/ 7.00"} />
                        <ItemModal nombre={"Combinado 250ml"} precio={"S/ 7.00"} />
                        <ItemModal nombre={"Picarones x 4"} precio={"S/ 7.00"} />

                      </ul>
                    </div>

                    <div className="border-b mt-3"></div>

                    <div className="flex px-4 items-center justify-between mt-4">
                      <div className="pr-2 text-base">
                        <i className="fas fa-wifi text-green"></i> Estamos colaborando con el medio ambiente, deseas curbiertos?
                      </div>
                      <div className="px-2 text-xs bg-gray-200 text-gray-900 rounded">
                        <i className="text-grey-darker far fa-building"></i> Opcional
                      </div>
                    </div>

                    <div className="">
                      <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">

                        <ItemModal nombre={"Sí, deseo cubiertos"} precio={""} />
                        <ItemModal nombre={"No, deseo ayudar con el medio ambiente"} precio={""} />

                      </ul>
                    </div>

                    <div className="border-b mt-3"></div>

                    <div className="flex px-4 items-center justify-between mt-4">
                      <div className="pr-2 text-base">
                        <i className="fas fa-wifi text-green"></i> Instrucciones especiales
                      </div>
                    </div>

                    <div className="flex px-4 py-4">
                      <textarea
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          }
          footer={
            <div className="flex space-x-3">
              <div className="flex items-center">
                <button
                  className="bg-black px-3 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold  rounded-full transition duration-300 ease-in-out"
                  type="button"
                  ref={modalRefPlus}
                  onClick={() => {
                    setModalCantidad(prevCantidad => prevCantidad + 1);
                  }}>
                  <i className="bi bi-plus"></i>
                </button>
                <p className="px-4">{modalCantidad}</p>
                <button
                  className="bg-black px-3 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold  rounded-full transition duration-300 ease-in-out"
                  type="button"
                  onClick={() => {
                    if (modalCantidad <= 1) {
                      return;
                    }

                    setModalCantidad(prevCantidad => prevCantidad - 1);
                  }}>
                  <i className="bi bi-dash"></i>
                </button>
              </div>

              <button className="flex bg-[#de4202] p-3 rounded space-x-10" type="submit"   >
                <div className="text-white">
                  <i className="bi bi-cart-plus"></i> Agregar
                </div>
                <div>
                  <span className="text-white">S/ 9.90</span>
                </div>
              </button>
            </div>
          }
        />

        {/* <div className="flex items-center justify-center space-x-6">
        <p className="menu_tab poppins">Breakfast</p>
        <p className="active_menu_tab poppins bg-orderNow">Lunch</p>
        <p className="menu_tab poppins">Dinner</p>
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch1.png"
            nombre={"Beef Steak"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/15.99"}
            tituloBotom={"Pedir ahora"}
            onClick={openModal}
          />

          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch2.png"
            nombre={"Honey with Peppers"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/7.99"}
            tituloBotom={"Pedir ahora"}
          />

          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch3.png"
            nombre={"Tarrgaon Rubbed Salmon"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/10.99"}
            tituloBotom={"Pedir ahora"}
          />

          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch4.png"
            nombre={"Indian Lunch"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/8.99"}
            tituloBotom={"Pedir ahora"}
          />


          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch5.png"
            nombre={"Fried Chicken Bento"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/11.99"}
            tituloBotom={"Pedir ahora"}
          />

          <CardPlato
            tipo={"Lunch"}
            imagen="/assets/lunch/lunch6.png"
            nombre={"Healthy Meal Plan"}
            descripcion={"Gay one the what walk then she. Demesne mention pr"}
            precio={"S/83.99"}
            tituloBotom={"Pedir ahora"}
          />

        </div>
      </Container>
    </section>
  );
}

function WhyChoose() {
  return (
    <div className="py-28 px-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-[0] lg:mr-[0.75] lg:ml-[0.75px] xs:mx-3 justify-between">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-primary text-[2rem] mt-0 mb-6 lg:mb-3 font-medium leading-[1.2] text-center lg:text-left">
              Por que escogernos
            </h2>
            <p className="mt-0 mb-4 text-center lg:text-left lg:mr-3">
              En nuestro compromiso con la calidad y la excelencia, todos
              nuestros productos están meticulosamente confeccionados utilizando
              maderas de la más alta calidad. Cada pieza es creada con esmero,
              asegurando no solo la durabilidad, sino también un acabado
              impecable.
            </p>

            <div className="my-12 flex flex-wrap mx-2 lg:mr-[0.75px] lg:ml-[0.75px]">
              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img
                      src="assets/truck.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">
                    Entrega Rápida
                  </h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">
                    Recibie tus muebles de alta calidad de manera rápida y
                    eficiente. Nuestro servicio de envío rápido garantiza que
                    tus piezas seleccionadas lleguen a tu puerta en el menor
                    tiempo posible.
                  </p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img
                      src="assets/bag.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">
                    Cotización Sencilla
                  </h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">
                    Simplificamos el proceso de cotización para que puedas
                    obtener rápidamente un presupuesto personalizado. Obtén
                    precios transparentes y descubre cómo hacer realidad tus
                    proyectos de decoración nunca fue tan sencillo.
                  </p>
                </div>
              </div>

              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img
                      src="assets/support.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">
                    Atención Ininterrumpida
                  </h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">
                    Nuestro equipo de atención al cliente está disponible para
                    responder tus preguntas, brindarte asesoramiento experto y
                    garantizar una experiencia de compra sin contratiempos
                  </p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img
                      src="assets/return.svg"
                      alt="Image"
                      className="imf-fluid"
                    />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">
                    Servicio de Armado Incluido
                  </h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">
                    Con nosotros, no te preocuparás por ensamblar tus nuevos
                    muebles, ya que nuestro equipo capacitado se encargará de
                    todo.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[41.67%] w-full mt-10 lg:mt-0">
            <div className="relative after:absolute after:w-[300px] lg:after:w-[500px] after:h-[200px] after:bg-whychoose after:bg-no-repeat after:bg-contain after:content-normal after:top-[-80px] after:left-[-95px] after:z-[-1]">
              <img
                src="assets/muebles/ropero2.png"
                alt="Image"
                className="rounded-[20px] max-w-screen-xxs lg:max-w-full h-auto align-middle ml-10 lg:ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeHelp() {
  return (
    <div className="pt-12 lg:pt-28 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 ml-[-0.75pm] mr-[-0.75px] xs:mx-3 justify-between">
          <div className="lg:w-[58.3%] xs:w-full lg:mb-0 mb-10 ml-3 lg:ml-0">
            <div className="grid grid-cols-weHelp relative after:absolute after:w-[255px] after:h-[217px] after:bg-weHelp after:bg-contain after:bg-no-repeat after:z-[-1] after:top-[-85px] lg:after:left-[-70px] after:left-[-110px]">
              <div className="relative col-start-1 col-end-[18] row-start-1 row-end-[27]">
                <img
                  src="assets/muebles/img-grid-1.png"
                  alt="Untree.co"
                  className="rounded-[20px] max-w-full align-middle"
                />
              </div>
              <div className="relative col-start-[19] col-end-[27] row-start-1 row-end-[5]">
                <img
                  src="assets/img-grid-2.jpg"
                  alt="Untree.co"
                  className="rounded-[20px] max-w-full align-middle"
                />
              </div>
              <div className="relative col-start-[14] col-end-[27] row-start-6 row-end-[27] pt-5">
                <img
                  src="assets/img-grid-3.jpg"
                  alt="Untree.co"
                  className="rounded-[20px] max-w-full align-middle"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[41.67%] xs:w-full pl-0 lg:pl-12">
            <h2 className="text-primary mb-6 text-2xl mt-0 font-medium leading-[1.2] text-center lg:text-left">
              Te Ayudamos a Hacer un Diseño de Interiores Moderno
            </h2>
            <p className="mt-0 mb-4 text-center lg:text-left">
              Nuestra misión es ser un recurso confiable y accesible,
              proporcionando información clara y valiosa para que nuestros
              clientes tomen decisiones informadas y se sientan seguros en cada
              paso de su proceso.
            </p>

            <ul className="pl-0 list-none w-full mt-12 lg:mt-6 mb-6 text-left lg:text-left">
              <li
                className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0"
                style={{ width: "50%-20px" }}
              >
                Funcionalidad y Uso que perdura en el tiempo
              </li>
              <li
                className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0"
                style={{ width: "50%-20px" }}
              >
                Calidad de los Materiales y Construcción
              </li>
              <li
                className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0"
                style={{ width: "50%-20px" }}
              >
                Estilo moderno y Estética de primer nivel
              </li>
              <li
                className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0"
                style={{ width: "50%-20px" }}
              >
                Presupuesto y Relación Calidad-Precio
              </li>
            </ul>
            <p className="mt-0 mb-4 text-center lg:text-left">
              <a
                href="#"
                className="font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] text-white bg-primary border-primary"
              >
                Explorar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopularProduct() {
  return (
    <div className="pt-0 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] ml-auto mr-auto">
        <div className="flex flex-wrap mt-0 mr-[-0.75px] ml-[-0.75] xs:mx-4 ss:mx-0">
          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img
                  src="assets/muebles/banquito.png"
                  alt="Image"
                  className="max-w-full h-auto align-middle"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">
                  Banquillo - model 1
                </h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  Elaborado con madera de la más alta calidad para interiores o
                  exteriores
                </p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <Link href="#" className="text-primary">
                    Leer más
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img
                  src="assets/muebles/silla1.png"
                  alt="Image"
                  className="max-w-full h-auto align-middle"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">
                  Silla - model 2
                </h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  Silla de madera con base tapizada hecha en color a la
                  preferencia
                </p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <Link href="#" className="text-primary">
                    Leer más
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img
                  src="assets/muebles/silla2.png"
                  alt="Image"
                  className="max-w-full h-auto align-middle"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">
                  Silla - model 3
                </h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  Silla de madera con base y respaldar tapizada hecha en color a
                  la preferencia
                </p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <Link href="#" className="text-primary">
                    Leer más
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="lg:pt-28 xs:pt-0 pr-0 lg:pb-48 pb-0 pl-0">
      <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
        <div className="flex flex-wrap mt-0 -mx-[0.75]">
          <div className="w-[58.33%] mx-auto text-center">
            <h2 className="text-primary text-[2rem] mt-0 mb-2 font-medium leading-tight">
              Testimonials
            </h2>
          </div>
        </div>

        <div className="justify-center flex flex-wrap mt-0 -mx-[0.75]">
          <div className="w-full">
            <div className="relative text-center">
              <div
                id="testimonial-nav"
                aria-label="Carousel Navigation"
                className="xs:hidden lg:block absolute top-1/2 z-[99] w-full"
              >
                <span
                  className="-left-[10px] cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary"
                  data-controls="prev"
                  aria-controls="tns1"
                >
                  <i className="bi bi-chevron-left"></i>
                </span>
                <span
                  className="right-0 cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary"
                  data-controls="next"
                  aria-controls="tns1"
                >
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>

              <div className="p-0" id="tns1-ow">
                <div
                  className="absolute lg:-bottom-[50px] bottom-0 left-1/2 -translate-x-1/2"
                  aria-label="Carousel Pagination"
                >
                  <button
                    data-nav="0"
                    aria-controls="tns1"
                    aria-label="Carousel Page 1 (Current Slide)"
                    className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                  ></button>
                  <button
                    data-nav="1"
                    aria-controls="tns1"
                    aria-label="Carousel Page 2"
                    className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                  ></button>
                  <button
                    data-nav="2"
                    aria-controls="tns1"
                    aria-label="Carousel Page 3"
                    className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                  ></button>
                </div>

                <div
                  className="absolute -left-[10000em]"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  slide <span className="current">2</span> of 3
                </div>
                <div id="tns1-mw" className="overflow-hidden">
                  <div className="pt-8" id="tns1-iw">
                    <div
                      className="tns-carousel whitespace-nowrap w-[500%] transition-products"
                      id="tns1"
                    >
                      <div
                        className="w-[20%] text-sm inline-block align-top whitespace-normal"
                        aria-hidden="true"
                      >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 lg:text-lg">
                                <p className="mt-0 mb-4">
                                  “Donec facilisis quam ut purus rutrum
                                  lobortis. Donec vitae odio quis nisl dapibus
                                  malesuada. Nullam ac aliquet velit. Aliquam
                                  vulputate velit imperdiet dolor tempor
                                  tristique. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames
                                  ac turpis egestas. Integer convallis volutpat
                                  dui quis scelerisque.”
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img
                                    src="assets/person-1.png"
                                    alt="Maria Jones"
                                    className="h-auto max-w-[80px] rounded-[50%] mx-auto"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                  Maria Jones
                                </h3>
                                <span className="mb-4 block">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="w-[20%] text-sm inline-block align-top whitespace-normal"
                        aria-hidden="true"
                      >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 xs:text-sm lg:text-lg">
                                <p className="mt-0 mb-4">
                                  “Donec facilisis quam ut purus rutrum
                                  lobortis. Donec vitae odio quis nisl dapibus
                                  malesuada. Nullam ac aliquet velit. Aliquam
                                  vulputate velit imperdiet dolor tempor
                                  tristique. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames
                                  ac turpis egestas. Integer convallis volutpat
                                  dui quis scelerisque.”
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img
                                    src="assets/person-1.png"
                                    alt="Maria Jones"
                                    className="h-auto max-w-[80px] rounded-[50%] align-middle mx-auto"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                  Maria Jones
                                </h3>
                                <span className="mb-4 block">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div
                        className="w-[20%] text-sm inline-block align-top whitespace-normal"
                        aria-hidden="true"
                      >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">
                                  “Donec facilisis quam ut purus rutrum
                                  lobortis. Donec vitae odio quis nisl dapibus
                                  malesuada. Nullam ac aliquet velit. Aliquam
                                  vulputate velit imperdiet dolor tempor
                                  tristique. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames
                                  ac turpis egestas. Integer convallis volutpat
                                  dui quis scelerisque.”
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img
                                    src="assets/person-1.png"
                                    alt="Maria Jones"
                                    className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                  Maria Jones
                                </h3>
                                <span className="mb-4 block">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div
                        className="w-[20%] text-sm inline-block align-top whitespace-normal"
                        aria-hidden="true"
                      >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">
                                  “Donec facilisis quam ut purus rutrum
                                  lobortis. Donec vitae odio quis nisl dapibus
                                  malesuada. Nullam ac aliquet velit. Aliquam
                                  vulputate velit imperdiet dolor tempor
                                  tristique. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames
                                  ac turpis egestas. Integer convallis volutpat
                                  dui quis scelerisque.”
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img
                                    src="assets/person-1.png"
                                    alt="Maria Jones"
                                    className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                  Maria Jones
                                </h3>
                                <span className="mb-4 block">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div
                        className="w-[20%] text-sm inline-block align-top whitespace-normal"
                        aria-hidden="true"
                      >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">
                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">
                                  “Donec facilisis quam ut purus rutrum
                                  lobortis. Donec vitae odio quis nisl dapibus
                                  malesuada. Nullam ac aliquet velit. Aliquam
                                  vulputate velit imperdiet dolor tempor
                                  tristique. Pellentesque habitant morbi
                                  tristique senectus et netus et malesuada fames
                                  ac turpis egestas. Integer convallis volutpat
                                  dui quis scelerisque.”
                                </p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img
                                    src="assets/person-1.png"
                                    alt="Maria Jones"
                                    className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                  />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                  Maria Jones
                                </h3>
                                <span className="mb-4 block">
                                  CEO, Co-Founder, XYZ Inc.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className="pt-28 pr-0 pb-48 pl-0">
      <div className="max-w-[1320px] lg:mx-auto mx-3">
        <div className="flex flex-wrap mt-0  mx-3 mb-12 ">
          <div className="basis-auto lg:w-1/2 w-full">
            <h2 className="text-primary text-2xl mt-0 mb-2 font-medium leading-[1.2]">
              Blog Reciente
            </h2>
          </div>
          <div className="basis-auto lg:w-1/2 lg:text-right text-left w-full">
            <Link href="/blog" className="font-semibold text-primary underline">
              Ver todos los Posts
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap mt-0 mx-[-0.75px]">
          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3">
            <div className="post-entry">
              <Link href="#" className="block mb-5 text-primary ">
                <img
                  src="assets/muebles/cama2.png"
                  alt="Image"
                  className="rounded-[20px] max-w-full h-auto align-middle"
                />
              </Link>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]">
                  <Link href="#" className="text-primary ">
                    Cama para Dormitorio de 2 Plazas
                  </Link>
                </h3>
                <div className="text-sm">
                  <span>
                    <Link href="#" className="font-semibold text-primary">
                      Nota:{" "}
                    </Link>
                  </span>{" "}
                  <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <Link href="#" className="block mb-5 text-primary ">
                <img
                  src="assets/muebles/mesadenoche2.png"
                  alt="Image"
                  className="rounded-[20px] max-w-full h-auto align-middle"
                />
              </Link>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]">
                  <Link href="#" className="text-primary ">
                    Mesa de Centro, diseño futurista
                  </Link>
                </h3>
                <div className="text-sm">
                  <span>
                    <Link href="#" className="font-semibold text-primary">
                      Nota:{" "}
                    </Link>
                  </span>{" "}
                  <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <Link href="#" className="block mb-5 text-primary ">
                <img
                  src="assets/muebles/mesacomedor.png"
                  alt="Image"
                  className="rounded-[20px] max-w-full h-auto align-middle"
                />
              </Link>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]">
                  <Link href="#" className="text-primary ">
                    Mesa de Comedor - 6 personas
                  </Link>
                </h3>
                <div className="text-sm">
                  <span>
                    <Link href="#" className="font-semibold text-primary">
                      Nota:{" "}
                    </Link>
                  </span>{" "}
                  <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <BannerPrincipal />

      <Menu />

      {/* <WhyChoose /> */}

      {/* <WeHelp /> */}

      {/* <PopularProduct /> */}

      {/* <Testimonials /> */}

      {/* <BlogSection /> */}
    </>
  );
}
