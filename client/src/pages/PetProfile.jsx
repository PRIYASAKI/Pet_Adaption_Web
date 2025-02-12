import React from "react";
import pet1Image from "../assets/pet-1.jpg"; 

function PetProfile({ match }) {
  const petId = match.params.id;
  const pet = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    health: "Healthy",
    personality: "Friendly and playful",
    image: pet1Image, 
    requirements: "Needs a large yard for running.",
  };

  return (
    <div className="pet-profile">
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>{pet.breed} - {pet.age} years old</p>
      <p><strong>Health:</strong> {pet.health}</p>
      <p><strong>Personality:</strong> {pet.personality}</p>
      <p><strong>Adoption Requirements:</strong> {pet.requirements}</p>
    </div>
  );
}

export default PetProfile;
