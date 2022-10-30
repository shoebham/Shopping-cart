import { useEffect, useState } from "react";
import Page from "./Page";

const ShopItems = (props) => {
    const {cart,setCart,page} = props;

    const [items, setItems] = useState({});
    const [currentItems, setCurrentItems] = useState({});
    useEffect(() => {
        fetchItems();
 
    }, [page]);

    const fetchItems = async () => {
        const data = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page*10-10}&limit=10`);
        const items = await data.json();
        console.log(items);
        items.forEach(element => {
            // console.log({...currentItems,[element.id]:{...element,quantity:0}});
            // setCurrentItems({()=> ...currentItems,[element.id]:{...element,quantity:0}});
            setCurrentItems((currentItems)=>({...currentItems,[element.id]:{...element,quantity:1}}));
        });
        setItems(items);
    }
    function addToCart(item){
        console.log("look here",{[item.id]:{...currentItems[item.id]}});
        setCart((prevCart)=>(
                {
                    ...prevCart,
                    [item.id]:{...currentItems[item.id],quantity:currentItems[item.id].quantity
                        +(prevCart[item.id]?.quantity||0),
                    }
                }
                ));    
        console.log(cart);
    }
    function changeQuantity(id,val){
        setCurrentItems((currentItems)=>({...currentItems,[id]:{...currentItems[id],quantity:currentItems[id].quantity+val}}));
    }
    return(
        items.length>0&&
        <div className="shop-container">
            <div className="shop-items">
                {items.map(item => (
                    <div key={item.id} className="shop-item ">
                        <img className="shop-item-image" src={item.images[2]} alt="you can't afford this"/>
                        <div className="shop-item-name">{item.title}</div>
                        <div className="shop-item-price">{item.price}</div>
                        <div className="shop-item-buttons"> 
                            <div className="shop-item-decrease" onClick={()=>changeQuantity(item.id,-1)}><button className="slide-right">-</button></div>
                            <div className="shop-item-quantity">{currentItems[item.id].quantity}</div>
                            <div className="shop-item-increase" onClick={()=>changeQuantity(item.id,1)}><button className="slide-right">+</button></div>
                        </div>
                        <div className="shop-item-buttons add-to-cart">
                            <button  className="slide-right" onClick={()=>addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <Page setPage={props.setPage}/>    
        </div>
        
    );
}
export default ShopItems;