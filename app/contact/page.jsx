import './contact.css'
import Whatsapp from '@/components/Whatsapp'
import Form from '@/components/Form'

export default function Contact() {
    return (
        <main className='contacto'>
            <div>
              <h1 className='titulo-contacto'>Contáctenos</h1>
              <p className='texto-contacto'>Eco Industrial está listo para colaborar con su organización y generar beneficios económicos reales a través de soluciones sostenibles y mantenimiento integral de sus instalaciones. ¡Contáctenos hoy mismo para comenzar a construir un futuro más eficiente y rentable!</p>
              <Whatsapp/>
              <Form/>
            </div>
        </main>
    )
}