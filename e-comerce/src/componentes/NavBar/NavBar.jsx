/* Menu de Navegación */
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>Frighor</h1>

            <nav>
                <ul>
                    <li>Mc Cain</li>
                    <li>Benedecti</li>
                    <li>Dolce Neve</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar