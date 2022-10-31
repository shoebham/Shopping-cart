
import { useState } from "react";
import {Routes,Route,HashRouter } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop/Shop";

const RouteSwitch = () => {
    const [cart,setCart] = useState({});
    return (
        <HashRouter  basename>
        <Nav cart={cart}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>}/>
            </Routes>
        <Cart cart={cart} setCart={setCart}/>
        </HashRouter >
    )
}
export default RouteSwitch;