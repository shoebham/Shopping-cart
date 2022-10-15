import Cart from "../Cart";
import ShopItems from "./ShopItems";


const Shop = (props)=>{
    return(
        <div>
            <h1>Shop</h1>
            <ShopItems setCart={props.setCart}/>
        </div>
    )
}

export default Shop;