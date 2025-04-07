import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
    const [openCart, setOpenCart] = React.useState(false);
    const cart = useSelector((state) => state.cartReducer.cart);
    const categoriesArray = useSelector(
        (state) => state.categoryReducer.categories
    );

    let totalItems = 0;
    cart.forEach((item) => {
        totalItems += item.quantity;
    });
    var categories = [];

    if (categoriesArray.length > 3) {
        for (let i = 0; i < 3; i++) {
            categories.push(categoriesArray[i]);
        }
    } else {
        categories = categoriesArray;
    }

    return (
        <>
            <nav className="Navbar">
                <div className="container nav-container">
                    <div className="nav-left">
                        <ul className="link-group">
                            {categories?.map((category) => (
                                <li key={category.id} className="hover-link">
                                    <Link
                                        className="link"
                                        to={`/category/${category.key}`}
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-center">
                        <Link to="/">
                            <h1 className="banner">Cup Namde</h1>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div
                            className="nav-cart hover-link"
                            onClick={() => setOpenCart(!openCart)}
                        >
                            <BsCart2 className="icon" />
                            {totalItems > 0 && (
                                <span className="cart-count center">
                                    {totalItems}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {openCart && <Cart onClose={() => setOpenCart(false)} />}
        </>
    );
}

export default Navbar;
