import Link from "next/link";
import { Container } from "../../components/container";
import { BannerSecundario } from "../../components/banner";
import { TituloSeccion } from "../../components/titulo";
import { CardPlato } from "@/components/card";
import { CardPlatoWithoutType } from "@/components/cardwt";

function Menu() {
    return (
        <section className="py-10">
            <Container>

                <TituloSeccion texto={"El menú del día"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch1.png"}
                        nombre={"Beef Steak"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 15.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch2.png"}
                        nombre={"Honey with Peppers"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch3.png"}
                        nombre={"Tarrgaon Rubbed Salmon"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch4.png"}
                        nombre={"Indian Lunch"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 8.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch5.png"}
                        nombre={"Fried Chicken Bento"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 13.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlato
                        tipo={"Lunch"}
                        imagen={"/assets/lunch/lunch6.png"}
                        nombre={"healthy Meal Plan"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 83.99"}
                        tituloBotom={"Pedir ahora"} />
                </div>
            </Container>
        </section>
    );
}

function Promociones() {
    return (
        <section className="py-10">
            <Container>
                <TituloSeccion texto={"Promociones"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch1.png"}
                        nombre={"Beef Steak"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 15.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch2.png"}
                        nombre={"Honey with Peppers"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch3.png"}
                        nombre={"Tarrgaon Rubbed Salmon"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />
                </div>
            </Container>
        </section>
    );
}

function Especiales() {
    return (
        <section className="py-10">
            <Container>
                <TituloSeccion texto={"Los ejecutivos"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch1.png"}
                        nombre={"Beef Steak"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 15.90"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch2.png"}
                        nombre={"Honey with Peppers"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch3.png"}
                        nombre={"Tarrgaon Rubbed Salmon"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 7.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch4.png"}
                        nombre={"Indian Lunch"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 8.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch5.png"}
                        nombre={"Fried Chicken Bento"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 13.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/lunch/lunch6.png"}
                        nombre={"healthy Meal Plan"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 83.99"}
                        tituloBotom={"Pedir ahora"} />
                </div>
            </Container>
        </section >
    );
}

function Postres() {
    return (
        <section className="py-10">
            <Container>
                <TituloSeccion texto={"Postres"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

                    <CardPlatoWithoutType
                        imagen={"/assets/arrozconleche.png"}
                        nombre={"Arroz con leche"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 5.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/mazamorra.png"}
                        nombre={"Mazamorra morada"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 6.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/picarones.png"}
                        nombre={"Picarones"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 4.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/arrozzambito.png"}
                        nombre={"Arroz zambito"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 5.99"}
                        tituloBotom={"Pedir ahora"} />
                </div>
            </Container>
        </section>
    );
}

function Bebidas() {
    return (
        <section className="py-10">
            <Container>
                <TituloSeccion texto={"Bebidas"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <CardPlatoWithoutType
                        imagen={"/assets/inkakola.png"}
                        nombre={"Inka Kola"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 2.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/cocacola.png"}
                        nombre={"Coca Cola"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 2.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/fanta.png"}
                        nombre={"Fanta"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 2.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/limonada.png"}
                        nombre={"Limonada"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 4.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/chichamorada.png"}
                        nombre={"Chicha Morada"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 4.99"}
                        tituloBotom={"Pedir ahora"} />

                    <CardPlatoWithoutType
                        imagen={"/assets/maracuya.png"}
                        nombre={"Maracuya"}
                        descripcion={"   Gay one the what walk then she. Demesne mention pr"}
                        precio={"S/. 4.99"}
                        tituloBotom={"Pedir ahora"} />                
                </div>
            </Container>
        </section>
    );
}

export default function ordenar() {
    return (
        <>
            <BannerSecundario
                fondo={"bg-pedirAhora"}
                titulo={" Pedir Ahora"}
                descripcion={`¡Deléitate con nuestra deliciosa selección de platos y pide ahora mismo! Desde sabores criollos hasta especialidades internacionales, satisfacemos todos
                tus antojos con solo un clic. ¡Haz tu pedido y déjanos llevar la experiencia culinaria directamente a tu puerta!`}
                textoBotom={"Pedir Ahora"}
                rutaBotom={"/"}
            />

            <Menu />

            <Promociones />

            <Especiales />

            <Postres />

            <Bebidas />
        </>
    );
}