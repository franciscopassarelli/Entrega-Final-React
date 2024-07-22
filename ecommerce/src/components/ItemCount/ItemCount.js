import './ItemCount.css';
import { useState } from 'react';


const ItemCount = ({stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
  
    <div className='CounterItemCount'>
      <div className='ControlsItemCount'>
        <button className='ButtonDecrement' onClick={decrement}>
          -
        </button>
        <h4 className='NumberQuantity'>{quantity}</h4>
        <button className='ButtonIncrement' onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className='AddToCartButton'
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;