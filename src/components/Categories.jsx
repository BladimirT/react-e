

export default function Categories({ categoria }) {

    const { icono, id, nombre } = categoria

    return (
        <div className="flex items-center gap-4 w-full">

            <img
                src={`/img/categories/icono_${icono}.svg`}
                alt="Imagen Icono"
                className="w-10"
            />

            <p className="md:truncate">{nombre}</p>
        </div>
    )
}
