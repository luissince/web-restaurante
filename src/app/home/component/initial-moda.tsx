import Image from "next/image";
import { CustomModalForm } from "@/components/modal/modal";
import ItemModal from "./item-modal";

interface InitialModalProps {
    modalRef: any;
    isOpen: boolean;
    onOpen: () => void;
    closeModal: () => void;
    saveModal: () => void;
    onHidden: () => void;
    cantidad: number;
    setModalPlus: () => void;
    setModalDash: () => void;
}

const InitialModal: React.FC<InitialModalProps> = ({ modalRef, isOpen, onOpen, closeModal, onHidden, saveModal, cantidad, setModalPlus, setModalDash }) => {
    return (
        <CustomModalForm
            contentRef={modalRef}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={closeModal}
            onHidden={onHidden}
            contentLabel={""}
            titleHeader={""}
            onSubmit={saveModal}
            body={
                <div className="flex-1 flex w-full h-full">
                    <div className="hidden md:block flex-1 w-1/2">
                        <div className="h-full relative">
                            <Image
                                width={600}
                                height={600}
                                className="w-full h-full object-contain"
                                src="https://tofuu.getjusto.com/orioneat-prod-resized/z28AKtxPAMdcZyb9m-1200-1200.webp"
                                alt="Salchipapa Nación + chicha"
                                title="Salchipapa Nación + chicha"
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex flex-1 flex-col">
                        <div className="h-full overflow-auto">
                            <div className="h-full">
                                <div className="p-4 pb-0 flex-1">
                                    <h2 className="text-xl mb-1 text-grey-darkest">Nombre del producto</h2>
                                    <div className="text-xs flex items-center mb-4 ">
                                        <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                                        descripción
                                    </div>

                                    <span className="text-4xl text-grey-darkest ">S/63.00<span className="text-lg"> PEN</span></span>
                                </div>

                                <div className="border-b mt-3"></div>

                                <div className="flex px-4 items-center justify-between mt-4">
                                    <div className="pr-2 text-base">
                                        <i className="fas fa-wifi text-green"></i> Agregamos un postre tradicional?
                                    </div>
                                    <div className="px-2 text-xs bg-gray-200 text-gray-900 rounded">
                                        <i className="text-grey-darker far fa-building"></i> Opcional
                                    </div>
                                </div>

                                <div className="">
                                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">

                                        <ItemModal nombre={"Arroz con leche 250ml"} precio={"S/ 7.00"} />
                                        <ItemModal nombre={"Mazamorra morada 250ml"} precio={"S/ 7.00"} />
                                        <ItemModal nombre={"Arroz zambito 250ml"} precio={"S/ 7.00"} />
                                        <ItemModal nombre={"Combinado 250ml"} precio={"S/ 7.00"} />
                                        <ItemModal nombre={"Picarones x 4"} precio={"S/ 7.00"} />

                                    </ul>
                                </div>

                                <div className="border-b mt-3"></div>

                                <div className="flex px-4 items-center justify-between mt-4">
                                    <div className="pr-2 text-base">
                                        <i className="fas fa-wifi text-green"></i> Estamos colaborando con el medio ambiente, deseas curbiertos?
                                    </div>
                                    <div className="px-2 text-xs bg-gray-200 text-gray-900 rounded">
                                        <i className="text-grey-darker far fa-building"></i> Opcional
                                    </div>
                                </div>

                                <div className="">
                                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">

                                        <ItemModal nombre={"Sí, deseo cubiertos"} precio={""} />
                                        <ItemModal nombre={"No, deseo ayudar con el medio ambiente"} precio={""} />

                                    </ul>
                                </div>

                                <div className="border-b mt-3"></div>

                                <div className="flex px-4 items-center justify-between mt-4">
                                    <div className="pr-2 text-base">
                                        <i className="fas fa-wifi text-green"></i> Instrucciones especiales
                                    </div>
                                </div>

                                <div className="flex px-4 py-4">
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            footer={
                <div className="flex space-x-3">
                    <div className="flex items-center">
                        <button
                            className="bg-black px-3 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold  rounded-full transition duration-300 ease-in-out"
                            type="button"
                            // ref={modalRefPlus}
                            onClick={setModalPlus}>
                            <i className="bi bi-plus"></i>
                        </button>
                        <p className="px-4">{cantidad}</p>
                        <button
                            className="bg-black px-3 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold  rounded-full transition duration-300 ease-in-out"
                            type="button"
                            onClick={setModalDash}>
                            <i className="bi bi-dash"></i>
                        </button>
                    </div>

                    <button className="flex bg-[#de4202] p-3 rounded space-x-10" type="submit"   >
                        <div className="text-white">
                            <i className="bi bi-cart-plus"></i> Agregar
                        </div>
                        <div>
                            <span className="text-white">S/ 9.90</span>
                        </div>
                    </button>
                </div>
            }
        />
    );
}

export default InitialModal;