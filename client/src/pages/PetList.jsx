import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import dogImg from "../assets/dog1.jpg";
import catImg from "../assets/cat3.jpg";
import rabbitImg from "../assets/rab1.jpg";
import parrotImg from "../assets/p1.jpg";
import logo from "../assets/logo.jpg";

const pets = [
  {
    type: "Dog",
    breeds: [
      { breed: "Golden Retriever", quote: "Loyalty in every paw!" },
      { breed: "Labrador", quote: "Friendly and outgoing!" },
      { breed: "German Shepherd", quote: "Courage and confidence!" }
    ],
    img: dogImg
  },
  {
    type: "Cat",
    breeds: [
      { breed: "Persian Cat", quote: "Purr-fectly adorable!" },
      { breed: "Siamese", quote: "Elegant and talkative!" },
      { breed: "Maine Coon", quote: "Gentle giant!" }
    ],
    img: catImg
  },
  {
    type: "Rabbit",
    breeds: [
      { breed: "Holland Lop", quote: "Hopping into your heart!" },
      { breed: "Netherland Dwarf", quote: "Tiny but full of energy!" },
      { breed: "Flemish Giant", quote: "Biggest, fluffiest friend!" }
    ],
    img: rabbitImg
  },
  {
    type: "Parrot",
    breeds: [
      { breed: "Macaw", quote: "Talks, squawks, and steals hearts!" },
      { breed: "Cockatiel", quote: "Whistles its way into your heart!" },
      { breed: "African Grey", quote: "Intelligent and witty!" }
    ],
    img: parrotImg
  }
];

const PetList = () => {
  const navigate = useNavigate();

  const handleSeeMore = (type) => {
    navigate(`/pet-profile/${type.toLowerCase()}`);
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
            <li><a href="#">PET LIST</a></li>
            <li><a href="/petscare">PET CARE TIPS</a></li>
            <li><a href="#">FORM</a></li>
          </ul>
        </nav>
        <button className="login-btn" onClick={() => navigate("/login")}>LOGIN/SIGNUP</button>
      </header>
      
      {/* Pet List */}
      <div className="pet-list">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <img src={pet.img} alt={pet.type} className="pet-image" />
            <h3>{pet.type}</h3>
            <div className="breeds-container">
              {pet.breeds.map((breed, i) => (
                <div key={i} className="breed-box">
                  <p className="breed">{breed.breed}</p>
                  <p className="quote">"{breed.quote}"</p>
                </div>
              ))}
            </div>
            <button className="see-more-button" onClick={() => handleSeeMore(pet.type)}>
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
