import Link from "next/link";
import React from "react";

const BannerPrincipal = () => {
    return (
        <div className="-mt-24 relative w-full pt-40 lg:pt-12 lg:pb-12 px-12 bg-banner bg-no-repeat bg-cover bg-center">
            <div className="bg-black/[0.6] absolute z-[1] left-0 right-0 top-0 bottom-0"></div>
            <div className="relative z-10 text-center py-24 md:py-48">
                <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
                    El mejor sabor de la vida
                </h1>
                <Link href="/pedir" className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 border border-white" >
                    Ver los platos
                </Link>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm md:text-base ">
                <Link href="/" className="border-b border-white"> Delivery </Link>{" "}
                <Link href="/" className="border-b border-white"> Retiro en Tienda </Link>
            </div>
        </div>
    );
}

interface BannerSecundarioProps {
    fondo: string,
    titulo: string,
    descripcion: string,
    textoBotom: string,
    rutaBotom: string
}

const BannerSecundario: React.FC<BannerSecundarioProps> = ({ fondo, titulo, descripcion, textoBotom, rutaBotom }) => {
    return (
        <div className={`${fondo} bg-no-repeat bg-cover bg-center relative w-full px-12`}>
            <div className="bg-black/[0.6] absolute z-[1] left-0 right-0 top-0 bottom-0"></div>

            <div className="container mx-auto px-0">
                <div className="flex flex-col items-start text-left relative z-10 py-24 md:py-48">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3">
                        {titulo}
                    </h1>
                    <div className=" w-2/5 bg-black/50 bg-opacity-90 rounded-2xl px-3 py-3 mb-10" >
                        <p className="whitespace-pre-line leading-7 text-white ">
                            {descripcion}
                        </p>
                    </div>
                    <div className="">
                        <Link href={rutaBotom} className="bg-orderNow text-white p-3 rounded" >
                            {textoBotom}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    BannerPrincipal,
    BannerSecundario
}