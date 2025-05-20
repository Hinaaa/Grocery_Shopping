import type {Product} from "../types.ts";
import {Link} from "react-router-dom";

type Props = {
    product:Product
}

export default function ProductCard(props:Readonly<Props>){

    return(
        <><Link to={`/products/${props.product.id}`}>
            <div className="productcard">
                <header>{props.product.name}</header>
                <main>
                    <span>{props.product.description}</span>
                </main>
                <footer>
                    <span>{props.product.unit}</span>
                    <span>{props.product.price}</span>
                </footer>
            </div>
        </Link>
        </>
    )

}