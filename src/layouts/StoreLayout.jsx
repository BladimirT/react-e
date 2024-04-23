import { productos as data, productos } from '../data/productos'
import FilterProducts from "../components/FilterProducts";
import Products from "../components/Products";
import useEcommerce from '../hook/useEcommerce';

export default function StoreLayout() {
    const { selectedCategories, selectedBrands } = useEcommerce();

    // Función para filtrar los productos
    const filteredProducts = productos.filter((producto) => {
        // Filtrar por categorías
        if (
            selectedCategories.length > 0 &&
            !selectedCategories.includes(producto.categoria_id)
        ) {
            return false;
        }

        // Filtrar por marcas
        if (
            selectedBrands.length > 0 &&
            !selectedBrands.includes(producto.marca_id)
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="md:flex gap-2">
                <FilterProducts />
                <main className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 h-screen overflow-y-scroll ">
                    {filteredProducts.map(producto => (
                        <Products key={producto.id} producto={producto} />
                    ))}
                </main>
            </div>
        </>
    )
}