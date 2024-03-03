import { Container } from "@/components/container";
import { TituloSeccion } from "@/components/titulo";
import Direccion from "./Direccion";

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


export default Locales;