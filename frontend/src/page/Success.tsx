import {useNavigate} from "react-router-dom";

type Props = {
    orderNumber:string
}
export default function Success(props: Readonly<Props>) {
    const navigate =useNavigate();
    const handleShopMore = () => {
        navigate("/")
    }

    return(
        <div>
            <h2>Order has been placed successfully</h2>
            <p>Order Number: <strong>{props.orderNumber}</strong></p>
            <button onClick={handleShopMore}>Shop More</button>
        </div>
    )
}