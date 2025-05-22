import {useEffect, useState} from "react";
import type {Product} from "../types.ts";
import axios from "axios";
import ProductCard from "../component/ProductCard.tsx";

type HomeProps={
    addToCart: (product: Product) => void
}

export default function Home(props: Readonly<HomeProps>){

    const [products, getProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("api/products")
            .then(response => getProducts(response.data))
            .catch(e=> console.log(e.message))

    }, []);

    return(
        <>
            <div className="productlist">
                {products.map(p=><ProductCard key={p.id} product={p} addToCart={props.addToCart}/>)}
            </div>
        </>
    )

}