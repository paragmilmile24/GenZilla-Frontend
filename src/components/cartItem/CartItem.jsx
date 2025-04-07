import React from "react";
import "./CartItem.scss";
import dummyImg from "../../assets/product.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { addToCart, removeFromCart, removeItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="CartItem">
            <div className="item-img">
                <img src={product.image} alt="product" />
            </div>
            <div className="item-info-wrapper">
                <div className="item-info">
                    <p className="title">{product.title}</p>
                    <p className="price">Rs {product.price}</p>
                    <div className="quantity-selector">
                        <span
                            className="btn decrement"
                            onClick={() => dispatch(removeFromCart(product))}
                        >
                            -
                        </span>
                        <span className="quantity">{product.quantity}</span>
                        <span
                            className="btn inncrement"
                            onClick={() => dispatch(addToCart(product))}
                        >
                            +
                        </span>
                    </div>
                    <p className="total-price">
                        Subtotal : Rs {product.price * product.quantity}
                    </p>
                </div>
                <div
                    className="item-remove"
                    onClick={() => dispatch(removeItem(product))}
                >
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
