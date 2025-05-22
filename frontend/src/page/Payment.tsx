import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Payment() {
    const [method, setMethod] = useState("cash");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handlePayment = () => {
        if (method === "card") {
            if (!cardNumber || !expiry || !cvv) {
                setError("Please fill in all mandatory fields.");
                return;
            }
        }
        setError("");
        navigate("/success");
    };

    return (
        <div className="payment-container">
            <h2>Payment Details</h2>

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
                           onChange={(e) => setCvv(e.target.value)}
                    />
                </div>
            )}

            {/* PayNow button*/}
            <button onClick={handlePayment}>Pay Now</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}