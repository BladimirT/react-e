import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"

const EcommerceContext = createContext()

const EcommerceProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const handleClickCategorias = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    return (
        <EcommerceContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategorias
            }}
        >{children}</EcommerceContext.Provider>
    )
}

export {
    EcommerceProvider
}

export default EcommerceContext
