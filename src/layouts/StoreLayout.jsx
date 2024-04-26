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
        <div className="flex flex-col md:flex-row  gap-4 p-3">
            <aside className="">
                <FilterProducts />
            </aside>
            <main className="grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-screen overflow-y-scroll">
                {filteredProducts.map(producto => (
                    <Products key={producto.id} producto={producto} />
                ))}
            </main>
        </div>
    )
}
