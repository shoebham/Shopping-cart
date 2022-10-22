import { useEffect, useState } from "react";
import Page from "./Page";

const ShopItems = (props) => {
    const {setCart,page} = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [page]);

    const fetchItems = async () => {
        const data = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page*10-10}&limit=10`);
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    function addToCart(item){
        setCart((prevCart) => [...prevCart, item]);
    }
    return(
        items.length>0&&
        <div className="shop-container">
            <div className="shop-items">
                {items.map(item => (
                    <div key={item.id} className="shop-item">
                        <img className="shop-item-image" src={item.images[2]} alt="you can't afford this"/>
                        <div className="shop-item-name">{item.title}</div>
                        <div className="shop-item-price">{item.price}</div>
                        <div className="shop-item-buttons"> 
                            <div className="shop-item-decrease"><button>-</button></div>
                            <div className="shop-item-quantity">1</div>
                            <div className="shop-item-increase"><button>+</button></div>
                        </div>
                        <div className="shop-item-buttons add-to-cart">
                            <button onClick={()=>addToCart(item)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <Page setPage={props.setPage}/>    
        </div>
        
    );
}
export default ShopItems;