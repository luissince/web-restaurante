
interface TituloSeccionProps {
    className?: string
    texto: string
}

const TituloSeccion = ({ className, texto }: TituloSeccionProps) => {
    return (
        <h1 className={`text-4xl pb-10 font-bold ${className}`}>{texto}</h1>
    );
}


export {
    TituloSeccion
}