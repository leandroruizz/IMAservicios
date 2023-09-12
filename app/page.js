import Link from "next/link"
import styles from './page.module.css'

export default function Page () {
  return (
    
    <main className={styles.main}>
      <img className={styles.ico} src="./favicon.ico"/>
      <h1 className={styles.titulo}>IMA Servicios</h1>
      <p className={styles.texto}>Bienvenidos a Eco Industrial, su aliado estratégico en Córdoba, Argentina, para la eficiencia energética, la economía circular y el mantenimiento integral de sus instalaciones.</p>
      <div>
        <h1 className={styles.titulo}>Nuestra Misión</h1>
        <p className={styles.texto}>En Eco Industrial, nuestro compromiso es claro: brindar soluciones integrales que le ayuden a optimizar costos y a generar beneficios económicos a través de la eficiencia energética y la gestión responsable de recursos, al tiempo que garantizamos que sus instalaciones se mantengan en las mejores condiciones operativas.</p>
      </div>
      <div>
        <h1 className={styles.titulo}> Servicios Destacados </h1>
        <p className={styles.servicioslista}> Diagnóstico Energético y Ambiental: Nuestras auditorías minuciosas identifican oportunidades de mejora, traduciéndose en ahorros económicos reales.</p>
        <p className={styles.servicioslista}> Eficiencia Energética: Implementamos soluciones que reducen sus costos de energía de manera significativa.</p>
        <p className={styles.servicioslista}> Energías Renovables: Promovemos fuentes de energía sostenible para reducir su dependencia de la red eléctrica tradicional.</p>
        <p className={styles.servicioslista}> Gestión Eficiente de Recursos: Nuestras prácticas de economía circular optimizan el uso de recursos y disminuyen costos de gestión de residuos.</p>
        <p className={styles.servicioslista}> Concientización y Formación: Capacitamos a su personal para maximizar la eficiencia operativa y reducir gastos innecesarios.</p>
        <p className={styles.servicioslista}> Monitoreo y Seguimiento: Establecemos sistemas de monitoreo en tiempo real para ajustes y mejoras continuas que se traducen en ahorros sostenibles.</p>
      </div>
      <div>
        <h1 className={styles.titulo}>Contribución a los Objetivos de Desarrollo Sostenible (ODS)</h1>
        <p className={styles.texto}>Nuestras soluciones no solo generan beneficios económicos, sino que también contribuyen activamente a los Objetivos de Desarrollo Sostenible, abordando desafíos globales como la reducción de emisiones de gases de efecto invernadero y el uso responsable de recursos naturales.</p>
      </div>
      <div>
        <h1 className={styles.titulo}>Clientes Satisfechos</h1>
        <p className={styles.texto}>Entre nuestros clientes actuales se encuentran instituciones destacadas en Córdoba, Argentina, como el Banco de Córdoba, la Asociación Gremial La Bancaria, la Universidad Blas Pascal y La Cantera. Estas organizaciones confían en los servicios integrales de Eco Industrial para optimizar su eficiencia energética, reducir costos operativos y maximizar los beneficios económicos de sus operaciones.</p>
        <div className={styles.contclientes}>
          <img className={styles.imgclientes} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/BANCOR.png"/>
          <img className={styles.imgclientes} src="https://www.ele-ve.com.ar/IMG/arton89713.jpg"/>
          <img className={styles.imgclientes} src="https://www.ubp.edu.ar/wp-content/uploads/siv/logos/archivos/UBP_H_D_1.png"/>
        </div>
      </div>
      <li className={styles.botoncontactenos}>
        <Link className={styles.textocontactenos} href='/contact'>Contáctenos</Link>
      </li>
    </main>
  )
}
