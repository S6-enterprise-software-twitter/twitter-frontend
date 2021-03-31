import { useKeycloak } from "@react-keycloak/web"
import Feedpage from '../feedpage/Feedpage';
import Navbar from '../../components/navbar/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../login/Login";

function Homepage() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Feedpage} />
                </Switch>
            </BrowserRouter>
        </div>

    )
}

export default Homepage;