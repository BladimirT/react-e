import { Link } from "react-router-dom";

export default function NavAuth() {
    return (
        <nav className="bg-white shadow-md rounded-md p-2 flex justify-around">
            <Link to="/auth/login">Iniciar Sesión</Link>
            <Link to="/auth/sign-up">Registrarse</Link>
        </nav>
    )
}
