function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-locales bg-cover pt-[98px] lg:pr-0 x:pb-36 lg:pb-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[50%] w-full px-3">
                        <div className="relative max-w-xl z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">
                                Nuestros <span className="d-block" > Locales</span>
                            </h1>
                            <div className="bg-black bg-opacity-60 rounded-2xl px-3 py-3 mb-10" >
                                <p className="text-paragraph text-md  leading-6 text-white ">
                                    Descubre nuestros acogedores locales y sumérgete en una atmósfera única donde la comida y la cultura se fusionan. Desde nuestro encantador local en el corazón de la ciudad hasta
                                    nuestras sedes más pintorescas en los barrios más auténticos, cada lugar está diseñado para ofrecerte una experiencia gastronómica inolvidable. ¡Ven y únete a nosotros en
                                    cualquiera de nuestros locales para disfrutar de la mejor comida criolla en un ambiente inigualable!
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
                    </div>
                </div>
            </div>
        </div>
        // <!-- End Hero Section -->
    );
}

function Locales() {
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div className="mx-auto py-5 justify-center text-center">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-0">Ubícanos en:</h2>
            </div>

            <div className="container">
                <div className="flex row justify-content-center mt-6 ">
                    <div className="w-1/3 mb-4 mx-3">
                        <div className="h-100 border justify-content-between d-flex flex-column rounded">
                            <img className="my-4 img-fluid" src="../assets/img/illustration/digital-02.svg" alt="" />
                            <h5 className="py-3 mb-0 bg-light text-xl text-center font-bold">Calle Las Magnolias</h5>
                            <div className="mx-6 my-4">
                                <div className="my-2"><i className="bi bi-telephone-fill"></i> +51 123 456 789</div>
                                <div className="my-2"><i className="bi bi-geo-alt-fill"></i> Av. las magnolias crd 1 calle 1</div>
                                <div className="my-2"><i className="bi bi-calendar-check-fill"></i> Horario: L - D: 10am - 9pm</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 mb-4 mx-3">
                        <div className="h-100 border justify-content-between d-flex flex-column rounded">
                            <img className="my-4 img-fluid" src="../assets/img/illustration/digital-03.svg" alt="" />
                            <h5 className="py-3 mb-0 bg-light text-xl text-center font-bold">Calle Los Girasoles</h5>
                            <div className="mx-6 my-4">
                                <div className="my-2"><i className="bi bi-telephone-fill my-2"></i> +51 123 456 789</div>
                                <div className="my-2"><i className="bi bi-geo-alt-fill my-2"></i> Av. las pradas crd 1 calle 2</div>
                                <div className="my-2"><i className="bi bi-calendar-check-fill my-2"></i> Horario: L - D: 10am - 9pm</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 mb-4 mx-3">
                        <div className="h-100 border justify-content-between d-flex flex-column rounded">
                            <img className="my-4 img-fluid" src="../assets/img/illustration/digital-04.svg" alt="" />
                            <h5 className="py-3 mb-0 bg-light text-xl text-center font-bold">Calle Nuevo Progreso</h5>
                            <div className="mx-6 my-4">
                                <div className="my-2"><i className="bi bi-telephone-fill my-2"></i> +51 123 456 789</div>
                                <div className="my-2"><i className="bi bi-geo-alt-fill my-2"></i> Av. avanza pais crd 1 calle 1</div>
                                <div className="my-2"><i className="bi bi-calendar-check-fill my-2"></i> Horario: L - D: 10am - 9pm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

function Map(){
    return(
        <div className="w-full mt-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62430.840702775175!2d-75.2439245609092!3d-12.04850626350275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964104fb82f1%3A0xf8e45b61c55982fa!2sHuancayo!5e0!3m2!1ses-419!2spe!4v1709396067981!5m2!1ses-419!2spe" width="100%" height="600" style={{"border":"0"}}  loading="lazy"></iframe>
        </div>
    );
}

export default function locales() {
    return (
        <>
            <Banner />

            <Locales />

            <Map />
        </>
    );
}