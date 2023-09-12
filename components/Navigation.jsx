import Link from 'next/link'
import './Navigation.css'

export default function Navigation () {
    return (
        <nav className='nav'>
            <ul className='nav-lista'>
                <li className='nav-item'>
                    <Link className='nav-text' href='./'>Servicios</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='/contact'>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}
