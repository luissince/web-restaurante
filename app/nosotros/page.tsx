import Link from "next/link";

function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-nosotros bg-cover pt-[98px] lg:pr-0 x:pb-36 lg:pb-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[50%] w-full px-3">
                        <div className="relative max-w-xl z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">
                                Acerca de <br />
                                <span className="d-block">Nosotros</span>
                            </h1>
                            <div className="bg-black bg-opacity-35 rounded-2xl px-3 py-3 mb-10" >
                                <p className="text-paragraph text-md  leading-6 text-white ">
                                Descubre el auténtico sabor de la cocina criolla en nuestro restaurante. Con platos tradicionales y sabores únicos, te llevaremos en un viaje culinario a través de las raíces de 
                                nuestra cultura. Disfruta de la frescura de nuestros ingredientes locales y deléitate con la calidez de nuestro ambiente. En cada bocado, encontrarás la pasión y el amor por nuestra 
                                herencia gastronómica. ¡Bienvenido a una experiencia gastronómica criolla inolvidable!
                            </p>
                            </div>                            
                            <p className="mb-4">
                                <Link href="/ordenar" className="btn bg-orderNow font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2 text-white" >
                                    Pedir Ahora
                                </Link>
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

function WhyChoose() {
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6">
            <div className="flex justify-center w-full">
                <h1 className="text-4xl poppins pb-4">Por qué escogernos</h1>
            </div>

            <div className="flex">
                <p className="text-gray-500 text-sm poppins w-2/4 mx-3">
                    <ul className="list-disc">
                        <li><span className="font-bold">Ingredientes frescos y de calidad:</span>  Nos comprometemos a utilizar ingredientes frescos y de la más alta calidad en cada uno de nuestros platos, garantizando un sabor excepcional en cada bocado.</li>
                        <li><span className="font-bold">Variedad de opciones para todos los gustos:</span> Ya sea que prefieras opciones vegetarianas, veganas, sin gluten o platos tradicionales, nuestra amplia variedad de opciones de menú seguramente satisfará todos los paladares.</li>
                    </ul>
                </p>
                <p className="text-gray-500 text-sm poppins w-2/4 mx-3">
                    <ul className="list-disc">
                        <li><span className="font-bold">Ambiente acogedor y elegante:</span> Disfruta de una atmósfera cálida y acogedora en nuestro restaurante, diseñado para brindarte una experiencia memorable en un entorno elegante y relajante.</li>
                        <li><span className="font-bold">Ubicación conveniente:</span> Situado en un lugar de fácil acceso, nuestro restaurante es el destino perfecto para una comida deliciosa en cualquier momento del día.</li>
                    </ul>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow">
                        <img className="transform transition duration-700 hover:scale-125" src="/assets/nosotros/nosotros1.png" alt="Fast Delivery" />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img src="/assets/icons/Group 204.png" alt="Fast Delivery" className="w-36" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">Atención al cliente excepcional</h1>
                            <p className="text-sm text-gray-500 poppins">
                                Nuestro equipo está dedicado a proporcionar un servicio impecable y una atención personalizada a cada cliente, asegurando que tu visita sea inolvidable desde el momento en que entras por la puerta
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow">
                        <img
                            className="transform transition duration-700 hover:scale-125"
                            src="assets/nosotros/nosotros2.png"
                            alt="A Good Auto Responder"
                        />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img
                                src="/assets/icons/Group 1133.png"
                                alt="A Good Auto Responder"
                                className="w-36"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">
                                Experiencia culinaria excepcional
                            </h1>
                            <p className="text-sm text-gray-500 poppins">
                                Sumérgete en una experiencia gastronómica única con nuestra selección de platos cuidadosamente elaborados por chefs expertos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
                    <div className="overflow-hidden rounded-2xl flex flex-grow">
                        <img
                            className="transform transition duration-700 hover:scale-125"
                            src="assets/nosotros/nosotros3.png"
                            alt="Home Delivery"
                        />
                    </div>
                    <div className="flex mt-6 space-x-3 ">
                        <div>
                            <img
                                src="/assets/icons/Group 245.png"
                                alt="Home Delivery"
                                className="w-36"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-xl text-gray-800 poppins">Compromiso con la sostenibilidad</h1>
                            <p className="text-sm text-gray-500 poppins">
                                Nos preocupamos por el medio ambiente y nos esforzamos por operar de manera sostenible, utilizando prácticas respetuosas con el medio ambiente en todas nuestras operaciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Team() {
    return (
        <div className="py-4 lg:py-28 px-0">
            <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
                <div className="flex flex-wrap mt-0 -mx-[0.75] mb-12">
                    <div className="w-full lg:w-[41.67%] mx-auto text-center">
                        <h2 className="text-primary text-4xl mt-0 mb-2 font-medium leading-[1.2rem]">
                            Our Team
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap mt-0 mx-[0.75rem] text-sm leading-[28px] text-wychoose">
                    {/* <!-- Start Column 1 --> */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
                        <img
                            src="assets/person_1.jpg"
                            className="max-w-full h-auto mb-12 align-middle"
                        />
                        <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]">
                            <a href="#" className="text-primary underline">
                                <span className="">Lawson</span> Arnold
                            </a>
                        </h3>
                        <span className="block mb-6">CEO, Founder, Atty.</span>
                        <p className="mt-0 mb-0 lg:mb-4">
                            Separated they live in. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="mb-0 mt-0">
                            <a href="#" className="font-semibold underline text-primary">
                                Leer más <span className=""></span>
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 1 --> */}

                    {/* <!-- Start Column 2 --> */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
                        <img
                            src="assets/person_2.jpg"
                            className="max-w-full h-auto mb-12 align-middle"
                        />

                        <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]">
                            <a href="#" className="text-primary underline">
                                <span className="">Jeremy</span> Walker
                            </a>
                        </h3>
                        <span className="block mb-6">CEO, Founder, Atty.</span>
                        <p className="mt-0 mb-0 lg:mb-4">
                            Separated they live in. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="mb-0 mt-0">
                            <a href="#" className="font-semibold underline text-primary">
                                Learn More <span className=""></span>
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 2 --> */}

                    {/* <!-- Start Column 3 --> */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
                        <img
                            src="assets/person_3.jpg"
                            className="max-w-full h-auto mb-12 align-middle"
                        />
                        <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]">
                            <a href="#" className="text-primary underline">
                                <span className="">Patrik</span> White
                            </a>
                        </h3>
                        <span className="block mb-6">CEO, Founder, Atty.</span>
                        <p className="mt-0 mb-0 lg:mb-4">
                            Separated they live in. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="mb-0 mt-0">
                            <a href="#" className="font-semibold underline text-primary">
                                Learn More <span className=""></span>
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 3 --> */}

                    {/* <!-- Start Column 4 --> */}
                    <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
                        <img
                            src="assets/person_4.jpg"
                            className="max-w-full h-auto mb-12 align-middle"
                        />

                        <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]">
                            <a href="#" className="text-primary underline">
                                <span className="">Kathryn</span> Ryan
                            </a>
                        </h3>
                        <span className="block mb-6">CEO, Founder, Atty.</span>
                        <p className="mt-0 mb-0 lg:mb-4">
                            Separated they live in. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="mb-0 mt-0">
                            <a href="#" className="font-semibold underline text-primary">
                                Learn More <span className=""></span>
                            </a>
                        </p>
                    </div>
                    {/* <!-- End Column 4 --> */}
                </div>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="lg:pt-28 xs:pt-0 pr-0 pb-48 pl-0">
            <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
                <div className="flex flex-wrap mt-0 -mx-[0.75]">
                    <div className="w-[58.33%] mx-auto text-center">
                        <h2 className="text-primary text-[2rem] mt-0 mb-2 font-medium leading-tight">
                            Testimonials
                        </h2>
                    </div>
                </div>

                <div className="justify-center flex flex-wrap mt-0 -mx-[0.75]">
                    <div className="w-full">
                        <div className="relative text-center">
                            <div
                                id="testimonial-nav"
                                aria-label="Carousel Navigation"
                                className="xs:hidden lg:block absolute top-1/2 z-[99] w-full"
                            >
                                <span
                                    className="-left-[10px] cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary"
                                    data-controls="prev"
                                    aria-controls="tns1"
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </span>
                                <span
                                    className="right-0 cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary"
                                    data-controls="next"
                                    aria-controls="tns1"
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </span>
                            </div>

                            <div className="p-0" id="tns1-ow">
                                <div
                                    className="absolute lg:-bottom-[50px] bottom-0 left-1/2 -translate-x-1/2"
                                    aria-label="Carousel Pagination"
                                >
                                    <button
                                        data-nav="0"
                                        aria-controls="tns1"
                                        aria-label="Carousel Page 1 (Current Slide)"
                                        className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                                    ></button>
                                    <button
                                        data-nav="1"
                                        aria-controls="tns1"
                                        aria-label="Carousel Page 2"
                                        className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                                    ></button>
                                    <button
                                        data-nav="2"
                                        aria-controls="tns1"
                                        aria-label="Carousel Page 3"
                                        className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"
                                    ></button>
                                </div>

                                <div
                                    className="absolute -left-[10000em]"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    slide <span className="current">2</span> of 3
                                </div>
                                <div id="tns1-mw" className="overflow-hidden">
                                    <div className="pt-8" id="tns1-iw">
                                        <div
                                            className="tns-carousel whitespace-nowrap w-[500%] transition-products"
                                            id="tns1"
                                        >
                                            <div
                                                className="w-[20%] text-sm inline-block align-top whitespace-normal"
                                                aria-hidden="true"
                                            >
                                                <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                                                    <div className="lg:w-[66.67%] w-full mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-12 leading-8 lg:text-lg">
                                                                <p className="mt-0 mb-4">
                                                                    “Donec facilisis quam ut purus rutrum
                                                                    lobortis. Donec vitae odio quis nisl dapibus
                                                                    malesuada. Nullam ac aliquet velit. Aliquam
                                                                    vulputate velit imperdiet dolor tempor
                                                                    tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames
                                                                    ac turpis egestas. Integer convallis volutpat
                                                                    dui quis scelerisque.”
                                                                </p>
                                                            </blockquote>

                                                            <div className="author-info">
                                                                <div className="mb-5">
                                                                    <img
                                                                        src="assets/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className="h-auto max-w-[80px] rounded-[50%] mx-auto"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                                                    Maria Jones
                                                                </h3>
                                                                <span className="mb-4 block">
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="w-[20%] text-sm inline-block align-top whitespace-normal"
                                                aria-hidden="true"
                                            >
                                                <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                                                    <div className="lg:w-[66.67%] w-full mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-12 leading-8 xs:text-sm lg:text-lg">
                                                                <p className="mt-0 mb-4">
                                                                    “Donec facilisis quam ut purus rutrum
                                                                    lobortis. Donec vitae odio quis nisl dapibus
                                                                    malesuada. Nullam ac aliquet velit. Aliquam
                                                                    vulputate velit imperdiet dolor tempor
                                                                    tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames
                                                                    ac turpis egestas. Integer convallis volutpat
                                                                    dui quis scelerisque.”
                                                                </p>
                                                            </blockquote>

                                                            <div className="author-info">
                                                                <div className="mb-5">
                                                                    <img
                                                                        src="assets/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className="h-auto max-w-[80px] rounded-[50%] align-middle mx-auto"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                                                    Maria Jones
                                                                </h3>
                                                                <span className="mb-4 block">
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- END item --> */}

                                            <div
                                                className="w-[20%] text-sm inline-block align-top whitespace-normal"
                                                aria-hidden="true"
                                            >
                                                <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                                                    <div className="lg:w-[66.67%] w-full mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-12 leading-8 text-lg">
                                                                <p className="mt-0 mb-4">
                                                                    “Donec facilisis quam ut purus rutrum
                                                                    lobortis. Donec vitae odio quis nisl dapibus
                                                                    malesuada. Nullam ac aliquet velit. Aliquam
                                                                    vulputate velit imperdiet dolor tempor
                                                                    tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames
                                                                    ac turpis egestas. Integer convallis volutpat
                                                                    dui quis scelerisque.”
                                                                </p>
                                                            </blockquote>

                                                            <div className="author-info">
                                                                <div className="mb-5">
                                                                    <img
                                                                        src="assets/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                                                    Maria Jones
                                                                </h3>
                                                                <span className="mb-4 block">
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- END item --> */}

                                            <div
                                                className="w-[20%] text-sm inline-block align-top whitespace-normal"
                                                aria-hidden="true"
                                            >
                                                <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                                                    <div className="lg:w-[66.67%] w-full mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-12 leading-8 text-lg">
                                                                <p className="mt-0 mb-4">
                                                                    “Donec facilisis quam ut purus rutrum
                                                                    lobortis. Donec vitae odio quis nisl dapibus
                                                                    malesuada. Nullam ac aliquet velit. Aliquam
                                                                    vulputate velit imperdiet dolor tempor
                                                                    tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames
                                                                    ac turpis egestas. Integer convallis volutpat
                                                                    dui quis scelerisque.”
                                                                </p>
                                                            </blockquote>

                                                            <div className="author-info">
                                                                <div className="mb-5">
                                                                    <img
                                                                        src="assets/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                                                    Maria Jones
                                                                </h3>
                                                                <span className="mb-4 block">
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- END item --> */}

                                            <div
                                                className="w-[20%] text-sm inline-block align-top whitespace-normal"
                                                aria-hidden="true"
                                            >
                                                <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                                                    <div className="lg:w-[66.67%] w-full mx-auto">
                                                        <div className="testimonial-block text-center">
                                                            <blockquote className="mb-12 leading-8 text-lg">
                                                                <p className="mt-0 mb-4">
                                                                    “Donec facilisis quam ut purus rutrum
                                                                    lobortis. Donec vitae odio quis nisl dapibus
                                                                    malesuada. Nullam ac aliquet velit. Aliquam
                                                                    vulputate velit imperdiet dolor tempor
                                                                    tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames
                                                                    ac turpis egestas. Integer convallis volutpat
                                                                    dui quis scelerisque.”
                                                                </p>
                                                            </blockquote>

                                                            <div className="author-info">
                                                                <div className="mb-5">
                                                                    <img
                                                                        src="assets/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className="h-auto max-w-[80px] rounded-[50%] align-middle"
                                                                    />
                                                                </div>
                                                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">
                                                                    Maria Jones
                                                                </h3>
                                                                <span className="mb-4 block">
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function nosotros() {
    return (
        <>
            <Banner />

            <WhyChoose />

            {/* <Team />

            <Testimonials /> */}
        </>
    );
}
