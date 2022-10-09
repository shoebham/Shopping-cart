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
                    <div className="shop-item-image"><img src={item.images[2]}></img></div>
                    <div className="shop-item-name">{item.title}</div>
                </div>
            ))}
        </div>
    );
}
export default ShopItems;