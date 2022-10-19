import Cart from "../Cart";
import Page from "./Page";
import ShopItems from "./ShopItems";


const Shop = (props)=>{
    return(
        <div>
            <h1>Shop</h1>
            <ShopItems setCart={props.setCart}/>
            <Page/>
        </div>
    )
}

export default Shop;