import type { Product} from "../types.ts";
import CartItem from "../component/CartItem.tsx";


type CartProps = {
    cart: Product[]
}
export default function Cart(props: Readonly<CartProps> ){
    console.log(props.cart);

    function countProduct(){
        const product: Product  = props.cart[0]
        const productList: Product[] = props.cart.filter((eachItem)=>{
            eachItem.id === product.id;
        })

        for(let i=0; props.cart.length;  ){

        }
    }

    // const index = props.cart.map(item=> {
    //     if(item.id === product.id)){
    //         props.cart.splice(index, 1);
    //     }
    //
    // }


    // const remainingItems = orderItems.filter(item => !bestProductIds.includes(item.productId));



    // function addToCart (){
    //     const  quantity= cart.filter((cartItem)=> cartItem.id === props.product.id).length;
    //     console.log("hallo cart");
    //     // should add in cart
    //     let cartItemType: CartItemType = {
    //         name: ""
    //     };
    //     setCart(cart.push(cart))
    //
    //     for(let key in props.product){
    //         if(cartItemType.hasOwnProperty(key)){
    //             cartItemType[key] = props.product[key];
    //         }
    //     }
    //     console.log(cartItemType);
    //
    //
    // }


    return(
        <>
            <h1> Welcome to your cart </h1>
            <div>{props.cart.map((cartItem)=>{
                <CartItem cartItem={cartItem}/>
            })}</div>
        </>
    )

}