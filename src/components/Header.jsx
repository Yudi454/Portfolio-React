
export const Header = ({nombre,apellido}) => {

    return (
        <>
        <div className="Header text-center">
            <h1>Portfolio de {nombre} {apellido}</h1>
        </div>
            <hr />
        </>
    )
}