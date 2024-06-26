import LazyLoad from "react-lazy-load";

export default function Categories({ categoria, selected, onChange }) {
    const { icon, id, name } = categoria;

    return (
        <div key={id} className="flex gap-1">
            <input
                type="checkbox"
                id={`categoria-${id}`}
                checked={selected}
                onChange={() => onChange(id)}
                className="m-2 hover:cursor-pointer"
            />
            <label htmlFor={`categoria-${id}`} className="hover:cursor-pointer hover:text-blue-500">
                <div className="flex items-center gap-4 w-full">
                    <LazyLoad>
                        <img
                            src={`/img/categories/icono_${icon}.svg`}
                            alt={`Icono de ${name}`}
                            className="w-6 h-6"
                        />
                    </LazyLoad>
                    <p>{name}</p>
                </div>
            </label>
        </div>
    );
}
