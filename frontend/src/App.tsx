import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.tsx";
import Cart from "./page/Cart.tsx";
import NavBar from "./component/NavBar.tsx";
import {useEffect, useState} from "react";
import type {CountType, OrderPayload, Product} from "./types.ts";
import ProductDetails from "./page/ProductDetails.tsx";
import Success from "./page/Success.tsx";
import CheckoutAndPayment from "./page/CheckoutAndPayment.tsx";
import Register from "./page/Register.tsx";
import Login from "./page/Login.tsx";
import RegisterDetail from "./page/RegistrationDetails.tsx";
import Payment from "./page/Payment.tsx";
import axios from "axios";


export default function App() {
    const [cart, setCart] = useState<Product[]>([]);
    const [count, setCount] = useState<CountType[]>([]);
    const [orderNumber,setOrderNumber] = useState("");

    function addToCart (product:Product, count:number){

        setCart(prevCart => [...prevCart, product]);

        setCount(prevCount => {
            const index = prevCount.findIndex(item => item.productId === product.id);
            if (index !== -1) {
                const updated = [...prevCount];
                updated[index] = {
                    ...updated[index],
                    count: updated[index].count + count,
                };
                return updated;
            } else {
                return [...prevCount, { productId: product.id, count }];
            }
        });
    }

    function submitOrder(userId: string) {

        const orderItemList = count.map(c => ({
            productId: c.productId,
            count: c.count
        }));

        const totalPrice = orderItemList.reduce((acc, item) => {
            const product = cart.find(p => p.id === item.productId);
            return acc + (product?.price || 0) * item.count;
        }, 0);

        const payload: OrderPayload = {
            orderId: orderNumber,
            orderItemList,
            totalPrice,
            userId
        };

        return axios.post("/api/order", payload);
    }


    function resetCartAndCount(){
        setCart([]);
        setCount([]);
    }

    //order number generated
    useEffect(() => {
        function generateSecureOrderNumber() {
            const array = new Uint32Array(1);
            crypto.getRandomValues(array);
            const number = array[0] % 900000 + 100000;  // ensures 6-digit number
            return "Ord-" + number;
        }

        const randomNumber = generateSecureOrderNumber();
        setOrderNumber(randomNumber);
    }, []);


  return (
      <>
        <NavBar />
        <main className="rootmain">
            <Routes>
              <Route path={"/"} element={<Home addToCart={addToCart} count={count}/>}/>
              <Route path={"/cart"} element={<Cart cart={cart}/>}/>
              <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
                <Route path={"/registerdetail"} element={<RegisterDetail/>} />
                <Route path={"/payment"} element={<Payment/>} />

              <Route path={"/checkoutAndPayment"} element={<CheckoutAndPayment resetCartAndCount={resetCartAndCount} submitOrder={submitOrder}/>} />
              <Route path={"/success"} element={<Success orderNumber={orderNumber}/>} />

              <Route path={"/:id"} element={<ProductDetails/>}/>
            </Routes>
        </main>
        <footer> By Beatrice, Hina and Mimoona</footer>
      </>
)
}
// /api/order  post path
// payload must have :
// order id
// orderitemlist [productid, productcount ]
//total order price
//userId
