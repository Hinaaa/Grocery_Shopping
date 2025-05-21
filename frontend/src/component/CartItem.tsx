import type { Product} from "../types.ts";


type CartItemProps ={
    cartItem: Product;

}
export default function CartItem(props: Readonly<CartItemProps>){

    const totalPrice = props.cartItem.quantity*props.cartItem.price;

    return(
        <>
            <div>
                <span>{props.cartItem.name}</span>
                <span>{props.cartItem.unit}</span>
                <span>{props.cartItem.length}</span>
                <span>{totalPrice}</span>

            </div>
        </>
    )
}