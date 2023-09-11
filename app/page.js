import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>IMA Servicios</h1>
      <p>Bienvenidos a Eco Industrial, su aliado estratégico en Córdoba, Argentina, para la eficiencia energética, la economía circular y el mantenimiento integral de sus instalaciones.</p>
      <div>
        <h1>Nuestra Misión</h1>
        <p>En Eco Industrial, nuestro compromiso es claro: brindar soluciones integrales que le ayuden a optimizar costos y a generar beneficios económicos a través de la eficiencia energética y la gestión responsable de recursos, al tiempo que garantizamos que sus instalaciones se mantengan en las mejores condiciones operativas.</p>
      </div>
      <div>
        <h1>Servicios Destacados</h1>
        <p>•	Diagnóstico Energético y Ambiental: Nuestras auditorías minuciosas identifican oportunidades de mejora, traduciéndose en ahorros económicos reales.</p>
        <p>•	Eficiencia Energética: Implementamos soluciones que reducen sus costos de energía de manera significativa.</p>
        <p>•	Energías Renovables: Promovemos fuentes de energía sostenible para reducir su dependencia de la red eléctrica tradicional.</p>
        <p>•	Gestión Eficiente de Recursos: Nuestras prácticas de economía circular optimizan el uso de recursos y disminuyen costos de gestión de residuos.</p>
        <p>•	Concientización y Formación: Capacitamos a su personal para maximizar la eficiencia operativa y reducir gastos innecesarios.</p>
        <p>•	Monitoreo y Seguimiento: Establecemos sistemas de monitoreo en tiempo real para ajustes y mejoras continuas que se traducen en ahorros sostenibles.</p>
      </div>
      <div>
        <h1>Contribución a los Objetivos de Desarrollo Sostenible (ODS)</h1>
        <p>Nuestras soluciones no solo generan beneficios económicos, sino que también contribuyen activamente a los Objetivos de Desarrollo Sostenible, abordando desafíos globales como la reducción de emisiones de gases de efecto invernadero y el uso responsable de recursos naturales.</p>
      </div>
      <div>
        <h1>Clientes Satisfechos</h1>
        <p>Entre nuestros clientes actuales se encuentran instituciones destacadas en Córdoba, Argentina, como el Banco de Córdoba, la Asociación Gremial La Bancaria, la Universidad Blas Pascal y La Cantera. Estas organizaciones confían en los servicios integrales de Eco Industrial para optimizar su eficiencia energética, reducir costos operativos y maximizar los beneficios económicos de sus operaciones.</p>
      </div>
      <li className='boton-contactenos'>
        <Link className='texto-contactenos' href='/contacto'>Contacto</Link>
      </li>
    </div>
  )
}
