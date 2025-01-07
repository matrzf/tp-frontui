import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login(){
    const navigate = useNavigate(); 

    const goToRegister = () => {
        navigate("/Register");
    }

    return (
        <div className="login-container">
            <div className="header">
                <h1>Login Page</h1> 
            </div>
            <div className="inputs">
                <div className="input">
                    <p>Email</p>
                    <input type="email" />
                </div>
                <div className="input">
                    <p>Password</p>
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Lost password ? <span>Click here</span></div>
            <div className="submit-container">
                <div className="submit">Login</div>
                <div className="submit" onClick={goToRegister}>Register</div>
            </div>
        </div>
    );
    
}