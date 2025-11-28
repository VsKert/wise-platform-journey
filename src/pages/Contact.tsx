import React, { useState } from 'react';
import "../styles/contact.css";
import {Button} from "@/components/ui/button.tsx";
import {LogOut} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";

const Contact = () => {
    const navigate = useNavigate();
    const companyName = localStorage.getItem("companyName");

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessEmail: '',
        jobTitle: '',
        companyName: '',
        websiteUrl: '',
        country: '',
        fxVolume: '',
        paymentsPerMonth: '',
        message: '',
        receiveComms: false,
        allowStorage: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.allowStorage) {
            alert('Please consent to allow us to store and process your personal data.');
            return;
        }

        console.log('Form submitted:', formData);
        alert('Thank you for your submission! We will be in touch soon.');
    };

    return (
        <div className="contact-page">
            <Header type="auth" />
            {/* Hero Section */}
            <section className="contact-hero">
                <img
                    src="src/components/Wise_Tapestry_02_Australasia_SAsia_Aqua_Purple_Lg.jpg"
                    alt="Logo"
                    className="w-full max-h-28 object-fill rounded-lg border bg-card text-card-foreground shadow-sm"
                />
            </section>
            <section className="contact-hero">
                <h1>LET'S CONNECT</h1>
                <p>
                    Add your details below and we'll be in touch to discuss how a seamless integration with our infrastructure can help your organisation.
                </p>
            </section>

            {/* Form Section */}
            <section className="form-section">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                                First name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                                Last name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="businessEmail" className="form-label">
                                Business email<span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="businessEmail"
                                name="businessEmail"
                                value={formData.businessEmail}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="jobTitle" className="form-label">
                                Job title<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="companyName" className="form-label">
                                Company name<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="websiteUrl" className="form-label">
                                Website URL<span className="required">*</span>
                            </label>
                            <input
                                type="url"
                                id="websiteUrl"
                                name="websiteUrl"
                                value={formData.websiteUrl}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country" className="form-label">
                                Country where your company is registered<span className="required">*</span>
                            </label>
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="US">United States</option>
                                <option value="GB">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="DE">Germany</option>
                                <option value="FR">France</option>
                                <option value="ES">Spain</option>
                                <option value="IT">Italy</option>
                                <option value="NL">Netherlands</option>
                                <option value="BE">Belgium</option>
                                <option value="SG">Singapore</option>
                                <option value="JP">Japan</option>
                                <option value="BR">Brazil</option>
                                <option value="IN">India</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fxVolume" className="form-label">
                                Estimated FX volume per month<span className="required">*</span>
                            </label>
                            <select
                                id="fxVolume"
                                name="fxVolume"
                                value={formData.fxVolume}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="0-10k">$0 - $10,000</option>
                                <option value="10k-100k">$10,000 - $100,000</option>
                                <option value="100k-500k">$100,000 - $500,000</option>
                                <option value="500k-1m">$500,000 - $1,000,000</option>
                                <option value="1m+">$1,000,000+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="paymentsPerMonth" className="form-label">
                                Estimated number of payments per month<span className="required">*</span>
                            </label>
                            <select
                                id="paymentsPerMonth"
                                name="paymentsPerMonth"
                                value={formData.paymentsPerMonth}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="0-10">0 - 10</option>
                                <option value="10-50">10 - 50</option>
                                <option value="50-100">50 - 100</option>
                                <option value="100-500">100 - 500</option>
                                <option value="500+">500+</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message" className="form-label">
                            What would you like to know about Wise Platform?<span className="required">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hearAbout" className="form-label">
                            How did you hear about Wise Platform?<span className="required">*</span>
                        </label>
                        <select
                            id="hearAbout"
                            name="hearAbout"
                            className="form-select"
                            required
                        >
                            <option value="">Please Select</option>
                            <option value="search">Search Engine</option>
                            <option value="social">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="event">Event/Conference</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="privacy-text">
                        <p>
                            Wise is committed to protecting and respecting your privacy, and we'll only use
                            your personal information to administer your account and to provide the products
                            and services you requested from us. From time to time, we would like to contact
                            you about our products and services, as well as other content that may be of
                            interest to you. If you consent to us contacting you for this purpose, please
                            tick below to say how you would like us to contact you:
                        </p>
                    </div>

                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="receiveComms"
                            name="receiveComms"
                            checked={formData.receiveComms}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <label htmlFor="receiveComms" className="checkbox-label">
                            I agree to receive other communications from Wise.
                        </label>
                    </div>

                    <div className="privacy-text">
                        <p>
                            In order to provide you the content requested, we need to store and process your
                            personal data. If you consent to us storing your personal data for this purpose,
                            please tick the checkbox below.
                        </p>
                    </div>

                    <div className="form-checkbox-group">
                        <input
                            type="checkbox"
                            id="allowStorage"
                            name="allowStorage"
                            checked={formData.allowStorage}
                            onChange={handleChange}
                            className="form-checkbox"
                            required
                        />
                        <label htmlFor="allowStorage" className="checkbox-label">
                            I agree to allow Wise to store and process my personal data.<span className="required">*</span>
                        </label>
                    </div>

                    <div className="privacy-text">
                        <p>
                            You can unsubscribe from these communications at any time. For more information
                            on how to unsubscribe, our privacy practices, and how we are committed to
                            protecting and respecting your privacy, please review our{' '}
                            <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                        </p>
                    </div>

                    <button type="submit" className="btn-submit" onClick={() => navigate("/dashboard")}>
                        Get in touch
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="contact-footer">
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <h3>Company and team</h3>
                            <ul className="footer-links">
                                <li><a href="#">Company and team</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Service status</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Wise Products</h3>
                            <ul className="footer-links">
                                <li><a href="#">International money transfers</a></li>
                                <li><a href="#">Wise account</a></li>
                                <li><a href="#">International debit card</a></li>
                                <li><a href="#">Receive money</a></li>
                                <li><a href="#">Wise Platform</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul className="footer-links">
                                <li><a href="#">News and blog</a></li>
                                <li><a href="#">Help centre</a></li>
                                <li><a href="#">Currency converter</a></li>
                                <li><a href="#">SWIFT/BIC codes</a></li>
                                <li><a href="#">Rate alerts</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Follow us</h3>
                            <div className="footer-social">
                                <a href="#" className="social-icon">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© Wise Europe SA 2025</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
