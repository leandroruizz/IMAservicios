import './Form.css'

function Form() {
  return (
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
  )
}

export default Form