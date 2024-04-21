import { formatMoney } from "../helpers"
import Icon from "./Icon"

export default function Products({ producto }) {

    const { id, nombre, imagen, valoracion, descripcion, precio } = producto

    return (
        <>
            <div className="flex flex-col justify-between gap-2 p-6 bg-white shadow h-full rounded-lg">

                <div className="bg-honeydew rounded-lg">
                    <img
                        src={`/img/products/${imagen}.png`}
                        alt="Imagen producto"
                        className="w-full h-48 object-cover p-3"
                    />
                </div>
                <div className="flex justify-between gap-2">
                    <h2 className="truncate">{nombre}</h2>
                    <p className="font-bold text-amber-500">{valoracion}⭐</p>
                </div>
                <div>
                    <p className="text-slate-500 text-sm line-clamp-2">{descripcion}</p>
                    <p className="font-bold">{formatMoney(precio)}</p>
                </div>

                {/** Botones llamado a la acción */}
                <div className="flex justify-end gap-2">
                    <button
                        className="button"
                    >
                        <Icon type="cart" />
                    </button>
                    <button
                        className="button"
                    >
                        <Icon type="heart" />
                    </button>
                    <button
                        className="button"
                    >
                        <Icon type="view" />
                    </button>
                </div>
            </div>
        </>
    )
}