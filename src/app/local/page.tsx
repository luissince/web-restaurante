import Link from "next/link";
import { Container } from "../../components/container";
import { BannerSecundario } from "../../components/banner";
import { TituloSeccion } from "../../components/titulo";
import Direccion from "./component/Direccion";
import MapDireccion from "./component/Map";


function Locales() {
    return (
        <section className="py-10">
            <Container>

                <TituloSeccion texto={"Ubícanos en:"} />

                <div className="flex row justify-content-center mt-6 space-x-3">
                    <Direccion
                        nombre={"Calle Las Magnolias"}
                        telefono={"+51 123 456 78"}
                        direccion={"Av. las magnolias crd 1 calle 1"}
                        horario={"Horario: L - D: 10am - 9pm"} />
                    <Direccion
                        nombre={"Calle Las Girasoles"}
                        telefono={"+51 123 456 78"}
                        direccion={"Av. las pradas crd 1 calle 2"}
                        horario={"Horario: L - D: 10am - 9pm"} />
                    <Direccion
                        nombre={"Calle Nuevo Progres"}
                        telefono={"+51 123 456 78"}
                        direccion={"Av. avanza pais crd 1 calle 1"}
                        horario={"Horario: L - D: 10am - 9pm"} />
                </div>
            </Container>
        </section>
    );
}


export default function locales() {
    return (
        <>
            <BannerSecundario
                fondo={"bg-locales"}
                titulo={" Pedir Ahora"}
                descripcion={`Descubre nuestros acogedores locales y sumérgete en una atmósfera única donde la comida y la cultura se fusionan. Desde nuestro encantador local en el corazón de la ciudad hasta
                nuestras sedes más pintorescas en los barrios más auténticos, cada lugar está diseñado para ofrecerte una experiencia gastronómica inolvidable. ¡Ven y únete a nosotros en
                cualquiera de nuestros locales para disfrutar de la mejor comida criolla en un ambiente inigualable!`}
                textoBotom={"Pedir Ahora"}
                rutaBotom={"/"}
            />

            <Locales />

            <MapDireccion />
        </>
    );
}