import { useKeycloak } from "@react-keycloak/web";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from '../components/routes/ProtectedRoute';
import Homepage from "../pages/homepage/Homepage";
import Login from '../pages/login/Login';

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