import React from 'react';


const Aboutus = () => {
    return (
        <>

            {/* <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <a href="#">Home</a> / About us
            </div>

            {/* <!-- Main Content --> */}
            <main className="main-content">
                <h2 className="page-title">ABOUT US</h2>
                <div className="about-sections">
                    <div className="about-section">
                        <h3>Our company</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing
                            elit.</p>
                        <ul className="feature-list">
                            <li>Top quality products</li>
                            <li>Best customer service</li>
                            <li>30-days money back guarantee</li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h3>Our team</h3>
                        <p>cms-img</p>
                        <p>Lorem elit fort occaecat cupidatat non</p>
                        <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                    <div className="about-section">
                        <h3>Testimonials</h3>
                        <p>"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim."</p>
                        <p>Lorem ipsum dolor sit</p>
                        <p>"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet
                            conse ctetur adipisicing elit, sed do eiusmod."</p>
                        <p>Ipsum dolor sit</p>
                    </div>
                </div>
            </main>

        </>
    )
}
export default Aboutus
