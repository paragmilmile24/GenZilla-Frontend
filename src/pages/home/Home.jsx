import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

function Home() {
    return (
        <div className="Home">
            <Hero />
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, our Foilm and TV poster Collection
                    </p>
                </div>
                <div className="content">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </section>
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Our Top Picks</h2>
                    <p className="subheading">
                        All new Designs, Same old Details
                    </p>
                </div>
                <div className="content">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </div>
    );
}

export default Home;
