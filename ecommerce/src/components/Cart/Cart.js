import './Cart.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
 const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
 
 if(totalQuantity === 0) {
    return(
        <div>
            <h1 className='ItemNone'>No hay items en el carrito</h1>
            <Link to="/" className="Option">Volver a productos</Link>
        </div>
    )
 }
 return(
    <div className='CheckEstilos'>
        {cart.map(p=> <CartItem key={p.id} {...p}/>)}
        <h3 className='TotalPrice'>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">Vaciar todo el carrito</button>
        <div className="ArrowLinkContainer"> 
    <Link to='/checkout' className="arrow-link">
      Ir al Checkout<span className="arrow">→</span>
    </Link>
  </div>
       
       
    </div>
 )


}

export default Cart