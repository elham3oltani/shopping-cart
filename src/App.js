import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import { Routes,Route,Navigate } from "react-router-dom";
import ProductDetail from './components/ProductsDetail'
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./Shared/Navbar"; 
import ShopCart from "./components/ShopCart";
function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/products' element={<Store />}/>
          <Route path='/ShopCart' element={<ShopCart />} />
           <Route path='/*' element={<Navigate to="/products" />} />
          <Navbar />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
