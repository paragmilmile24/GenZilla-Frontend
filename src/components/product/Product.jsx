import React from "react";
import "./Product.scss";
import dummyImage from "../../assets/product.jpg";
import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate();
    return (
        <div className="Product" onClick={() => navigate("/products/dummyId")}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={dummyImage} alt="" id="img" />
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">Limited Special Edition</p>
                    <p className="price">Rs 999</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
