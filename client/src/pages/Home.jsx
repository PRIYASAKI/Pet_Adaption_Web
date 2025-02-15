import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from '../assets/logo.jpg';
import logo_1 from '../assets/logo_1.jpg';
import defaultProfile from '../assets/profile1.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState(defaultProfile);
    const [showDropdown, setShowDropdown] = useState(false);

    // Fetch username and profile image from local storage
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedProfile = localStorage.getItem('profileImage');

        console.log("Stored Username:", storedUsername); // Debugging
        console.log("Stored Profile Image:", storedProfile); // Debugging

        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedProfile) {
            setProfileImage(storedProfile);
        }
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
        console.log("Dropdown toggled. Username:", username); // Debugging
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('profileImage');
        alert("Logged Out successfully");
        navigate("/login");
    };

    return (
        <div className="app-container">
            <header className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1>PET WORLD</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/"><h3>HOME</h3></a></li>
                        <li><a href="/pets"><h3>PET LIST</h3></a></li>
                        <li><a href="/petscare"><h3>PET CARE TIPS</h3></a></li>
                        <li><a href="/application"><h3>FORM</h3></a></li>
                    </ul>
                </nav>

                {/* Profile Section */}
                <div className="profile-container">
                    <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="profile-img" 
                        onClick={toggleDropdown} 
                    />

                    {/* Dropdown */}
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <p><strong>{username ? username : "Guest"}</strong></p> {/* Display Logged-in Username */}
                            <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
                        </div>
                    )}
                </div>
            </header>
            
            <div className="content">
                <main className="hero-section">
                    <div className="hero-text">
                        <h1>Welcome to Pet World</h1>
                        <h3>"Find Your Furry Best Friend Today!" 🐾 🐈</h3>
                        <button className="cta-btn" onClick={() => navigate("/petall")}>CLICK HERE</button>
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

export default Home;
