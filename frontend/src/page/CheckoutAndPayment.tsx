import {useNavigate} from "react-router-dom";
import {useState} from "react";

type Props = {
    resetCartAndCount: () => void;
    submitOrder: (userId: string) => Promise<any>
};
export default function CheckoutAndPayment(props: Readonly<Props>) {
    //for shipping fields

    const [email, setEmail] = useState("")

    const [country, setCountry] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [saveInfo, setSaveInfo] = useState(false);
    const [method, setMethod] = useState("cash")
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handlePayment = () => {
        // Required fields
        if (
            !email || !firstName || !lastName ||
            !phone || !street || !houseNumber ||
            !postalCode || !city || !country
        ) {
            setError("Please fill all required fields.");
            return;
        }
        if (method === "card") {
            if (!cardNumber || !expiry || !cvv) {
                setError("Please fill in all card details.");
                return;
            }
        }
        setError(""); // clear any previous errors

    }
    //for payment with card settings
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("")
    const [cvv, setCVV] = useState("")

    function handleOrder() {
        handlePayment();
        const userId = "123"
        props.submitOrder(userId)
            .then(() => {
                navigate("/success");
                props.resetCartAndCount();

            })
            .catch(error => {
                console.error("order failed", error);
            })

    }

    return (
        <div className="checkout-payment-container">
            <h2>Shipping Details</h2>
            <div className="user-auth-block">
                <input type="text" placeholder="email *" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <div className="auth-buttons">
                    <button onClick={() => navigate("/register")}>Register</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
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
                <label htmlFor="saveInfo">Save my information and pay faster next time</label>
            </div>

            <div className="payment-container">
                {/* Method for payment options */}
                <h2>Choose Payment Method</h2>

                {/* Payment with Cash */}
                <div className="payment-methods">
                    <input type="radio" name="payment" id="cash" value="cash"
                           onChange={(e) => setMethod(e.target.value)}
                           checked={method === "cash"}
                    />
                    <label htmlFor="cash">Cash</label>
                </div>

                {/* if cash selected */}
                {method === "cash" && (
                    <p className="payment-note">Pay on Delivery</p>
                )}
                {/* Payment with card */}
                <div>
                    <input type="radio" name="payment" id="card" value="card"
                           onChange={(e) => setMethod(e.target.value)}
                           checked={method === "card"}
                    />
                    <label htmlFor="card">Card</label>
                </div>

                {/* Card fields appears if card selected */}
                {method === "card" && (
                    <div className="card-fields">
                        <input type="text" placeholder="Card Number" value={cardNumber}
                               onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <input type="text" placeholder="Expiry" value={expiry}
                               onChange={(e) => setExpiry(e.target.value)}
                        />
                        <input type="text" placeholder="CVV" value={cvv}
                               onChange={(e) => setCVV(e.target.value)}
                        />
                    </div>
                )}

            </div>
            {/* PayNow button*/}
            <button onClick={handleOrder}>Pay Now</button>
            {error && <div className="error-message">{error}</div>}

        </div>
    );
}