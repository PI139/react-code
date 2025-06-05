import React from 'react';

const Product = (props) => {
    return (
        <>
            <div className="inner-products-item">
                <div className="products-img">
                    <img src={props.img} alt />
                </div>
                <div className="products-text">
                    <p>{props.text}</p>
                </div>
                <div className=" products-price">
                    <span>{props.price}</span>
                </div>
                <a href="#">ADD TO CART</a>
            </div>

        </>
    )
}
export default Product
