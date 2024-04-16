

export default function NewsletterSignUp() {
    return (
        <div>
            <h4 className='text-xl font-bold'>Suscribete</h4>
            <form className='flex flex-col md:flex-row md:items-center'>
                <label htmlFor='email' className='mr-2'>
                    Correo Electrónico
                </label>
                <input
                    type='email'
                    id='email'
                    placeholder='Ingresa tu correo electrónico'
                    className='bg-honeydew focus:ring-yale_blue p-3 md:w-80 mb-2 md:mb-0 md:mr-2'
                />
                <input
                    type='submit'
                    value='Suscribirse'
                    className='bg-yale_blue hover:bg-oxford_blue text-white p-3 uppercase font-bold cursor-pointer rounded-md md:w-40'
                />
            </form>
        </div>
    );
}
