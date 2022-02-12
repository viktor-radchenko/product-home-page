import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav-bar";

import { ContextWrapper } from './context'
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ProductPage from "./pages/product-page";
import ProductsPage from "./pages/products";

const App = () => {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:productId' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  );
};

export default App;
