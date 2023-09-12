import './contact.css'

export default function Contact() {
    return (
        <main className='contacto'>
            <div>
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'>Eco Industrial está listo para colaborar con su organización y generar beneficios económicos reales a través de soluciones sostenibles y mantenimiento integral de sus instalaciones. ¡Contáctenos hoy mismo para comenzar a construir un futuro más eficiente y rentable!</p>
              <div className='div-button'>
                 <button className='whatsapp'>Whatsapp</button>
              </div>
              <form method="post" className='formulario'>
                 <label>
                     <h3 className='cont-contacto'>Nombre</h3>
                     <input type="text" name="nombre" />
                 </label>
                 <label>
                     <h3 className='cont-contacto'>E-Mail</h3>
                     <input type="email" name="email" />
                 </label>
                 <label>
                     <h3 className='cont-contacto'>Consulta</h3>
                     <textarea name="comentario"></textarea>
                 </label>
                 <input type="hidden" name="form-name" value="contacto" />
                 <button type="submit">Enviar</button>
              </form>
            </div>
        </main>
    )
}