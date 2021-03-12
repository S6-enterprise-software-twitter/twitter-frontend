import LoginLeft from "./components/login-left/LoginLeft";
import LoginRight from "./components/login-right/LoginRight";
import "./Login.css";

function Login() {
  return (
    <div className="login-row">
        <div className="login-column">
            <LoginLeft/>
        </div>
        <div className="login-column">
            <LoginRight/>
        </div>
    </div>
  );
}

export default Login;
