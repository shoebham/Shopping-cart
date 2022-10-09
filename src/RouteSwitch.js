
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop/Shop";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;