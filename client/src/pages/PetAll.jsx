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

const PetAll = () => {
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
            ],
            img: dogImg1
        },
        {
            type: "Rabbit",
            backgroundClass: "rabbit-background",
            breeds: [
                { breed: "Holland Lop", age: "1 year", gender: "Female", healthStatus: "Healthy", adoptionFee: "$90", img: rabbitImg1 },
                { breed: "Netherland Dwarf", age: "2 years",gender: "Female", healthStatus: "Healthy", adoptionFee: "$90", img: rabbitImg2},
        { breed: "Flemish Giant", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$100", img: rabbitImg3 }
      ],
      img: rabbitImg1
    },
    {
      type: "Parrot",
      backgroundClass: "parrot-background", // Parrot background if needed
      breeds: [
        { breed: "Macaw", age: "1 year", gender: "Male", healthStatus: "Healthy", adoptionFee: "$100", img: parrotImg1 },
        { breed: "Cockatiel", age: "2 years", gender: "Female", healthStatus: "Healthy", adoptionFee: "$110", img: parrotImg2 },
        { breed: "African Grey", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$120", img: parrotImg3 }
      ],
      img: parrotImg1
    },
    {
      type: "Cat",
      backgroundClass: "cat-background", // Background class for cat
      breeds: [
        { breed: "Persian Cat", age: "1 year", gender: "Female", healthStatus: "Healthy", adoptionFee: "$100", img: catImg1 },
        { breed: "Siamese", age: "2 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$110", img: catImg2 },
        { breed: "Maine Coon", age: "3 years", gender: "Male", healthStatus: "Healthy", adoptionFee: "$120", img: catImg3 }
      ],
      img: catImg2
    }
  ];

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={`pet-profile ${pets.find(pet => pet.type === petType)?.backgroundClass}`}>

      <Slider {...settings}>
        {pets.map((pet, index) => (
          <div key={index} className="color">
            <img src={pet.img} alt={pet.type} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <br/>

      <div className="breed-details">
        {pets.map((pet, index) => (
          <div key={index} className="pet-info">
            <h2>{pet.type}</h2>
            <div className="breeds-container">
              {pet.breeds.map((breed, i) => (
                <div key={i} className="breed-card">
                  <img src={breed.img} alt={breed.breed} className="breed-image" />
                  <h3 style={{ color: getRandomColor() }}>{breed.breed}</h3>
                  <p style={{ color: getRandomColor() }}><strong>Age:</strong> {breed.age}</p>
                  <p style={{ color: getRandomColor() }}><strong>Gender:</strong> {breed.gender}</p>
                  <p style={{ color: getRandomColor() }}><strong>Health Status:</strong> {breed.healthStatus}</p>
                  <p style={{ color: getRandomColor() }}><strong>Adoption Fee:</strong> {breed.adoptionFee}</p>
                  <button className="adopt-btn" onClick={handleSubmit}>Adopt</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};

export default PetAll;