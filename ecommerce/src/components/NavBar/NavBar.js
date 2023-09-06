import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink,Link } from 'react-router-dom' 

const NavBar =() =>{
    return(
        <nav className="NavBar">
            <Link to='/'>
            <h3> FranTenis</h3>
            </Link>
            <div className='Categories'>
    <NavLink to={`/category/raquetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Raquetas</NavLink>
    <NavLink to={`/category/indumentaria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>     
    <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>             
    </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar