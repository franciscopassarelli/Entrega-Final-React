import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({gretting}) =>{
    const [products,setProducts]= useState([])
    const [Loading, setLoading]= useState (false)
        

    const { categoryId } = useParams()

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db, 'Productos'), where('category', '==', categoryId))
        : collection (db, 'Productos')
        
        getDocs(collectionRef)
        
        .then (response =>{
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return{id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error =>{
            console.error(error)
        })
        
        .finally(()=> {
            setLoading(true)
        })

    }, [categoryId])

    return(
     <div>
        <h1 className='TitleProducts'>{gretting}</h1>
        <ItemList products={products}/>
    
     </div>
    )
}

export default ItemListContainer