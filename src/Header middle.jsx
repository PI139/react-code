import React from 'react';
import { Link } from "react-router-dom";


const Headermiddle = () => {
    return (
        <>
            <div className="header-m">
                <div className="container">
                    <div className="inner-main">
                        <div className="child">
                            <ul className="main-menu">
                                <li><Link to="/">HOME</Link></li>
                                <li><a href="#">SHOP</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Fashion</a>
                                            <ul className="peta-menu1">
                                                <li><a href="#">men</a></li>
                                                <li><a href="#">women</a></li>
                                                <li><a href="#">kids</a></li>
                                                <li><a href="#">Accsorys</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">jewellry</a>
                                            <ul className="peta-menu1">
                                                <li><a href="#">ring</a></li>
                                                <li><a href="#">baslate</a></li>
                                                <li><a href="#">necklease</a></li>
                                                <li><a href="#">weding bands</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">furniture</a>
                                            <ul className="peta-menu1">
                                                <li><a href="#">room</a></li>
                                                <li><a href="#">kitchen</a></li>
                                                <li><a href="#">hol</a></li>
                                                <li><a href="#">office</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Autoparts</a>
                                            <ul className="peta-menu1">
                                                <li><a href="#">engine part</a></li>
                                                <li><a href="#">break part</a></li>
                                                <li><a href="#">body part</a></li>
                                                <li><a href="#">other</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">ELECTRONIC</a>
                                    <ul className="sub-menu2">
                                        <li><a href="#">Mobile</a>
                                            <ul className="peta-menu2">
                                                <li><a href="#">One plus</a></li>
                                                <li><a href="#">realme</a></li>
                                                <li><a href="#">Mi</a></li>
                                                <li><a href="#">vivo</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Camere</a>
                                            <ul className="peta-menu2">
                                                <li><a href="#">Canon</a></li>
                                                <li><a href="#">Sony</a></li>
                                                <li><a href="#">Lences</a></li>
                                                <li><a href="#">Bettery</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">SPORT&BOOK</a>
                                    <ul className="sub-menu3">
                                        <li><a href="#">Sport</a></li>
                                        <li><a href="#">Book</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">ABOUT US</Link></li>
                                <li><Link to="/sale">SALE</Link></li>
                                <li><Link to="/contect">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Headermiddle 