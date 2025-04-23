
export const Header = ({nombre,apellido}) => {

    return (
        <>
        <div className="text-center">
            <h1>Portfolio de {nombre} {apellido}</h1>
            <hr />
        </div>
        </>
    )
}