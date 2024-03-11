"use client";
import { BannerPrincipal } from "@/components/banner";
import { CardPlato } from "@/components/card";
import { Container } from "@/components/container";
import { TituloSeccion } from "@/components/titulo";
import React, { useRef, useState } from "react";
import InitialModal from "./component/initial-moda";

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

                <InitialModal
                    modalRef={(ref: any) => modalRef.current = ref}
                    isOpen={modalIsOpen}
                    onOpen={() => {
                        const bodyRef = document.body as HTMLBodyElement;
                        bodyRef.style.overflow = "hidden"
                        modalRefPlus.current?.focus();
                    }}

                    closeModal={closeModal}
                    saveModal={saveModal}
                    onHidden={() => {
                        const bodyRef = document.body as HTMLBodyElement;
                        bodyRef.style.overflow = "initial"
                    }}
                    cantidad={modalCantidad}
                    setModalPlus={() => {
                        setModalCantidad(prevCantidad => prevCantidad + 1);
                    }}
                    setModalDash={() => {
                        if (modalCantidad <= 1) {
                            return;
                        }
                        setModalCantidad(prevCantidad => prevCantidad - 1);
                    }}
                />
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

export default function Home() {
    return (
        <>
            <BannerPrincipal />

            <Menu />
        </>
    );
}
