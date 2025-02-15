import React from "react";
import { Link } from "react-router-dom";

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.breed} - {pet.age} years old</p>
      <Link to={`/pets/${pet.id}`} className="btn">Show Details</Link>
    </div>
  );
}

export default PetCard;
