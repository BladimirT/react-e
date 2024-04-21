import { productos as data, productos } from '../data/productos'
import FilterProducts from "../components/FilterProducts";
import Products from "../components/Products";
import useEcommerce from '../hook/useEcommerce';

export default function StoreLayout() {

    const { categoriaActual } = useEcommerce()

    const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

    return (
        <>

            <div className="md:flex gap-2">

                <FilterProducts />

                <main className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4  h-screen overflow-y-scroll ">
                    <h1>{categoriaActual.nombre}</h1>
                    {productos.map(producto => (
                        <Products key={producto.id} producto={producto} />
                    ))}
                </main>
            </div>

        </>
    )
}