export default function Brands({ marca }) {

    const {id, nombre} = marca
    return (
        <div>
            <p>{nombre}</p>
        </div>
    )
}
