import { formatMoney } from "../helpers"

export default function Products({ producto }) {

    const { nombre, imagen, descripcion, precio, valoracion } = producto
    return (
        <div className="border shadow bg-white p-4 rounded-md">

            <img
                src={`/img/products/${imagen}.png`}
                alt="imagen ${nombre}"
                className="w-full bg-honeydew p-2 rounded-md"
            />

            <div className="mt-2">
                <h2 className="font-bold flex justify-between">{nombre} <span>{valoracion}⭐</span></h2>
                <p className="text-sm line-clamp-2">{descripcion}</p>
                <p className="font-bold">{formatMoney(precio)}</p>
            </div>

        </div>
    )
}
