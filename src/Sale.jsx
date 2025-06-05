import React from 'react';

const Sale = (props) => {
    return (
        <>
            <div className="item">
                <img src={props.img} alt />
                <div className="sale-text">
                    <p>
                        Only
                        <span>{props.span}</span>
                        <strong className="day">{props.strong}</strong>
                        {props.on}
                        <br />
                        {props.week}
                    </p>
                    <a href="#">SHOP TODAY</a>
                </div>
            </div>
        </>
    )
}
export default Sale
