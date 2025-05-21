import type { Product} from "../types.ts";
import {Link} from "react-router-dom";

type Props = {
    product:Product
    addToCart: (product: Product) => void
}

export default function ProductCard(props:Readonly<Props>){

    function addProduct(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        props.addToCart(props.product);
    }



    return(
        <><Link to={`/${props.product.id}`}>
            <div className="productcard">
                <header>{props.product.name}</header>
                <main>
                    <span>{props.product.description}</span>
                    <span>{props.product.unit}</span>
                    <span>{props.product.price}</span>
                </main>
                <footer>

                    <button onClick={addProduct}>+</button>
                </footer>
            </div>
        </Link>
        </>
    )

}