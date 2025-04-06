import React from "react";
import "./Product.scss";
import dummyImage from "../../assets/product.jpg";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const navigate = useNavigate();
    return (
        <div
            className="Product"
            onClick={() => navigate(`/products/${product?.key}`)}
        >
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img
                            src={product?.image?.url}
                            alt={product?.title}
                            id="img"
                        />
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">{product?.title}</p>
                    <p className="price">Rs {product?.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
