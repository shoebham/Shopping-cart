import { useEffect, useState } from "react";

const Cart = (props)=>{

    const {cart,setCart} = props;
    useEffect(() => {
        console.log("rendering");
        getTotal();
    }, [props]);

    const [total,setTotal] = useState(0);

    function getTotal(){
        let total = 0;
        for (const key in cart) {
            if (Object.hasOwnProperty.call(cart, key)) {
                const element = cart[key];
                total += element.price*element.quantity;
            }
        }
        
        // cart.map(item => {
        //     total += item.price;
        // });
        setTotal(total);
        console.log(total);
    }
    function deleteFromCart(item){
        let tempCart = cart;
        delete tempCart[item];
        setCart(()=>({...tempCart}));
    }
    return(
        (
            Object.keys(cart).length===0?
            <div className="cart">
                 <button className="close-cart slide-right" onClick={()=>{
                    document.querySelector(".cart").classList.toggle("show");
                }}>X</button>
                <div className="cart-header">
                    <h1>Cart</h1>
                    
                </div>
                <div className="cart-items">
                    <div className="cart-item">
                        <div className="cart-item-name">Your cart is empty</div>
                    </div>
                </div>
            </div>
            :
            <div className="cart">
                <h2>Cart 
                <button className="close-cart slide-right" onClick={()=>{
                    document.querySelector(".cart").classList.toggle("show");
                }}>X</button>
                </h2>
                {Object.keys(cart).map(item => (
                    <div key={item} className="cart-item">
                        <img className="cart-item-image" src={cart[item].images[2]} alt="you can't afford this"/>
                        <div className="text-items">
                            <div className="cart-item-name">{cart[item].title}</div>
                            <div className="cart-item-price">${cart[item].price}</div>
                            <div className="cart-item-quantity">
                            <input type="number" min="1" className="quantity cart-quantity" id={"cart-quant-"+item} 
                            value={cart[item].quantity} onChange={()=>{
                                if(document.getElementById(`cart-quant-${item}`).value>0){
                                setCart((prevCart)=>({...prevCart,[item]:{...cart[item],quantity:document.getElementById(`cart-quant-${item}`).value}}));
                                }
                            }}>
                            </input>
                        </div>
                            <div className="subtotal">
                                <span className="subtotal-price">${cart[item].price*cart[item].quantity}</span>
                            </div>
                            <button className="delete-button slide-right" onClick={()=>{deleteFromCart(item)}}> Del </button>
                        </div>
                    </div>
                ))}
                {/* {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img className="cart-item-image" src={item.images[2]} alt="you can't afford this"/>
                        <div className="cart-item-name">{item.title}</div>
                        <div className="cart-item-price">{item.price}</div>
                    </div>
                ))} */}
                <div className="total">
                    <h3>Total:- <span className="total-text">${total}</span></h3>
                </div>
                <div className="cart-button">
                </div>
            </div>
        )
    )
}

export default Cart;