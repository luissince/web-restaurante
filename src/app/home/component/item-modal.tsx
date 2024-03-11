interface ItemModalProps {
    nombre: string;
    precio: string;
}

const ItemModal: React.FC<ItemModalProps> = ({ nombre, precio }) => {
    return (
        <li>
            <div className="flex justify-between items-center py-2 pr-1 rounded hover:bg-gray-100 dark:hover:bg-gray-100 hover:cursor-pointer">
                <div className="ms-2 text-sm">
                    <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-900">
                        <p>{nombre}</p>
                        <p id="helper-radio-text-4" className="text-sm font-normal text-gray-500 dark:text-gray-500">{precio}</p>
                    </label>
                </div>

                <div className="flex items-center h-5">
                    <input
                        id="helper-radio-4"
                        name="helper-radio"
                        type="radio"
                        value=""
                        className="w-5 h-5 text-[#de4202] bg-white border-2 border-gray-900 focus:ring-[#de4202] dark:focus:ring-[#de4202] focus:ring-2 dark:bg-white dark:border-gray-900" />
                </div>
            </div>
        </li>
    );
}

export default ItemModal;