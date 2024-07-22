import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'Productos', itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
        setLoading(false);  // Asegurar que loading se establezca a false en caso de error también
      });
  }, [itemId]);

  if (loading) {
    return <p>Loading...</p>;  // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className='ItemDetailContainer'>
    
      {product ? <ItemDetail {...product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ItemDetailContainer;
