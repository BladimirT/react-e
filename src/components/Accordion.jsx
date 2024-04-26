import { useState } from "react";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                className={`w-full py-2 px-4 flex justify-between items-center text-left focus:outline-none font-bold uppercase`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

// Componente de acordeón principal
const Accordion = ({ items }) => {
    return (
        <div className="border rounded-lg overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;