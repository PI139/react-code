import React from 'react';


const Contectus = () => {
    return (
        <>

<div class="container">
        <nav class="breadcrumb">
            <a href="#">Home</a>
            <span>Contact us</span>
        </nav>

        <div class="contact-section">
            <div class="store-info">
                <h2>Store Information</h2>

                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-text">
                        <p>Etrend</p>
                        <p>123 Street, London</p>
                        <p>United States</p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="info-text">
                        <p>Call us:</p>
                        <p><a href="tel:1234567890">(123) 456 7890</a></p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info-text">
                        <p>Email us:</p>
                        <p><a href="mailto:sales@domain.com">sales@domain.com</a></p>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <h2>Contact Us</h2>

                <form id="contactForm">
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <select id="subject" name="subject">
                            <option value="customer-service">Customer service</option>
                            <option value="returns">Returns</option>
                            <option value="shipping">Shipping</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="your@email.com" required></input>
                    </div>

                    <div class="form-group">
                        < label for="attachment">Attachment</label>
                        <div class="file-input-wrapper">
                            <button type="button" class="file-input-button" id="fileButton">Choose File</button>
                            <input type="file" id="attachment" name="attachment" ></input>
                            <span class="file-name" id="fileName">No file chosen</span>
                            <span class="optional">optional</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="How can we help?"></textarea>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
        </>
    )
}
export default Contectus
