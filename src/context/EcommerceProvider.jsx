import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"
import { marcas as marcasDB } from "../data/marcas"

const EcommerceContext = createContext()

const EcommerceProvider = ({ children }) => {
    const [categorias, setCategorias] = useState(categoriasDB)
    const [marcas] = useState(marcasDB)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([])

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(categoryId)) {
                return prevCategories.filter((id) => id !== categoryId);
            } else {
                return [...prevCategories, categoryId];
            }
        });
    }

    const handleBrandChange = (brandId) => {
        setSelectedBrands((prevBrands) => {
            if (prevBrands.includes(brandId)) {
                return prevBrands.filter((id) => id !== brandId);
            } else {
                return [...prevBrands, brandId];
            }
        });
    }

    return (
        <EcommerceContext.Provider
            value={{
                categorias,
                marcas,
                selectedCategories,
                selectedBrands,
                handleCategoryChange,
                handleBrandChange
            }}
        >{children}</EcommerceContext.Provider>
    )
}

export {
    EcommerceProvider
}

export default EcommerceContext