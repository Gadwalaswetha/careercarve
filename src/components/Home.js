import React, { useState } from 'react';
import './Home.css';

function Home() {
    // State variables to manage modal visibility
    const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
    const [isBuyTrainingModalOpen, setBuyTrainingModalOpen] = useState(false);
    const [showPlans, setShowPlans] = useState(false);

    const openSignUpModal = () => setSignUpModalOpen(true);
    const closeSignUpModal = () => setSignUpModalOpen(false);

    const openBuyTrainingModal = () => setBuyTrainingModalOpen(true);
    const closeBuyTrainingModal = () => setBuyTrainingModalOpen(false);


    const [showCheckout, setShowCheckout] = useState(false);

    const handleAddToCart = () => {
        setShowCheckout(true);
    };

    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="logo">CareerCarve</div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#mentors">Mentors</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#become-mentor">Become a Mentor</a></li>
                        <li><button onClick={openSignUpModal} className="sign-up-btn">Sign Up</button></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </header>

            {/* Main Content */}
            <main>
                <section className="intro">
                    <h1>From resume to final interview prep</h1>
                    <h3>We've got you covered</h3>
                    <p>
                        Get ready for your MBA campus placements, summers, or finals with the guidance of
                        the most experienced and renowned Placement Training Agency with over 12+ years of
                        expertise in training top B-Schools across the country.
                    </p>
                    <div className="button-container">
                        <button className="primary-button">Book 1X1</button>
                        <button className="primary-button" onClick={openBuyTrainingModal}>Buy Training Plans
                        </button>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="stats-container">
                    <div className="stat-item">
                        <h3>1,50,000+</h3>
                        <p>1X1 Sessions Conducted</p>
                    </div>
                    <div className="stat-item">
                        <h3>600+</h3>
                        <p>Industry Mentors</p>
                    </div>
                    <div className="stat-item">
                        <h3>40+</h3>
                        <p>Prestigious B-Schools</p>
                    </div>
                    <div className="stat-item">
                        <h3>52,000+</h3>
                        <p>Students Trained</p>
                    </div>
                </section>
            </main>

            {/* Sign Up Modal */}
            {isSignUpModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeSignUpModal}>&times;</span>
                        <form>
                            <label htmlFor="fullName">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />

                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Detailed Pricing Plans Section */}
            {isBuyTrainingModalOpen && (
                <div className="container">
                    <div className="modal">
                        <div className="modal-content">
                            <span onClick={closeBuyTrainingModal}>&times;</span>
                            <h1>Pick the plan <span className="highlight">that's right for you</span></h1>
                            <p className="sub-heading">Join millions of other customers on CareerCarve</p>
                            <div className="plans">
                                <div className="plan">
                                    <span className="badge">Campus to Corporate</span>
                                    <div className="price">
                                        <span className="original-price">₹6000</span>
                                        <span className="discounted-price">₹4390</span>
                                    </div>
                                    <h2>Campus to Corporate</h2>
                                    <p className="description">
                                        A set of 3 Corporate Success sessions helpful for a 2nd-year student in initial
                                        transitional phases from campus life to corporate world getting 360-degree
                                        guidance.
                                    </p>
                                    <button className="btn-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                                    <p className="session-time">Corporate Success (30 min)</p>
                                </div>
                                <div className="plan">
                                    <span className="badge">SIP to PPO</span>
                                    <div className="price">
                                        <span className="original-price">₹6000</span>
                                        <span className="discounted-price">₹4390</span>
                                    </div>
                                    <h2>SIP to PPO</h2>
                                    <p className="description">
                                        3 Mentoring sessions at 3 different stages of your summer internship to
                                        intricately
                                        organize your work and tasks, with a specific focus on securing a final PPO.
                                    </p>
                                    <button className="btn-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                                    <p className="session-time">SIP Success (30 min)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )}

                    {/* Conditional rendering of checkout section */}
                    {showCheckout && (
                        <div className="checkout-container">
                            <div className="modal">
                                <div className="modal-content">
                                    <h1>Let's make your checkout smooth!</h1>
                                    <div className="checkout-content">
                                        <div className="billing-details">
                                            <h2>Billing Details</h2>
                                            <form>
                                                <div className="form-row">
                                                    <input type="text" placeholder="First Name"/>
                                                    <input type="text" placeholder="Last Name"/>
                                                </div>
                                                <div className="form-row">
                                                    <input type="email" placeholder="Email address"/>
                                                </div>
                                                <div className="form-row">
                                                    <input type="text" placeholder="Phone number"/>
                                                    <input type="text" placeholder="Country"/>
                                                </div>
                                                <div className="form-row">
                                                    <input type="text" placeholder="State"/>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="shopping-bag">
                                            <h2>Your Shopping Bag</h2>
                                            <div className="item">
                                                <div className="item-name">
                                                    <span>SIP to PPO</span>
                                                    <span className="price">₹6000 ₹4390</span>
                                                </div>
                                                <div className="quantity-controls">
                                                    <button>-</button>
                                                    <input type="number" value="1"/>
                                                    <button>+</button>
                                                </div>
                                            </div>

                                            <div className="add-coupon">
                                                <a href="#">Add coupon</a>
                                            </div>

                                            <div className="totals">
                                                <div className="total-row">
                                                    <span>Item Total</span>
                                                    <span>₹6000</span>
                                                </div>
                                                <div className="total-row">
                                                    <span>Discount</span>
                                                    <span>-₹1610</span>
                                                </div>
                                                <div className="total-row">
                                                    <span>Subtotal</span>
                                                    <span>₹4390</span>
                                                </div>
                                                <div className="total-row">
                                                    <span>GST(18%)</span>
                                                    <span>₹790.2</span>
                                                </div>
                                                <div className="grand-total">
                                                    <span>Grand Total</span>
                                                    <span>₹5180.2</span>
                                                </div>
                                            </div>

                                            <button className="checkout-button">Check Out</button>

                                            <div className="terms">
                                                <p>
                                                    By ordering, you agree to our <a href="#">Terms of use</a> and <a
                                                    href="#">Privacy
                                                    Policy</a>.
                                                </p>
                                                <p>
                                                    View our <a href="#">cancellation and refund policy</a> here.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    );
}
export default Home;