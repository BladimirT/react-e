import { formatMoney } from "../helpers"

export default function Products({ producto }) {

    const { nombre, imagen, descripcion, precio, valoracion } = producto
    return (
        <div className="border shadow bg-white p-4 rounded-md">

            <img
                src={`/img/products/${imagen}.png`}
                alt="imagen ${nombre}"
                className="w-full bg-honeydew p-2 rounded-md"
                loading="lazy"
            />

            <div className="mt-2">
                <div className="flex justify-between gap-2">
                    <h2 className="flex justify-between font-medium truncate">{nombre}</h2>
                    <p className="font-bold">{valoracion}⭐</p>
                </div>
                <p className="text-sm line-clamp-2 text-slate-500">{descripcion}</p>
                <p className="font-bold">{formatMoney(precio)}</p>
            </div>

        </div>
    )
}
