import React from 'react';


const Saleus = () => {
    return (
        <>
            <div class="container">
                <div class="page-layout">
                    {/* <!-- Sidebar --> */}
                    <div class="sidebar">
                        <div class="filter-section">
                            <div class="filter-title">Filter by</div>
                            <div class="filter-group">
                                <select class="filter-dropdown">
                                    <option>Price</option>
                                    <option>0-50€</option>
                                    <option>50-100€</option>
                                    <option>100-200€</option>
                                    <option>200€+</option>
                                </select>
                            </div>
                        </div>

                        <div class="model-showcase">
                            <img src="assets/img1/advertising.jpg" alt="Model in blue blazer" />
                        </div>
                    </div>

                    {/* <!-- Main Content --> */}
                    <div class="main-content">
                        {/* <!-- Banner --> */}
                        <div class="banner2">
                            <img src="assets/img1/Sale banner.png" alt="Sale banner" />
                        </div>

                        {/* <!-- Page Title --> */}
                        <h1 class="page-title">Sale</h1>
                        <p class="page-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.</p>

                        {/* <!-- Product Controls --> */}
                        <div class="product-controls">
                            <div class="left-controls">
                                <div class="view-options">
                                    <div class="view-btn active">
                                        <i class="fas fa-th"></i>
                                    </div>
                                    <div class="view-btn">
                                        <i class="fas fa-list"></i>
                                    </div>
                                </div>
                                <span class="product-count">There are 16 products.</span>
                            </div>

                            <div class="sort-options">
                                <span class="sort-label">Sort by:</span>
                                <select class="sort-dropdown">
                                    <option>Relevance</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Products Grid --> */}
                        <div class="products-grid">
                            {/* <!-- Product 1 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F2.jpg" alt="Women's Regular Top" />
                                    <div class="product-badge">New</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's Regular Top</h3>
                                    <div class="product-price">€99.00</div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 2 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F3.jpg" alt="Women's Regular Short Kurti" />
                                    <div class="product-badge">New</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's Regular Short Kurti</h3>
                                    <div class="product-price">
                                        €163.18
                                        <span class="original-price">€199.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 3 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F4.jpg" alt="Men's Quilted Bomber Jacket" />
                                    <div class="product-badge sale">-25%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Men's Quilted Bomber Jacket</h3>
                                    <div class="product-price">
                                        €224.25
                                        <span class="original-price">€299.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 4 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F5.jpg" alt="Crop Top For Women's Casual Wear" />
                                    <div class="product-badge">New</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Crop Top For Women's Casual Wear</h3>
                                    <div class="product-price">
                                        €224.10
                                        <span class="original-price">€249.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 5 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F6.jpg" alt="Women's One Piece Western Dress" />
                                    <div class="product-badge sale">-30%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's One Piece Western Dress</h3>
                                    <div class="product-price">
                                        €202.30
                                        <span class="original-price">€289.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 6 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F7.jpg" alt="Regular Fit Full Sleeve T-Shirt" />
                                    <div class="product-badge sale">-15%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Regular Fit Full Sleeve T-Shirt</h3>
                                    <div class="product-price">
                                        €237.15
                                        <span class="original-price">€279.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- More products - Adding just enough to match the image but not overwhelm the code --> */}
                            {/* <!-- Product 7 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F8.jpg" alt="Women's Floral Printed Dress" />
                                    <div class="product-badge sale">-15%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's Floral Printed Dress</h3>
                                    <div class="product-price">
                                        €286.18
                                        <span class="original-price">€349.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 8 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F9.jpg" alt="Women's Slim Fit Crop TOP" />
                                    <div class="product-badge sale">-30%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's Slim Fit Crop TOP</h3>
                                    <div class="product-price">
                                        €359.10
                                        <span class="original-price">€399.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>

                            {/* <!-- Product 9 --> */}
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="assets/img1/F10.jpg" alt="Women's Stylish Gray Formal Coat" />
                                    <div class="product-badge sale">-12%</div>
                                </div>
                                <div class="product-details">
                                    <h3 class="product-title">Women's Stylish Gray Formal Coat</h3>
                                    <div class="product-price">
                                        €342.32
                                        <span class="original-price">€389.00</span>
                                    </div>
                                    <button class="add-to-cart">Add to cart</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pagination --> */}
                        <div class="pagination">
                            <div class="page-item active">1</div>
                            <div class="page-item">2</div>
                            <div class="page-item"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>

                {/* <!-- Featured Section --> */}
                <div class="featured-section">
                    <div class="section-title">
                        <span>Best <span class="best-seller">Seller</span></span>
                    </div>

                    <div class="featured-product">
                        <div class="product-card">
                            <div class="product-image">
                                <img src="assets/img1/F1.jpg" alt="Simple Women's Regular Top" />
                            </div>
                            <div class="product-details">
                                <h3 class="product-title">Simple Women's Regular Top</h3>
                                <div class="product-price">€123.75</div>
                                <button class="add-to-cart">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Saleus
