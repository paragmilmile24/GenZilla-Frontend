import React from "react";
import "./OrderStatus.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { resetCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function OrderStatus() {
    const params = useParams();
    const status = params.status;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const statusMap = {
        success: {
            icon: <BsFillCartCheckFill />,
            message: "Your order has been placed successfully.",
            buttonText: "Continue Shopping",
            buttonLink: "/",
        },
        failed: {
            icon: <BiErrorCircle />,
            message: "Payment Failed",
            buttonText: "Try Again",
            buttonLink: "/",
        },
    };

    if (status === "success") {
        dispatch(resetCart());
    }
    return (
        <div className="OrderStatus">
            <div className="icon">{statusMap[status].icon}</div>
            <h2 className="message">{statusMap[status].message}</h2>
            <button
                className="btn-primary"
                onClick={() => navigate(statusMap[status].buttonLink)}
            >
                {statusMap[status].buttonText}
            </button>
        </div>
    );
}

export default OrderStatus;
