import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
import { BsCartX } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";

import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(stripePublishableKey);

function Cart({ onClose }) {
    const cart = useSelector((state) => state.cartReducer.cart);
    const isCartEmpty = cart.length === 0;
    let totalAmount = 0;
    cart.forEach((item) => {
        totalAmount += item.price * item.quantity;
    });

    async function handleCheckout() {
        try {
            const response = await axiosClient.post("/orders", {
                products: cart,
            });
    
            const stripe = await stripePromise;
            await stripe.redirectToCheckout({
                sessionId: response.data.stripeid,
            });
    
            console.log("Response : ", response);
        } catch (error) {
            console.error("Error during checkout:", error);
            return;
        }
    }
    return (
        <div className="Cart">
            <div className="overlay" onClick={onClose}></div>
            <div className="cart-content">
                <div className="header">
                    <h3>Shopping Cart</h3>
                    <div className="close-btn" onClick={onClose}>
                        <AiOutlineClose /> Close
                    </div>
                </div>
                <div className="cart-items">
                    {cart.map((item) => (
                        <CartItem key={item.key} product={item} />
                    ))}
                </div>
                {isCartEmpty && (
                    <div className="empty-cart-info center">
                        <div className="icon">
                            <BsCartX />
                        </div>
                        <h4>Your cart is empty</h4>
                    </div>
                )}
                {!isCartEmpty && (
                    <div className="checkout-info">
                        <div className="total-amount">
                            <h3 className="total-message">Total :</h3>
                            <h3 className="total-value">Rs {totalAmount}</h3>
                        </div>
                        <div
                            className="checkout btn-primary"
                            onClick={handleCheckout}
                        >
                            Checkout now
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
