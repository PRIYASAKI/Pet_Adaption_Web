import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import dogImg1 from "../assets/dog1.jpg";
import dogImg2 from "../assets/dog2.jpg";
import dogImg3 from "../assets/dog3.jpg";
import catImg1 from "../assets/cat2.jpg";
import catImg2 from "../assets/cat3.jpg";
import catImg3 from "../assets/cat4.jpg";
import rabbitImg1 from "../assets/rab1.jpg";
import rabbitImg2 from "../assets/rab2.jpg";
import rabbitImg3 from "../assets/rab3.jpg";
import parrotImg1 from "../assets/p1.jpg";
import parrotImg2 from "../assets/p2.jpg";
import parrotImg3 from "../assets/p3.jpg";
import logo from '../assets/logo.jpg';

const PetProfile = () => {
  const { petType } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/application");
  };

  const pets = [
    {
      type: "Dog",
      backgroundClass: "dog-background",
      breeds: [
        { breed: "Golden Retriever", age: "2 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$150", img: dogImg1 },
        { breed: "Labrador", age: "3 years", gender: "Female", healthStatus: "Healthy", adoptionFee: "$130", img: dogImg2 },
        { breed: "German Shepherd", age: "4 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$180", img: dogImg3 }
      ]
    },
    {
      type: "Rabbit",
      backgroundClass: "rabbit-background",
      breeds: [
        { breed: "Holland Lop", age: "1 year", gender: "Female", healthStatus: "Healthy", adoptionFee: "$90", img: rabbitImg1 },
        { breed: "Netherland Dwarf", age: "2 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$80", img: rabbitImg2 },
        { breed: "Flemish Giant", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$100", img: rabbitImg3 }
      ]
    },
    {
      type: "Parrot",
      backgroundClass: "parrot-background",
      breeds: [
        { breed: "Macaw", age: "1 year", gender: "Male", healthStatus: "Healthy", adoptionFee: "$100", img: parrotImg1 },
        { breed: "Cockatiel", age: "2 years", gender: "Female", healthStatus: "Healthy", adoptionFee: "$110", img: parrotImg2 },
        { breed: "African Grey", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$120", img: parrotImg3 }
      ]
    },
    {
      type: "Cat",
      backgroundClass: "cat-background",
      breeds: [
        { breed: "Persian Cat", age: "1 year", gender: "Female", healthStatus: "Healthy", adoptionFee: "$100", img: catImg1 },
        { breed: "Siamese", age: "2 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$110", img: catImg2 },
        { breed: "Maine Coon", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$120", img: catImg3 }
      ]
    }
  ];

  // Find the selected pet type
  const selectedPet = pets.find((pet) => pet.type.toLowerCase() === petType.toLowerCase());

  if (!selectedPet) {
    return <h2>Pet type not found</h2>;
  }

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className={`pet-profile ${selectedPet.backgroundClass}`}>
      {/* Navbar from HomePage */}
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
        <button className="login-btn" onClick={() => navigate("/login")}>LOGIN/SIGNUP</button>
      </header>

      <Slider {...settings}>
        {selectedPet.breeds.map((breed, index) => (
          <div key={index} className="color">
            <img src={breed.img} alt={selectedPet.type} className="carousel-image" />
          </div>
        ))}
      </Slider>

      <br />

      <div className="breed-details">
        <h2>{selectedPet.type}</h2>
        <div className="breeds-container">
          {selectedPet.breeds.map((breed, i) => {
            const color = getRandomColor(); // Generate color once per breed
            return (
              <div key={i} className="breed-card">
                <img src={breed.img} alt={breed.breed} className="breed-image" />
                <h3 style={{ color }}>{breed.breed}</h3>
                <p style={{ color }}><strong>Age:</strong> {breed.age}</p>
                <p style={{ color }}><strong>Gender:</strong> {breed.gender}</p>
                <p style={{ color }}><strong>Health Status:</strong> {breed.healthStatus}</p>
                <p style={{ color }}><strong>Adoption Fee:</strong> {breed.adoptionFee}</p>
                <button className="adopt-btn" onClick={handleSubmit}>Adopt</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default PetProfile;
