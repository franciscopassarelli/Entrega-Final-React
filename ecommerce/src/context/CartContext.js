import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert2
import './CartContext.css'

export const CartContext = createContext({
  cart: [],
  addItem: (item, quantity) => {},
  removeItem: (itemId) => {},
  clearCart: () => {},
  total: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);

    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (quantity <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La cantidad debe ser mayor a cero. No se puede agregar al carrito.',
        showClass: {
          popup: 'swal2-popup custom-animation',
        },
        hideClass: {
          popup: 'swal2-popup swal2-hide custom-animation',
        },
      });
      return;
    }

    if (!isIncart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      Swal.fire({
        icon: 'success',
        title: 'Agregado al carrito',
        text: `Se agregaron ${quantity} unidades de ${item.name} al carrito.`,
        showClass: {
          popup: 'swal2-popup custom-animation',
        },
        hideClass: {
          popup: 'swal2-popup swal2-hide custom-animation',
        },
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: 'El producto ya fue agregado al carrito.',
        showClass: {
          popup: 'swal2-popup custom-animation',
        },
        hideClass: {
          popup: 'swal2-popup swal2-hide custom-animation',
        },
      });
    }
  }

  const removeItem = (itemId) => {
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este producto del carrito?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      showClass: {
        popup: 'swal2-popup custom-animation',
      },
      hideClass: {
        popup: 'swal2-popup swal2-hide custom-animation',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
        Swal.fire({
          icon: 'success',
          title: 'Producto eliminado',
          text: 'Se ha eliminado el producto del carrito.',
          showClass: {
            popup: 'swal2-popup custom-animation',
          },
          hideClass: {
            popup: 'swal2-popup swal2-hide custom-animation',
          },
        });
      }
    });
  }

  const clearCart = () => {
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      text: '¿Deseas vaciar todo el carrito?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      showClass: {
        popup: 'swal2-popup custom-animation',
      },
      hideClass: {
        popup: 'swal2-popup swal2-hide custom-animation',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          icon: 'success',
          title: 'Carrito vaciado',
          text: 'Se ha vaciado correctamente el carrito.',
          showClass: {
            popup: 'swal2-popup custom-animation',
          },
          hideClass: {
            popup: 'swal2-popup swal2-hide custom-animation',
          },
        });
      }
    });
  }

  const isIncart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
