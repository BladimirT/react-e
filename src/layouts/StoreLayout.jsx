import { productos } from '../data/productos';
import FilterProducts from "../components/FilterProducts";
import Products from "../components/Products";
import useEcommerce from '../hook/useEcommerce';
import React, { useMemo } from 'react';

export default function StoreLayout() {
    const { selectedCategories, selectedBrands } = useEcommerce();

    const filteredProducts = useMemo(() => {
        return productos.filter((producto) => {
            if (
                selectedCategories.length > 0 &&
                !selectedCategories.includes(producto.categoria_id)
            ) {
                return false;
            }

            if (
                selectedBrands.length > 0 &&
                !selectedBrands.includes(producto.marca_id)
            ) {
                return false;
            }

            return true;
        });
    }, [productos, selectedCategories, selectedBrands]);

    return (
        <div className="md:flex gap-4 p-3">
            <aside className="bg-white p-3 rounded-md">
                <FilterProducts />
            </aside>
            <main className="grid grid-cols-1 md:grid-cols-4 gap-3 h-screen overflow-y-scroll ">
                {filteredProducts.map(producto => (
                    <Products key={producto.id} producto={producto} />
                ))}
            </main>
        </div>
    )
}
