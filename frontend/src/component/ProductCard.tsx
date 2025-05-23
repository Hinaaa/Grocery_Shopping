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
        props.addToCart(props.product, 1);
    }

    return (
        <>
            <div className="card">
                <Link to={`/${props.product.id}`} className="card-link">
                    <h3>{props.product.name}</h3>
                    <p>{props.product.description}</p>
                    <label>per {props.product.unit}</label>
                    <p className="price">{props.product.price}</p>
                </Link>

                <button onClick={addProduct} className="add-btn">
                    {productCount > 0 && <span className="count">{productCount}</span>}
                    <span className="plus-icon">+</span>
                </button>
            </div>
        </>
    )

}