import React from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/product.jpg";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const params = useParams();
    // console.log("params", params);
    return (
        <div className="ProductDetail">
            <div className="container">
                <div className="product-layout">
                    <div className="product-img">
                        <img src={dummyImg} alt="" />
                    </div>
                    <div className="product-info">
                        <h1 className="heading">
                            Title Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Corrupti, commodi.
                        </h1>
                        <h3 className="price">Rs 999</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum quas consequatur dicta excepturi minus
                            pariatur perferendis consectetur ducimus animi vitae
                            nam, eum maxime, delectus soluta voluptas nemo
                            necessitatibus rerum, temporibus omnis a sapiente
                            sunt blanditiis? Ipsam illo fugit provident,
                            placeat, sunt et omnis quibusdam rerum illum modi
                            quasi dolor assumenda.
                        </p>

                        <div className="cart-options">
                            <div className="quantity-selector">
                                <span className="btn decrement">-</span>
                                <span className="quantity">7</span>
                                <span className="btn inncrement">+</span>
                            </div>
                            <button className="btn-primary add-to-cart">
                                Add to Cart
                            </button>
                        </div>

                        <div className="return-policy">
                            <h4>Return Policy</h4>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. A, doloremque!
                                </li>
                                <li>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ea, totam?
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
