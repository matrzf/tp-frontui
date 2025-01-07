import { useNavigate } from "react-router-dom";
import './register.css' 

export default function Register(){
    const navigate = useNavigate(); 

    const goToLogin = () => {
        navigate("/Login");
    }

    return (
        <div className="register-container">
             <div className="header">
                <h1>Register Page</h1> 
            </div>
            <div className="inputs">
                <div className="input">
                    <p>First Name</p>
                    <input type="text" />
                </div>
                <div className="input">
                    <p>Last Name</p>
                    <input type="text" />
                </div>
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
                <div className="submit">Register</div>
                <div className="submit" onClick={goToLogin}>Login</div>
            </div>
        </div>
    );
    
}