import React from "react";
import "../assets/categoryList.css"

const CategoryList = ({ categories=[] }) => {
    return (
        <div className="categoryContainer">
            
            {
                categories.map(category => (
                    <h1 className="categoryitem">
                        {category.Name}
                        <button>Malzeme Ekle</button>
                    </h1>
                    
                ))
            }
        </div>
    )
}

export default CategoryList