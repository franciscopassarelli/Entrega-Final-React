
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContatiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import './services/firebase/firebaseConfig'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider> 
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer gretting={'todos nuestros productos'} className="TitleProducts"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer gretting={'productos por categoria'}/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h1 className='NotFound'>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
