import React from "react";
import "./CartItem.scss";
import dummyImg from "../../assets/product.jpg";
import { AiOutlineClose } from "react-icons/ai";

function CartItem() {
    return (
        <div className="CartItem">
            <div className="item-img">
                <img src={dummyImg} alt="product" />
            </div>
            <div className="item-info-wrapper">
                <div className="item-info">
                    <p className="title">Product Title here</p>
                    <p className="price">Rs 999</p>
                    <div className="quantity-selector">
                        <span className="btn decrement">-</span>
                        <span className="quantity">2</span>
                        <span className="btn inncrement">+</span>
                    </div>
                    <p className="total-price">Subtotal : Rs 1998</p>
                </div>
                <div className="item-remove">
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
