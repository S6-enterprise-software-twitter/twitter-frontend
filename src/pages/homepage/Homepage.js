import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Feedpage from '../feedpage/Feedpage';

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