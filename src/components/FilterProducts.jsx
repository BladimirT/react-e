import useEcommerce from "../hook/useEcommerce";
import Brands from "./Brands";
import Categories from "./Categories";

export default function FilterProducts() {
    const { categorias, marcas, selectedCategories, selectedBrands, handleCategoryChange, handleBrandChange } = useEcommerce();

    return (
        <div className="md:w-72">
            <div>
                <h2 className="font-bold uppercase text-slate-500">categorías</h2>
                {categorias.map(categoria => (
                    <Categories
                        key={categoria.id}
                        categoria={categoria}
                        selected={selectedCategories.includes(categoria.id)}
                        onChange={handleCategoryChange}
                    />
                ))}
            </div>
            <div>
                <h2 className="font-bold uppercase text-slate-500">marcas</h2>
                {marcas.map(marca => (
                    <Brands
                        key={marca.id}
                        marca={marca}
                        selected={selectedBrands.includes(marca.id)}
                        onChange={handleBrandChange}
                    />
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
    );
}
