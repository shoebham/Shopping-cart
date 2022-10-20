import { useEffect, useState } from "react";

const Cart = (props)=>{

    const {cart} = props;
    useEffect(() => {
        getTotal();
    }, [props]);

    const [total,setTotal] = useState(0);

    function getTotal(){
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });
        setTotal(total);
        console.log(total);
    }
    return(
        cart.length >= 0 && (
        <div className="cart">
            <h2>Cart 
            <button className="close-cart" onClick={()=>{
                document.querySelector(".cart").classList.toggle("show");
            }}>X</button>
            </h2>
            
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img className="cart-item-image" src={item.images[2]} alt="you can't afford this"/>
                    <div className="cart-item-name">{item.title}</div>
                    <div className="cart-item-price">{item.price}</div>
                </div>
            ))}
            <div className="total">
                <h3>Total:- <span className="total-text">{total}</span></h3>
            </div>
            <div className="cart-button">
            </div>
        </div>
        )
    )
}

export default Cart;