import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

function Category({ category }) {
    const navigate = useNavigate();
    return (
        <div className="Category">
            <div
                className="category-content center"
                style={{
                    backgroundImage: `url(${category?.image?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "rgba($color: #000000, $alpha: 0.4)",
                }}
                onClick={() => navigate(`/category/${category.key}`)}
            >
                <h3 className="heading">{category.title}</h3>
            </div>
        </div>
    );
}

export default Category;
