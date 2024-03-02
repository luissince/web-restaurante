function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-pedirAhora bg-cover pt-[98px] lg:pr-0 x:pb-36 lg:pb-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[50%] w-full px-3">
                        <div className="relative max-w-xl z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">
                                Pedir <span className="d-block" > Ahora</span>
                            </h1>
                            <div className="bg-black bg-opacity-60 rounded-2xl px-3 py-3 mb-10" >
                                <p className="text-paragraph text-md  leading-6 text-white ">
                                    ¡Deléitate con nuestra deliciosa selección de platos y pide ahora mismo! Desde sabores criollos hasta especialidades internacionales, satisfacemos todos
                                    tus antojos con solo un clic. ¡Haz tu pedido y déjanos llevar la experiencia culinaria directamente a tu puerta!
                                </p>
                            </div>
                            <p className="mb-4">
                                <a href="" className="btn bg-orderNow font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2 text-white" >
                                    Pedir Ahora
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex relative lg:w-[50%] w-full">
                        {/* <div className="hidden lg:block xs:overflow-x-hidden after:absolute x:after:w-[255px] x:after:h-[217px] lg:after:w-[255px] lg:after:h-[217px] after:bg-bannerRight after:bg-contain after:bg-no-repeat after:right-[-60px] lg:after:right-[0px] lg:after:top-[-20px] x:after:right-[-60px] x:after:top-[-60px] xl:after:right-[0px] 2xl:after:right-[-60px]">
                            <img
                                src="assets/muebles/mesa_para_tv.png"
                                className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-50px] lg:right-[-100px]"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        // <!-- End Hero Section -->
    );
}

function Menu() {
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="mx-auto left-0 py-0 md:py-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">El menú del día</h2>
            </div>

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
        </section>
    );
}

function Promociones() {
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="mx-auto left-0 py-0 md:py-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-0">Promociones</h2>
            </div>

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
        </section>
    );
}

function Especiales() {
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="mx-auto left-0 py-0 md:py-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-0">Los ejecutivos</h2>
            </div>

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
        </section>
    );
}

function Postres(){
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="mx-auto left-0 py-0 md:py-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-0">Postres</h2>
            </div>

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
                    <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/arrozzambito.png" alt=""/>
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
        </section>
    );
}

function Bebidas() {
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="mx-auto left-0 py-0 md:py-5">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-0">Bebidas</h2>
            </div>

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
                    <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/chichamorada.png" alt=""/>
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
                    <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="/assets/maracuya.png" alt=""/>
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
        </section>
    );
}

export default function ordenar() {
    return (
        <>
            <Banner />

            <Menu />

            <Promociones />

            <Especiales />

            <Postres />

            <Bebidas />
        </>
    );
}