import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Success() {
    const navigate =useNavigate();
    const [orderNumber,setOrderNumber] = useState("");

    //order number generated
    useEffect(() => {
        const randomNumber = "Ord-" +Math.floor(100000 + Math.random() * 900000)
        setOrderNumber(randomNumber)
    }, []);
    const handleShopMore = () => {
        navigate("/")
    }


    return(
        <div>
            <h2>Order has been placed successfully</h2>
            <p>Order Number: <strong>{orderNumber}</strong></p>
            <button onClick={handleShopMore}>Shop More</button>
        </div>
    )
}