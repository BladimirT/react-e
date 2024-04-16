import NavAuth from "../components/NavAuth";

export default function Login() {
    return (
        <>

            <NavAuth />

            <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10">
                <h1 className="text-rich_black text-3xl font-bold mb-2 text-center">Iniciar Sesión</h1>
                <p className="text-oxford_blue mb-4 text-center">Inicia sesión en tu cuenta y disfruta los beneficios</p>

                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="text-rich_black" htmlFor="email">Correo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 w-full p-3 bg-honeydew rounded-md focus:outline-none focus:ring-2 focus:ring-yale_blue"
                            placeholder="Tu correo electrónico"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-rich_black" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-2 w-full p-3 bg-honeydew rounded-md focus:outline-none focus:ring-2 focus:ring-yale_blue"
                            placeholder="Tu contraseña"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-yale_blue text-white py-3 px-6 rounded-md hover:bg-oxford_blue transition duration-300 w-full uppercase font-bold"
                    >
                        Crear Cuenta
                    </button>
                </form>
            </div>
        </>
    )
}
