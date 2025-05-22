import type { Product} from "../types.ts";
import CartItem from "../component/CartItem.tsx";
import CartHeader from "../component/CartHeader.tsx";
import {useNavigate} from "react-router-dom";


type CartProps = {
    cart: Product[]
}
export default function Cart(props: Readonly<CartProps> ){
    const routeTo = useNavigate();

    function checkout(){
        routeTo("/checkout");
    }
    return(
        <>
            <h1> Welcome to your cart </h1>
            <div>
                <CartHeader/>
                <main className="">
                    {/* Filtere nur die eindeutigen Artikel basierend auf der ID */}
                    {Array.from(new Set(props.cart.map(item => item.id))) // Nur eindeutige IDs
                        .map((id) => {
                            // Finde das erste CartItem mit dieser ID
                            const cartItem = props.cart.find(item => item.id === id)!;

                            // Berechne die Menge (Anzahl der Vorkommen im Warenkorb)
                            const quantity = props.cart.filter(item => item.id === id).length;

                            // Render das CartItem mit der berechneten quantity
                            return <CartItem key={cartItem.id} cartItem={cartItem} quantity={quantity} />;
                        })
                    }
                    <div className="cartitem">
                        <span>Total</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>{props.cart.reduce((a:number, b:Product)=>a+b.price, 0)}</span>
                    </div>
                </main>
                <div className="cartitem noborder">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><button onClick={checkout}>Checkout</button></span>

                </div>
            </div>
        </>
    )

}