import { useState } from "react";
import "../style.css";

function Donate() {
    const [amount, setAmount] = useState(500);
    const [anonymous, setAnonymous] = useState(false);

    return (
        <div className="donation-page">

            <section className="donation-hero">
                <h1>Make a Donation Story</h1>
                <p>Every contribution creates a ripple of kindness.</p>
            </section>

            <section className="donation-container">

                {/* Form */}
                <div className="donation-form card">
                    <h3>Your Details</h3>

                    <input type="text" placeholder="Full Name" />

                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Donation Amount (₹)"
                    />

                    <div className="amount-buttons">
                        {[100, 500, 1000].map((amt) => (
                            <button
                                key={amt}
                                type="button"
                                className={amount === amt ? "active" : ""}
                                onClick={() => setAmount(amt)}
                            >
                                ₹ {amt}
                            </button>
                        ))}
                    </div>

                    <label className="upload-box">
                        📷 Upload Photo (Optional)
                        <input type="file" hidden />
                    </label>

                    <textarea placeholder="Why you want to donate? (Optional)" />

                    <div className="privacy-row">
                        <span>Show my name</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={anonymous}
                                onChange={() => setAnonymous(!anonymous)}
                            />
                            <span className="slider"></span>
                        </label>
                        <span>Stay anonymous</span>
                    </div>

                    <button className="donate-btn">
                        💜 Donate Securely
                    </button>
                </div>

                {/* Illustration */}
                <div className="donation-illustration card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
                        alt="Donation"
                    />
                </div>

            </section>
        </div>

    );
}

export default Donate;
