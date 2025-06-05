import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            {/* <!------------------- etread block start -------------> */}
            <div className="etread">
                <div className="etread-tital">
                    <span>Latest From</span>
                    <i>Etread</i>
                </div>
                <div className="inner-etread">
                    <div className="etread-p">
                        <p>Subscribe to our newsletter to get exclusive discount and </p>
                        <p>new theme launches right
                            in your inbox.</p>
                    </div>
                    <div className="etread-email">
                        <input type="Email" className="add-box" name="Email" placeholder="Enter your email address" />
                        <a href="#">SEND</a>
                    </div>
                </div>
            </div>

            {/* <!------------------- etread block end -------------> */}
            {/* <!-- ----------------------footer top block start-------------------------- --> */}
            <div className="footer-top-main">
                <div className="container">
                    <div className="footer-top-inner">
                        <div className="footer-top-child">
                            <div className="child1">
                                <div className="child-header">CONTACT</div>
                                <ul>
                                    <li><i className="fa-solid fa-location-dot" />
                                        <span>ADDRESS</span> <br />
                                        Etread <br />
                                        123 Street, London <br />
                                        United States <br /><br />
                                    </li>
                                    <li><i className="fa-regular fa-envelope" />Mail us
                                        <span className="d-block"><a href="#">SaleDomains.com</a></span><br />
                                    </li>
                                    <li><i className="fa-solid fa-phone" />Phone
                                        <span>(123)4567890</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="child2">
                                <div className="child-header">PRODUCTS</div>
                                <ul>
                                    <li><a href="#">Secure Payment</a></li>
                                    <li><a href="#">Price drop</a></li>
                                    <li><a href="file:///F:/ex%20demo/sale.html">New Product</a></li>
                                    <li><a href="file:///F:/ex%20demo/sale.html">Best sale</a></li>
                                    <li><a href="#">Stores</a></li>
                                </ul>
                            </div>
                            <div className="child3">
                                <div className="child-header">OUR COMPANY</div>
                                <ul>
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">Legal Notice</a></li>
                                    <li><Link to="/about">Aboutus</Link></li>
                                    <li><a href="file:///F:/ex%20demo/contect%20as.html.html">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="child4">
                                <div className="child-header">YOUR ACCOUNT</div>
                                <ul>
                                    <li><a href="#">Personal info</a></li>
                                    <li><a href="#">orders</a></li>
                                    <li> <a href="#">Creadit slips</a></li>
                                    <li><a href="#">Address</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-border" />
                </div>
            </div>

            {/* <!-- ----------------------footer top block end-------------------------- --> */}



            {/* <!-- ----------------------footer middle block start-------------------------- --> */}
            <div className="footer-middle-main">
                <div className="container">
                    <div className="footer-middle-inner">
                        <div className="footer-middle-child2">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, <br />totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto beatae vitae dicta <br />sunt explicabo. </p>
                        </div>
                        <div className="footer-middle-child3">
                            <ul>
                                <li><a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="https://x.com/?lang=en-in&mx=2"><i className="fa-brands fa-twitter" /></a></li>
                                <li><a href="https://in.pinterest.com/#search"><i className="fa-solid fa-p" /></a></li>
                                <li><a href="https://www.youtube.com/"><i className="fa-brands fa-youtube" /></a></li>
                                <li><a href="https://vimeo.com/"><i className="fa-solid fa-v" /></a></li>
                                <li><a href="https://www.instagram.com/accounts/login/?hl=en"><i className="fa-brands 
                      fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-border" />
                </div>
            </div>


            {/* <!-- ----------------------footer middle block end-------------------------- --> */}
            {/* <!-- ----------------------footer bottem block start-------------------------- --> */}
            <div className="footer-bottom-main">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <div className="footer-bottom-child1">
                            <p><a href="#">
                                © 2024 - Ecommerce software by PrestaShop™
                            </a>
                            </p>
                        </div>
                        <div className="footer-bottom-child2">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-cc-visa" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-cc-paypal" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-cc-discover" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-cc-amex" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-cc-mastercard" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer bottom block end */}

        </>
    )
}
export default Footer