import useEcommerce from "../hook/useEcommerce"
import Categories from "./Categories"

export default function FilterProducts() {

    const {categorias} = useEcommerce()

    return (
        <aside className="md:w-72 p-4">
            <div className="rounded-md p-2 bg-white">
                <div>
                    <h2 className="font-bold uppercase text-slate-500">categorías</h2>
                    {categorias.map(categoria => (
                        <div  key={categoria.id} className="flex gap-1">
                            <input type="checkbox" />
                            <label>
                                <Categories categoria={categoria} />
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="font-bold uppercase text-slate-500">marcas</h2>
                </div>
                <div>
                    <h2 className="font-bold uppercase text-slate-500">precio</h2>
                </div>
                <div>
                    <h2 className="font-bold uppercase text-slate-500">descuento</h2>
                </div>
                <div>
                    <h2 className="font-bold uppercase text-slate-500">otros</h2>
                </div>
            </div>
        </aside>
    )
}
