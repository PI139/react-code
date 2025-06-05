import React from 'react';


const Item = (props) => {
    return (
        <>
         <div className="category-inner-item">
                <div className="category-img">
                    <img src={props.img} alt />
                </div>
                {/* <button ClassName="view">View More</button> */}
                <div className="category-text">
                    <strong >{props.name}</strong>
                </div>
            </div>

            
        </>
    )
}
export default Item

