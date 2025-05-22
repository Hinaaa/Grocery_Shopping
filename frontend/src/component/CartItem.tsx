import type { Product} from "../types.ts";


type CartItemProps ={
    cartItem: Product
    quantity:number
}
export default function CartItem(props: Readonly<CartItemProps>){

    const totalPrice = props.quantity*props.cartItem.price;

    return(
        <>
            <div className="cartitem">
                <span>{props.cartItem.name}</span>
                <span>{props.cartItem.unit}</span>
                <span>{props.cartItem.price}</span>
                <span>{props.quantity}</span>
                <span>{totalPrice}</span>
            </div>
        </>
    )
}