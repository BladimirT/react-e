import useEcommerce from "../hook/useEcommerce"
import Brands from "./Brands"
import Categories from "./Categories"

export default function FilterProducts() {

    const { categorias, marcas, selectedCategories, selectedBrands, handleCategoryChange, handleBrandChange } = useEcommerce()

    return (
        <div className="md:w-72">
            <div>
                <h2 className="font-bold uppercase text-slate-500">categorías</h2>
                {categorias.map(categoria => (
                    <div key={categoria.id} className="flex gap-1">
                        <input
                            type="checkbox"
                            id={`categoria-${categoria.id}`}
                            checked={selectedCategories.includes(categoria.id)}
                            onChange={() => handleCategoryChange(categoria.id)}
                        />
                        <label htmlFor={`categoria-${categoria.id}`}>
                            <Categories categoria={categoria} />
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="font-bold uppercase text-slate-500">marcas</h2>
                {marcas.map(marca => (
                    <div key={marca.id} className="flex gap-2">
                        <input
                            type="checkbox"
                            id={`marca-${marca.id}`}
                            checked={selectedBrands.includes(marca.id)}
                            onChange={() => handleBrandChange(marca.id)}
                        />
                        <label htmlFor={`marca-${marca.id}`}>
                            <Brands marca={marca} />
                        </label>
                    </div>
                ))}
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
    )
}
