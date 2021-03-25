import LoginLeft from "./components/login-left/LoginLeft";
import LoginRight from "./components/login-right/LoginRight";
import "./Login.css";

function Login(props) {
  return (
    <div className="login-row">
        <div className="login-column">
            <LoginLeft isAuth={props.isAuth} setIsAuth={props.setIsAuth} keycloak={props.keycloak} initOptions={props.initOptions}/>
        </div>
        <div className="login-column">
            <LoginRight/>
        </div>
    </div>
  );
}

export default Login;
