import Image from "next/image";

interface CardPlatoProps {
    imagen: string;
    nombre: string;
    descripcion: string;
    precio: string;
    tituloBotom: string;
    onClick?: () => void
}

const CardPlatoWithoutType: React.FC<CardPlatoProps> = ({ imagen, nombre, descripcion, precio, tituloBotom, onClick }) => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <Image
                className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                src={imagen}
                width={256}
                height={257}
                alt=""
            />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{nombre}</h1>
                <p className="text-gray-500 poppins text-sm text-center">
                    {descripcion}
                </p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">{precio}</h2>
                <button
                    className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                    onClick={onClick}>
                    {tituloBotom}
                </button>
            </div>
        </div>
    );
};

export {
    CardPlatoWithoutType
}