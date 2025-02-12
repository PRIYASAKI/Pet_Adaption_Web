import React from 'react';
import './styles.css';
import logo from '../assets/logo.jpg';
import logo_1 from '../assets/logo_1.jpg';

const App = () => {
    return (
        <div className="app-container">
            <header className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1>PET WORLD</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#"><h3>HOME</h3></a></li>
                        <li><a href="#"><h3>PET LIST</h3></a></li>
                        <li><a href="#"><h3>PET CARE TIPS</h3></a></li>
                        <li><a href="#"><h3>FORM</h3></a></li>
                    </ul>
                </nav>
                <button className="login-btn">LOGIN/SIGNUP</button>
            </header>
            
            <div className="content"> {/* NEW WRAPPER */}
                <main className="hero-section">
                    <div className="hero-text">
                        <h1>Welcome to Pet World</h1>
                        <h3>"Find Your Furry Best Friend Today!" 🐾 🐈</h3>
                        <button className="cta-btn">CLICK HERE</button>
                    </div>
                    <div className="image-container">
                        <img src={logo_1} alt="Pet Image" className="hero-image" />
                    </div>
                </main>
            </div> 

            <footer className="footer">
                <div className="footer-links">
                    <a href="#">Link one</a>
                    <a href="#">Link two</a>
                    <a href="#">Link three</a>
                    <a href="#">Link four</a>
                </div>
                <div className="legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="socials">
                    <span role="img" aria-label="Instagram">📷</span>
                    <span role="img" aria-label="Facebook">📘</span>
                    <span role="img" aria-label="Twitter">🐦</span>
                </div>
            </footer>
        </div>
    );
};

export default App;