import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email) {
            setError("Please enter Email");
            return;
        }
        if (!password) {
            setError("Please enter Password");
            return;
        }
        setError("");
        navigate("/payment");

    };

    return (
        <div className="checkout-payment-container">
            <h2>Shipping Details</h2>
            <label htmlFor="delivery"><strong>Delivery Details *</strong></label>
            <div className="shipping-form">
                <input type="text" placeholder="First Name *" value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name *" value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" placeholder="Phone Number *" value={phone}
                       onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" placeholder="Street *" value={street}
                       onChange={(e) => setStreet(e.target.value)}/>
                <input type="text" placeholder="House Number *" value={houseNumber}
                       onChange={(e) => setHouseNumber(e.target.value)}/>
                <input type="text" placeholder="Postal Code *" value={postalCode}
                       onChange={(e) => setPostalCode(e.target.value)}/>
                <input type="text" placeholder="City *" value={city}
                       onChange={(e) => setCity(e.target.value)}/>
                <input type="text" placeholder="Country *" value={country}
                       onChange={(e) => setCountry(e.target.value)}/>
            </div>

    return(
        <>
            <div className="auth-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input type={"email"} placeholder={"email *"} value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input type={"password"} placeholder={"password *"} value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </>
    )
}

