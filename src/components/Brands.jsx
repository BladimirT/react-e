export default function Brands({ marca, selected, onChange }) {
    const { id, nombre } = marca;

    return (
        <div key={id} className="flex gap-2">
            <input
                type="checkbox"
                id={`marca-${id}`}
                checked={selected}
                onChange={() => onChange(id)}
                className="m-2 hover:cursor-pointer"
            />
            <label htmlFor={`marca-${id}`} className="hover:cursor-pointer hover:text-blue-500">
                <div className="flex items-center gap-4 w-full">
                    <p className="capitalize">{nombre}</p>
                </div>
            </label>
        </div>
    );
}