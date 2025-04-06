import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/product.jpg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    // console.log("params", params);
    // const productKey = params.productId;

    async function fetchData() {
        const productResponse = await axiosClient.get(
            `/products?filters[key][$eq]=${params.productId}&populate=image`
        );
        console.log("Product Response:", productResponse.data.data);
        if (productResponse.data.data.length > 0) {
            setProduct(productResponse.data.data[0]);
        }
    }

    useEffect(() => {
        setProduct(null);
        fetchData();
    }, [params]);

    if (!product) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <div className="ProductDetail">
            <div className="container">
                <div className="product-layout">
                    <div className="product-img">
                        <img src={product?.image?.url} alt="" />
                    </div>
                    <div className="product-info">
                        <h1 className="heading">
                            {product?.title}
                        </h1>
                        <h3 className="price">Rs {product?.price}</h3>
                        <p className="description">
                            {product?.desc}
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
