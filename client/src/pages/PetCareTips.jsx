import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dogImage from "../assets/dog.webp"; // Add relevant images in the assets folder
import catImage from "../assets/cat.jpg";
import birdImage from "../assets/bird.jpg";
import "./styles.css";
import logo from "../assets/logo.jpg"; // Assuming logo is in the assets folder

const PetCareTips = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>PET WORLD</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/pets">PET LIST</a></li>
            <li><a href="/petscare">PET CARE TIPS</a></li>
            <li><a href="#">FORM</a></li>
          </ul>
        </nav>
        <button className="login-btn" onClick={() => navigate("/login")}>LOGIN/SIGNUP</button>
      </header>

      {/* Pet Care Tips */}
      <div className="back">
        <div className="petcare-container">
          <h1 className="petcare-title">🐾 Pet Care Tips 🐾</h1>

          <div className="petcare-sections">
            {/* Dog Care Section */}
            <div className="petcare-card dog-section">
              <button className="petcare-button" onClick={() => toggleSection("dog")}>
                🐶 Dog Care Tips <span>{openSection === "dog" ? "▲" : "▼"}</span>
              </button>
              {openSection === "dog" && (
                <div className="petcare-content">
                  <img src={dogImage} alt="Dog" className="petcare-image" />
                  <ul>
                    <li>Provide fresh water and nutritious food daily.</li>
                    <li>Take your dog for daily walks and playtime.</li>
                    <li>Regular vet check-ups and vaccinations are a must.</li>
                    <li>Groom your dog regularly to keep them clean and healthy.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Cat Care Section */}
            <div className="petcare-card cat-section">
              <button className="petcare-button" onClick={() => toggleSection("cat")}>
                🐱 Cat Care Tips <span>{openSection === "cat" ? "▲" : "▼"}</span>
              </button>
              {openSection === "cat" && (
                <div className="petcare-content">
                  <img src={catImage} alt="Cat" className="petcare-image" />
                  <ul>
                    <li>Provide a clean litter box and fresh food daily.</li>
                    <li>Ensure your cat has a scratching post to prevent furniture damage.</li>
                    <li>Play with your cat to keep them active and happy.</li>
                    <li>Keep your cat’s vaccinations up to date.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bird Care Section */}
            <div className="petcare-card bird-section">
              <button className="petcare-button" onClick={() => toggleSection("bird")}>
                🐦 Bird Care Tips <span>{openSection === "bird" ? "▲" : "▼"}</span>
              </button>
              {openSection === "bird" && (
                <div className="petcare-content">
                  <img src={birdImage} alt="Bird" className="petcare-image" />
                  <ul>
                    <li>Provide a spacious and clean cage with fresh water.</li>
                    <li>Ensure a balanced diet with seeds, fruits, and vegetables.</li>
                    <li>Let your bird fly outside the cage for exercise (in a safe space).</li>
                    <li>Clean the cage regularly to maintain hygiene.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareTips;
