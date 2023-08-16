import cart from './Assets/cart.ico'
import './CartWidget.css'


const CartWidget =()=>{
    return(
        <div className="Numero">
            <img src={cart} alt='cart-widget' />
            0
        </div>
    )
}

export default CartWidget