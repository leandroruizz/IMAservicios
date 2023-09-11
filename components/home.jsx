import React from 'react'
import './page.css'
import Link from 'next/link'


function HomePage() {
  return (
    <><div className='home'>
      <h1 className='nosotros'>Productos Nuevos</h1>
      <Link href='/catalog'><img className='producto-nuevo' src="images/pica darth.jpg"/></Link>
      <h2 className='texto-producto-nuevo'>Picador Darth Vader (Star Wars)</h2>
    </div><div>
        <h1 className='nosotros'>¿QUIENES SOMOS?</h1>
        <p className='texto-nosotros'>Green All Day nace en conjunto de dos mentes amigas que de pasiones comparten el cultivo, asi nacio la idea de abrir este proyecto para que cada cultivador tenga a dispocision los mejores sumistros y asesoramiento al alcance de sus manos.</p>
      </div><div>
        <h1 className='nosotros'>Asesoramiento</h1>
        <p className='texto-nosotros'>Asesoramos y te acompañamos desde la semilla hasta la flor. </p>
      </div></>
  )
}

export default HomePage