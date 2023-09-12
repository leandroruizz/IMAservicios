import './contact.css'
import Link from 'next/link'

export default function Contact() {
    return (
        <main className='contacto'>
            <div>
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'>Eco Industrial está listo para colaborar con su organización y generar beneficios económicos reales a través de soluciones sostenibles y mantenimiento integral de sus instalaciones. ¡Contáctenos hoy mismo para comenzar a construir un futuro más eficiente y rentable!</p>
              <div className='div-button'>
                 <Link className='whatsapp' href='https://api.whatsapp.com/send?phone=543512330090' target='_blank'>Whatsapp</Link>
              </div>
              <form action="https://formsubmit.co/leandrolmedo2000@gmail.com" method="post" className='formulario'>
                 <label>
                     <h3 className='cont-contacto'>Nombre</h3>
                     <input type="nombre" name="nombre" required="true" />
                 </label>
                 <label>
                     <h3 className='cont-contacto'>E-Mail</h3>
                     <input type="email" name="email" required="true" />
                 </label>
                 <label>
                     <h3 className='cont-contacto'>Mensaje</h3>
                     <textarea className='textarea' name="mensaje" required="true"></textarea>
                 </label>
                 <button className='boton-enviar'type="submit">Enviar</button>
                 <input type="hidden" name="_next" value="http://localhost:3000/" />
              </form>
            </div>
        </main>
    )
}