import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Success() {
    const navigate =useNavigate();
    const [orderNumber,setOrderNumber] = useState("");

    //order number generated
    useEffect(() => {
        function generateSecureOrderNumber() {
            const array = new Uint32Array(1);
            crypto.getRandomValues(array);
            const number = array[0] % 900000 + 100000;  // ensures 6-digit number
            return "Ord-" + number;
        }

        const randomNumber = generateSecureOrderNumber();
        setOrderNumber(randomNumber);
    }, []);
    const handleShopMore = () => {
        navigate("/")
    }
    return(
        <div className="success-container">
            <h2>Order has been placed successfully</h2>
            <p>Order Number: <strong>{orderNumber}</strong></p>
            <button onClick={handleShopMore}>Shop More</button>
        </div>
    )
}