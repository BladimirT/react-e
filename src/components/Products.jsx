import React, { useState, useEffect, useRef } from "react";
import { formatMoney } from "../helpers";

export default function Products({ producto }) {
    const { nombre, imagen, descripcion, precio, valoracion } = producto;
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(imgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="border shadow bg-white p-4 rounded-md">
            <img
                ref={imgRef}
                src={isVisible ? `/img/products/${imagen}.png` : ""}
                alt={`imagen ${nombre}`}
                className={`w-full bg-honeydew p-2 rounded-md ${isVisible ? "" : "opacity-0"}`}
                width="400"
                height="300"
            />

            <div className="mt-2">
                <div className="flex justify-between gap-2">
                    <h2 className="flex justify-between font-medium truncate">{nombre}</h2>
                    <p className="font-bold">{valoracion}⭐</p>
                </div>
                <p className="text-sm line-clamp-2 text-slate-500">{descripcion}</p>
                <p className="font-bold">{formatMoney(precio)}</p>
            </div>
        </div>
    );
}
