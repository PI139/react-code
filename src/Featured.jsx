import React from 'react';

const Featured = (props) => {
    return (
        <>
            <div className="inner-featured-item">
                <div className="featured-img">
                    <img src={props.img} alt />
                    {/* <img src="assets/img1/F1.jpg" alt /> */}
                </div>
                <div className="featured-text">
                    <p>{props.text}</p>
                </div>
                <div className="price">
                    <span>{props.price}</span>
                </div>
                <a href="#">ADD TO CART</a>
            </div>
        </>
    )
}
export default Featured

