import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as React from 'react';


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
    }

    return (
        <>
            <div className="auth-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input type={"email"} placeholder={"email *"} value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input type={"password"} placeholder={"password *"} value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </>
    )
}
