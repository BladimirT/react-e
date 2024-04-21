import { useState } from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Header mobile */}
            <div className="md:hidden flex justify-between p-3 sticky top-0 left-0 border-b-2 bg-white z-10">

                <div>
                    <p className="uppercase font-bold text-xl">Logo</p>
                </div>

                <div className='flex gap-3'>
                    <Icon type="cart" />
                    <button onClick={toggleMenu} aria-label="Abrir Menú">
                        <Icon type="menu" />
                    </button>
                </div>

            </div>

            {/* Menu */}
            <div className={`fixed flex flex-col bg-white inset-0 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="flex justify-between items-center p-3 border-b">
                    <p className="uppercase font-bold text-xl">Logo</p>
                    <button onClick={closeMenu} aria-label="Cerrar Menú">
                        <Icon type="close" />
                    </button>
                </div>

                <div className="divide-y-2">

                    <div className="flex justify-between p-3">
                        <Link to="/auth/login">
                            Iniciar Sesión
                        </Link>
                        <Link to="/auth/registro">
                            Registrarse
                        </Link>
                    </div>

                    <div className="p-3 flex flex-col gap-5">
                        <Link to="/store">Tienda</Link>
                    </div>

                    <div className="p-3 flex flex-col gap-5">
                        <div className="flex gap-3">
                            <Icon type="discount" className="" />Ofertas
                        </div>
                        <div className="flex gap-3">
                            <Icon type="tag" className="" />Lo mas nuevo
                        </div>
                        <div className="flex gap-3">
                            <Icon type="box" className="" />Mis Pedidos
                        </div>
                    </div>

                    <div className="p-3 flex flex-col gap-3">
                        <div className="flex gap-3">
                            <Icon type="help" className="" />Ayuda
                        </div>
                        <div className="flex gap-3">
                            <Icon type="pin" className="" />Ubicaciones y Horarios
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra de navegación dispositivos md: */}
            <div className="hidden md:flex justify-between p-4 font-bold sm:hidden lg:flex border-b-2 sticky top-0 left-0 bg-neutral-50 z-10">
                <div className="flex gap-4 uppercase">
                    <p className='font-bold'>Logo</p>
                    <Link to="/store">Tienda</Link>
                </div>

                <div className="flex gap-3">
                    <Link to="">
                        <Icon type="cart" className="cursor-pointer" />
                    </Link>
                    <Link to="/auth/login">
                        <Icon type="user" className="cursor-pointer" />
                    </Link>
                    <Link to="">
                        <Icon type="moon" className="cursor-pointer" />
                    </Link>
                </div>

            </div>
        </>
    );
}
