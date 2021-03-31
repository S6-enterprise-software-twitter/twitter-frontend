import { useKeycloak } from "@react-keycloak/web"
import Login from '../pages/login/Login';
import Feedpage from '../pages/feedpage/Feedpage';
import Navbar from '../components/navbar/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProtectedRoute from '../components/routes/ProtectedRoute';
import Homepage from "../pages/homepage/Homepage";

export const AppRouter = () => {
    const {keycloak, initialized} = useKeycloak();
    // const KeycloakContext = useContext(React.createContext({keycloak,initialized}));
    if (!initialized) {
        return <div></div>
    }

    console.log(keycloak.authenticated)
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <ProtectedRoute path="/home" component={Homepage} isAuth={keycloak.authenticated} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}