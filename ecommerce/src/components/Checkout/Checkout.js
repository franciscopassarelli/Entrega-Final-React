import './Checkout.css'
import { useState, useContext } from "react";

import { collection, addDoc, writeBatch, query, where, getDocs, Timestamp, documentId } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";
import Swal from 'sweetalert2'; // Importa SweetAlert2

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email, message }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name, phone, email, message
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
        message: message
      }

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);

      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);

        clearCart();

        // Mostrar alerta de éxito después de limpiar el carrito
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por su compra!',
          text: `Su orden ha sido procesada con éxito.`,
          showClass: {
            popup: 'swal2-popup custom-animation',
          },
          hideClass: {
            popup: 'swal2-popup swal2-hide custom-animation',
          },
        });
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="LoadingStyle">Se está generando su orden...</h1>
  }

  if (orderId) {
    return <h1 className="OrderStyle">El ID de su orden es: {orderId}</h1>
  }

  return (
    <div>
      <h1 className="CheckoutStyle">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;








/*por las dudas el viejo componente*/

/*import './Checkout.css'
import { useState, useContext } from "react";

import { collection, addDoc, writeBatch, query, where, getDocs, Timestamp, documentId } from "firebase/firestore"
import {CartContext} from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig"; 


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email, message }) => { 
    setLoading(true);

    try {
      const objOrder = {
        buyer: { 
          name, phone, email, message
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
        message: message
      }

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);

      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders'); 
        const orderAdded = await addDoc(orderRef, objOrder); 

        setOrderId(orderAdded.id);

        clearCart();
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="LoadingStyle">Se está generando su orden...</h1>
   }

  if (orderId) { 
    
    return <h1 className="OrderStyle">El ID de su orden es: {orderId}</h1>  
    
    
  
    
    
  }

  return (
    <div>
      <h1 className="CheckoutStyle">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} /> 
    </div>
  );
};

export default Checkout*/