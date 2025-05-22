import {Link} from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <Link className="navlink" to={"/"}>Home</Link>
            <Link className="navlink" to={"/cart"}>Cart</Link>
        </>
    )
}