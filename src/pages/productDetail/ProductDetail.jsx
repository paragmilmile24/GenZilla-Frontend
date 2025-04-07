import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/product.jpg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    // console.log("params", params);
    // const productKey = params.productId;

    const cart = useSelector((state) => state.cartReducer.cart);
    const quantity =
        cart.find((item) => item.key === params.productId)?.quantity || 0;

    async function fetchData() {
        const productResponse = await axiosClient.get(
            `/products?filters[key][$eq]=${params.productId}&populate=image`
        );
        // console.log("Product Response:", productResponse.data.data);
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
                        <h1 className="heading">{product?.title}</h1>
                        <h3 className="price">Rs {product?.price}</h3>
                        <p className="description">{product?.desc}</p>

                        <div className="cart-options">
                            <div className="quantity-selector">
                                <span
                                    className="btn decrement"
                                    onClick={() =>
                                        dispatch(removeFromCart(product))
                                    }
                                >
                                    -
                                </span>
                                <span className="quantity">{quantity}</span>
                                <span
                                    className="btn inncrement"
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    +
                                </span>
                            </div>
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
