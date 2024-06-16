import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_cart from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const { all_product, removeToCart, cartItems,GetAmount } = useContext(ShopContext);

    return (
        <div className="container4">
            <div id="product-list" className="product-list"></div>
            <div id="cart" className="cart">
                <div className="cart-header">
                    <span>Product</span>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                    <span>Remove</span>
                </div>
                <ul id="cart-items">
                    {all_product.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                              
                                <li className="cart-item" key={e.id}>
                                    <img src={e.image} alt={e.name} className="cart-item-image" />
                                    <span className="cart-item-title">{e.name}</span>
                                    <span className="cart-item-price">${e.new_price}</span>
                                    <span className="cart-item-quantity">{cartItems[e.id]}</span>
                                    <span className="cart-item-total">${(e.new_price * cartItems[e.id]).toFixed(2)}</span>
                                    <button onClick={() => removeToCart(e.id)} className="cart-item-remove">
                                        <img src={remove_cart} alt="Remove" />
                                    </button>
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h4>Cart Totals</h4>
                    <div>
                        <div className="total"> 
          <p>Subtotal</p>
          <p>${GetAmount()}</p>
                        </div>
                        <hr/>
                        <div className="total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div> 
                        <hr/>
                        <div className="enditems">
                        <h1>Total</h1>
                        <p>${GetAmount()}</p>
                        </div>
                     <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="promocode">
                        <hr/>
                        <p>Enter promocode here</p>
                        <div className="promobox">
                            <input type="text" placeholder="Enterpromocode"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

