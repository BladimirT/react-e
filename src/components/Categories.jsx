import useEcommerce from "../hook/useEcommerce"

export default function Categories({ categoria }) {

    const { handleClickCategorias, categoriaActual } = useEcommerce()
    const { icono, id, nombre } = categoria

    return (
        <div className="flex items-center gap-4 w-full">

            <img
                src={`/img/categories/icono_${icono}.svg`}
                alt="Imagen Icono"
                className="w-10"
            />

            <button
                className="truncate"
                type="button"
                onClick={() => handleClickCategorias(id)}
            >
                {nombre}
            </button>
        </div>
    )
}
