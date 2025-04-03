import React from "react";
import "./Footer.scss";
import {
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineMail,
} from "react-icons/ai";

function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="content">
                    <div className="footer-left">
                        <h3 className="title">Follow Us</h3>
                        <ul className="follow">
                            <li className="hover-link center">
                                <AiOutlineInstagram />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineFacebook />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineTwitter />
                            </li>
                            <li className="hover-link center">
                                <AiOutlineMail />
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <h3 className="title">Company</h3>
                        <ul className="company">
                            <li className="hover-link">Contact Us</li>
                            <li className="hover-link">Privacy Policy</li>
                            <li className="hover-link">
                                Returns and Exchange Policy
                            </li>
                            <li className="hover-link">Shipping Policy</li>
                            <li className="hover-link">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="subfooter center">
                    <p>
                        Copyright {new Date().getFullYear()} &copy;
                        <strong>Ecommerce</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
