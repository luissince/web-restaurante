interface DireccionProps {
    nombre: string;
    telefono: string;
    direccion: string;
    horario: string;
}

const Direccion = ({ nombre, telefono, direccion, horario }: DireccionProps) => {
    return (
        <div className="w-1/3 mb-4">
            <div className="h-100 border justify-content-between d-flex flex-column rounded">
                {/* <img className="my-4 img-fluid" src="/assets/img/illustration/digital-02.svg" alt="" /> */}
                <h5 className="py-3 mb-0 bg-light text-xl text-center font-bold">{nombre}</h5>
                <div className="mx-6 my-4">
                    <div className="my-2"><i className="bi bi-telephone-fill"></i> {telefono}</div>
                    <div className="my-2"><i className="bi bi-geo-alt-fill"></i> {direccion}</div>
                    <div className="my-2"><i className="bi bi-calendar-check-fill"></i> {horario}</div>
                </div>
            </div>
        </div>
    );
}

export default Direccion;