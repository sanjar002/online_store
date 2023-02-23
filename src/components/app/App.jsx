 
import { Route, Routes } from 'react-router-dom';
//local imports
import Header from '../header/Header';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
 
const App = () => { 
 
  return ( 
    <>
    <Header />
        <Routes>
            <Route path='/products' element={<Products />}/> 
            <Route path='/cart' element={<Cart />}/> 
        </Routes>
        </>
      ); 
     };   
 
export default App;