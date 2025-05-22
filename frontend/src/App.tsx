import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.tsx";
import Cart from "./page/Cart.tsx";
import NavBar from "./component/NavBar.tsx";
import {useState} from "react";
import type { Product} from "./types.ts";
import ProductDetails from "./page/ProductDetails.tsx";
import Success from "./page/Success.tsx";
import CheckoutAndPayment from "./page/CheckoutAndPayment.tsx";

export default function App() {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart (product:Product){
        setCart(prevCart => [...prevCart, product]);
    }

  return (
      <>
        <NavBar />
        <main className="rootmain">
            <Routes>
              <Route path={"/"} element={<Home addToCart={addToCart}/>}/>
              <Route path={"/cart"} element={<Cart cart={cart}/>}/>
              <Route path={"/checkoutAndPayment"} element={<CheckoutAndPayment/>} />
              <Route path={"/success"} element={<Success/>} />
              <Route path={"/:id"} element={<ProductDetails/>}/>
            </Routes>
        </main>
        <footer> By Beatrice, Hina and Mimoona</footer>
      </>
)

}
