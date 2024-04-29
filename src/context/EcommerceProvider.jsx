import React, { createContext, useEffect, useState } from "react";
import { marcas as marcasDB } from "../data/marcas";
import clientAxios from "../config/axios";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [marcas] = useState(marcasDB);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await clientAxios('/api/categorias');
                setCategorias(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        getCategories();
    }, []);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(categoryId)) {
                return prevCategories.filter((id) => id !== categoryId);
            } else {
                return [...prevCategories, categoryId];
            }
        });
    };

    const handleBrandChange = (brandId) => {
        setSelectedBrands((prevBrands) => {
            if (prevBrands.includes(brandId)) {
                return prevBrands.filter((id) => id !== brandId);
            } else {
                return [...prevBrands, brandId];
            }
        });
    };

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
        >
            {children}
        </EcommerceContext.Provider>
    );
};

export { EcommerceProvider };
export default EcommerceContext;
