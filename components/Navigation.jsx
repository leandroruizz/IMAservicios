import Link from 'next/link'
import './navigation.css'

export default function Navigation () {
    return (
        <nav className='nav'>
            <ul className='nav-lista'>
                <li className='nav-item'>
                    <Link className='nav-text' href='./'>Servicios</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-text' href='/contacto'>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}
