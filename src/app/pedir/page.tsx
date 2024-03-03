import Link from "next/link";
import { Container } from "../../components/container";
import { BannerSecundario } from "../../components/banner";
import { TituloSeccion } from "../../components/titulo";

function Menu() {
    return (
        <section className="py-10">
            <Container>

                <TituloSeccion texto={"El menú del día"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/lunch/lunch1.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Beef Steak</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 15.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch2.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Honey with Peppers
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch3.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Tarrgaon Rubbed Salmon
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch4.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Indian Lunch</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 8.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch5.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Fried Chicken Bento
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 13.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch6.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">healthy Meal Plan</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 83.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
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
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/lunch/lunch1.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Beef Steak</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 15.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch2.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Honey with Peppers
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch3.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Tarrgaon Rubbed Salmon
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
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
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/lunch/lunch1.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Beef Steak</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 15.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch2.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Honey with Peppers
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch3.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Tarrgaon Rubbed Salmon
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch4.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Indian Lunch</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 8.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch5.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">
                                Fried Chicken Bento
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 13.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/lunch/lunch6.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">healthy Meal Plan</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 83.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Postres() {
    return (
        <section className="py-10">
            <Container>
                <TituloSeccion texto={"Postres"} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/arrozconleche.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Arroz con leche</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 15.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/mazamorra.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg"> Mazamorra morada </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/picarones.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg"> Picarones </h1>
                            <p className="text-gray-500 poppins text-sm text-center"> Gay one the what walk then she. Demesne mention pr </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"> Pedir ahora </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/arrozzambito.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Arroz zambito</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 8.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
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
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/inkakola.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Inka Kola</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 15.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/cocacola.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg"> Coca Cola </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/fanta.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg"> Fanta </h1>
                            <p className="text-gray-500 poppins text-sm text-center"> Gay one the what walk then she. Demesne mention pr </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 7.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"> Pedir ahora </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img
                            className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                            src="/assets/limonada.png"
                            alt=""
                        />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Limonada</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 8.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/chichamorada.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg">Chicha Morada</h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                Gay one the what walk then she. Demesne mention pr
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 83.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/maracuya.png" alt="" />
                        <div className="flex flex-col items-center my-3 space-y-2">
                            <h1 className="text-gray-900 poppins text-lg"> Maracuya </h1>
                            <p className="text-gray-500 poppins text-sm text-center">Gay one the what walk then she. Demesne mention pr </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">S/. 13.99</h2>
                            <button className="bg-orderNow text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                                Pedir ahora
                            </button>
                        </div>
                    </div>
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