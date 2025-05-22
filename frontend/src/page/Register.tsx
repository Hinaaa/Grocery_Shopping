import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [email,setEmail] =useState("")
    const [newPassword,setNewPassword] =useState("")
    const [confirmNewPassword,setconfirmNewPassword] =useState("")
    const [error,setError] =useState("")
    const navigate = useNavigate()
    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if (!email) {
            setError("Pleas enter Email");
            return;
        }
        if (!newPassword) {
            setError("Please enter Password");
            return;
        }
        if (!confirmNewPassword) {
            setError("Please enter Confirm Password");
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        navigate("/registerdetail")
    }

    return(

            <div className="auth-form">
                <h2>Register User</h2>
                <form onSubmit={handleRegistration}>
                    <label htmlFor="email">Email:</label>
                    <input type={"email"} placeholder={"email"} value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Set Password:</label>
                    <input type={"password"} placeholder={"new password"} value={newPassword}
                           onChange={(e)=>setNewPassword(e.target.value)}
                    />
                    <label htmlFor="password">Confirm Password:</label>
                    <input type={"password"} placeholder={"re-type password"} value={confirmNewPassword}
                           onChange={(e)=>setconfirmNewPassword(e.target.value)}
                    />
                    <button type={"submit"}>Continue</button>
                    {error && <div className="error-message">{error}</div>}
                </form>
        </div>
    )
}