import React from 'react';
import Item from './Item';
import Featured from './Featured';
import Product from './Product';
import Brand from './Brand';
import Online from './Online';
import Sale from './Sale';


const Body = () => {
    return (
        <>
        
            {/* hero block start */}

            <div className="hero">
                <div className="inner-hero">
                    <a href="#">
                        <img src="assets/img1/sample-1.jpg" alt />
                    </a>
                    <div className="hero-text">
                        <p className="upto">
                            Up to
                            <span className="color">40%</span>
                            <strong>DISCOUNT </strong>
                            <span>on Fashion </span>
                            <span className=" Brands"> Brands</span>
                        </p>
                        <a href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
            {/* hero block end  */}
            {/* online block start */}
            <div className="online">
                <div className="container">
                    <div className="online-inner">
                       <Online img="assets/img1/online-support.png" text="24/7 ONLINE SUPPORT" help="Traind staffs are ready to help 24/7"/> 
                       <Online img="assets/img1/money-back.png" text="MONET BACK GUARANTEE" help="100% money back guarantee"/> 
                       <Online img="assets\img1\free-shipping.png" text="FREE SHIPPING &amp; RETURN" help="Free shipping on all orders over $100" /> 
                    </div>
                </div>
            </div>
            {/* online block end */}
            {/* category block start */}
            <div className="category">
                <div className="container">
                    <div className="category-tital">
                        <span>Shop By Category</span>
                    </div>
                    <div className="category-inner">
                        <Item name="Shop" img="assets/img1/3_thumb.png"/>
                        <Item name="Men" img="assets/img1/4_thumb.png"/>
                        <Item name="Kids" img="assets/img1/5_thumb.png"/>
                        <Item name="Fashion" img="assets/img1/6_thumb.png"/>
                        <Item name="Sports" img="assets/img1/9_thumb.png"/>
                        <Item name="Living" img="assets/img1/8_thumb.png"/>
                    </div>
                </div>
            </div>
            {/* category block end */}
            {/* sale block start */}
            <div className="sale">
                <div className="container">
                    <div className="row">

                        <Sale img="assets/img1/ad-block-1.jpg" span="Three" strong="DAYS LEFT" on="on Fashion" week="Weeks Sale!" />
           
                        <div className="item">
                            <img src="assets/img1/ad-block-2.jpg" alt />
                            <div className="sale-text">
                                <p>
                                    Get
                                    <span>Winter</span>
                                    <strong className="day">LOOKBOOK</strong>
                                    with online
                                    <br />
                                    purchase
                                </p>
                                <a href="#">GET YOUR COPY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* sale block end */}
            {/*  Featured Collection block start */}
            <div className="featured">
                <div className="container">
                    <div className="featured-tital">
                        <span>Featured </span>
                        <i>Collection</i>
                    </div>
                    <div className="inner-featured">
                       <Featured text="Simple Women's Regular Top" price="$123.75" img="assets/img1/F1.jpg"/>
                       <Featured text="Women's Floral Printed Dresses" price="$110.73" img="assets/img1/F2.jpg"/>
                       <Featured text="Women's Regular Top" price="$99.00" img="assets/img1/F3.jpg"/>
                       <Featured text="Mem's Qulited Bomber Jecket" price="$163.18" img="assets/img1/F7.jpg"/>
                       <Featured text="Women's Regular Short Kurti" price="$224.25" img="assets/img1/F5.jpg"/>
                       <Featured text="Ceop Top For Women's Casual..." price="$224.10" img="assets/img1/F6.jpg"/>
                       <Featured text="Women's One Piece Western" price="$202.30" img="assets/img1/F4.jpg"/>
                       <Featured text="Regular Fit Full Sleeve.." price="$237.37" img="assets/img1/F8.jpg"/>
                    </div>
                </div>
            </div>

            {/* Featured Collection block end */}
            {/* summer block start  */}
            <div className="summer">
                <div className="container">
                    <div className="inner-summer">
                        <h3>Summer Lookbook is out now!</h3>
                        <a href="#">
                            <span>Get your copy...</span>
                        </a>
                    </div>
                </div>
            </div>


            {/*  summer block end */}

            {/* products block start   */}
            <div className="products">
                <div className="container">
                    <div className="products-tital">
                        <span>Now </span>
                        <i>Products</i>
                    </div>
                    <div className="inner-products">
                        <Product text="Simple Women's Regular Top" price="$360.90" img="assets/img1/F1.jpg"/>
                        <Product text="Simple  Regular Top" price="$365.50"img="assets/img1/F2.jpg"/>
                        <Product text="Ceop Top For Women's Casual..." price="$333.75"img="assets/img1/F3.jpg"/>
                        <Product text="Mem's Qulited Bomber Jecket" price="$323.75"img="assets/img1/F4.jpg"/>
                    </div>
                </div>
            </div>

            {/* products block end  */}
            {/*  testimonial block start  */}
            <div className="testimonial">
                <div className="container">
                    <div className="inner-testimonial">
                        <div className="inner-testimonial-item">
                            <div className="testimonial-img">
                                <img src="assets/img1/testimonial1.png" alt />
                                <strong>John Doe</strong>
                                <p>Customer</p>
                            </div>
                            <div className="testimonial-text">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  testimonial block end */}


            {/*  Brand block start  */}
            <div className="brand">
                <div className="container">
                    <div className="brand-tital">
                        <span>Shop By</span>
                        <i>Brand</i>
                    </div>
                    <div className="inner-brand">
                        <Brand img="assets/img1/b1 (1).jpg"/>
                        <Brand img="assets/img1/b1 (2).jpg"/>
                        <Brand img="assets/img1/b1 (3).jpg"/>
                        <Brand img="assets/img1/b1 (4).jpg"/>
                        <Brand img="assets/img1/b1 (5).jpg"/>
                    </div>
                </div>
            </div>

            {/*  Brand block end  */}









        </>
    )
}
export default Body