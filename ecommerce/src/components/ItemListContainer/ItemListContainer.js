import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({gretting}) =>{
    const [products,setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then (response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])

    return(
     <div>
        <h1>{gretting}</h1>
        <ItemList products={products}/>
     </div>
    )
}

export default ItemListContainer