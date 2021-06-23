import { BrowserRouter, Route, Switch } from "react-router-dom";
import Myprofile from "../../components/myprofile/Myprofile";
import Navbar from '../../components/navbar/Navbar';
import Menu from "../feedpage/components/Menu/Menu";
import Feedpage from '../feedpage/Feedpage';
import '../feedpage/Feedpage.css';

function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="feedpage-row">
                <div className="feedpage-column feedpage-column-1">
                    <Menu />
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/user/:userId" component={Myprofile} />
                        <Route path="/" component={Feedpage} props/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Homepage;