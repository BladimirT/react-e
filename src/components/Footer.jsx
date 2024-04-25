import NewsletterSignUp from "./NewsletterSignUp";


export default function Footer() {
    return (
        <>
            <div className="grid md:grid-cols-4 gap-10 px-5 py-3 bg-white mt-2">
                <div>
                    <h3 className="text-xl font-bold">Sobre Nosotros</h3>
                    <p>Somos una plataforma líder en comercio electrónico comprometida a ofrecer la mejor experiencia de compra.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Contactanos</h3>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Servicio al cliente</h3>
                    <p>Para cualquier pregunta o reclamo, por favor, comuníquese con nuestro equipo de servicio al cliente.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Síguenos</h3>
                </div>
                <div className="px-5 py-3">
                    <NewsletterSignUp />
                </div>
            </div>
        </>
    )
}
