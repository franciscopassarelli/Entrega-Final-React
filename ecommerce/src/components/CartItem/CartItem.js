import React from 'react';
import './CartItem.css';
import {CartContext} from '../../context/CartContext'
import { useContext } from 'react';


const CartItem = ({ id, name, price, quantity}) => {

  const { removeItem } = useContext(CartContext); 

  const handleRemoveItem = () => {
    removeItem(id); 
  };







  return (
    <div className="CartItem">
      

      <h3 className='TituloCartItem'>{name}</h3>
      <p className='PrecioItem'>Precio: ${price}</p>
      <p className='CantidadItem'>Cantidad: {quantity}</p>
      <p className='SubtotalItem'>Subtotal: ${price * quantity}</p>
      <button onClick={handleRemoveItem} className='BotonEliminar'>Eliminar</button>

    </div>
  );
};

export default CartItem;
