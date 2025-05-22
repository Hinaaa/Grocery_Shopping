import type {CountType, Product} from "../types.ts";
import {Link} from "react-router-dom";

type Props = {
    product: Product
    addToCart: (product: Product, count: number) => void
    count: CountType[]
}

export default function ProductCard(props: Readonly<Props>) {

    const matchedProduct = props.count.find(c => c.productId === props.product.id);
    const productCount = matchedProduct ? matchedProduct.count : 0;

    function addProduct(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        props.addToCart(props.product, 1 );
    }


    return (
        <>
            <div className="productcard">
                <Link to={`/${props.product.id}`}>

                    <header>{props.product.name}</header>
                    <main>
                        <span>{props.product.description}</span>
                        <span>{props.product.unit}</span>
                        <span>{props.product.price}</span>
                    </main>
                </Link>
                <footer>
                    <button onClick={addProduct}> {productCount} +</button>
                </footer>
            </div>
        </>
    )

}