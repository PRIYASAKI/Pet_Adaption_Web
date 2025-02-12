import React from "react";
import PetCard from "../components/PetCard"; 
import pet1Image from "../assets/pet-1.jpg";  
import pet2Image from "../assets/pet-2.jpg";  
import pet3Image from "../assets/pet-3.jpg";  

function PetList() {
  const pets = [
    { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3, image: pet1Image },
    { id: 2, name: "Bella", breed: "Bulldog", age: 2, image: pet2Image },
    { id: 3, name: "Luna", breed: "Beagle", age: 4, image: pet3Image },
  ];

  return (
    <div className="pet-list">
      <h1>Available Pets</h1>
      <div className="pet-cards">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;
