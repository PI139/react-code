import React from 'react';

const Online = (props) => {
    return (
        <>
            <div className="online-inner-item">
                <div className="online-img">
                    <img src={props.img} alt />
                </div>
                <div className="online-text">
                    <strong>{props.text}</strong>
                    <p>{props.help}</p>
                </div>
            </div>
        </>
    )
}
export default Online
