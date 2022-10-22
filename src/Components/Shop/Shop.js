import { useState } from "react";
import Cart from "../Cart";
import Page from "./Page";
import ShopItems from "./ShopItems";


const Shop = (props)=>{
    const [page,setPage] = useState(1);
    return(
        <div>
            <h1 className="center">Shop</h1>
            <ShopItems cart = {props.cart} setCart={props.setCart} page={page} setPage={setPage}/>
        </div>
    )
}

export default Shop;