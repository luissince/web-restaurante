import { BannerSecundario } from "../../components/banner";
import MapDireccion from "./component/Map";
import Locales from "./component/Sede";

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