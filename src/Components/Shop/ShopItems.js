import { useEffect, useState } from "react";

const ShopItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
        const items = await data.json();
        console.log(items);
        setItems(items);
    }


    return(
        <div className="shop-items">
            {items.map(item => (
                <div key={item.id} className="shop-item">
                    <img class="shop-item-image" src={item.images[2]}/>
                    <div className="shop-item-name">{item.title}</div>
                    <div className="shop-item-price">{item.price}</div>
                    <div className="shop-item-buttons"> 
                        <div className="shop-item-decrease"><button>-</button></div>
                        <div className="shop-item-quantity">1</div>
                        <div className="shop-item-increase"><button>+</button></div>
                    </div>
                    <div className="shop-item-button">Add to cart</div>
                </div>
            ))}
        </div>
    );
}
export default ShopItems;