import React from 'react';
import Headermiddle from './Header middle';
import { Link } from "react-router-dom";




const Header = () => {
    return (
        <>
            {/* banner block start */}
            <div className="banner">
                <div className="container">
                    <div className="inner-main">
                        <div className="child">
                            <span>BUY ONE - GET ONE FREE FLASH SALE!</span>
                            <a href="#">Shop Now!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner block end */}
            {/* top bar start */}
            <div className="top-bar">
                <div className="language-currency">
                    <select>
                        <option>English</option>
                        <option>Gujrati</option>
                    </select>
                    <select>
                        <option>EUR €</option>
                        <option>USD$</option>
                    </select>
                </div>
                <div className="user-actions">
                    <Link to="/Login"><i className="fas fa-user"></i> Login</Link>
                    <a href="#"><i className="fas fa-user-plus"></i> Create An Account</a>
                </div>
            </div>
            {/* top bar end */}
            {/* header top start */}
            <div className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-inner-child">
                            <img src="assets/img1/etrend-logo-1598952682.png" alt=""></img>
                        </div>
                        <div className="search-container">
                            <input type="text" class="search-input" placeholder="Search" size="40"></input>
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>

                        <div className="header-inner-child2">
                            <div className="child">
                                <div className="header-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="icon-text">
                                    <p>Call Us Now</p>
                                    <a href="#"><strong>(123) 4567-890</strong></a>
                                </div>
                            </div>
                            <div className="child">
                                <div className="header-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className="icon-text">
                                    <a href="#"><strong>My Cart</strong></a>
                                    <p>0 Item(S)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header top end */}
            <Headermiddle />

        </>
    )
}
export default Header