import useEcommerce from "../hook/useEcommerce";
import Accordion from "../components/Accordion"
import Brands from "./Brands";
import Categories from "./Categories";

export default function FilterProducts() {
    const { categorias, marcas, selectedCategories, selectedBrands, handleCategoryChange, handleBrandChange } = useEcommerce();

    return (
        <div className="md:w-72 bg-white">
            <Accordion
                items={[
                    {
                        title: "Categorías",
                        content: categorias.map(categoria => (
                            <Categories
                                key={categoria.id}
                                categoria={categoria}
                                selected={selectedCategories.includes(categoria.id)}
                                onChange={handleCategoryChange}
                            />
                        ))
                    },
                    {
                        title: "Marcas",
                        content: marcas.map(marca => (
                            <Brands
                                key={marca.id}
                                marca={marca}
                                selected={selectedBrands.includes(marca.id)}
                                onChange={handleBrandChange}
                            />
                        ))
                    },
                ]}
            />
        </div>
    );
}
