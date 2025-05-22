import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function RegisterDetail() {
    // For shipping fields
    const [country, setCountry] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [saveInfo, setSaveInfo] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = () => {
        if (!firstName || !lastName || !phone || !street || !houseNumber || !postalCode || !city || !country) {
            setError("Please fill in all mandatory fields.");
            return;
        }
        if (!saveInfo) {
            setError("Please agree to the terms and conditions.");
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

            <div className="save-info">
                <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label htmlFor="saveInfo">Agree to terms and conditions</label>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button onClick={handleRegister}>Register & Pay Now</button>
        </div>
    );
}