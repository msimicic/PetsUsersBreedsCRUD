import { useEffect, useState } from "react";
import Axios from "axios";

function Pet() {
  const [pets, setPets] = useState([]);
  const [owners, setOwners] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/pets").then((response) => {
      setPets(response.data);
    });
    Axios.get("http://localhost:3001/users").then((response) => {
      setOwners(response.data);
    });
    Axios.get("http://localhost:3001/breeds").then((response) => {
      setBreeds(response.data);
    });
  }, [boolean]);

  // Pomoćna funkcija za pronalaženje imena vlasnika na temelju ID-a, mapiramo dolje kroz Pets i u tablici pod owners se ova funkcija poziva i daje joj se id Peta kojeg uspoređujemo u ovoj funkciji s ownerima koji su dohvaćeni
  const findOwnerName = (userId) => {
    const owner = owners.find((owner) => owner.id === userId);
    return owner ? owner.name : "Nema vlasnika";
  };

  //ista pomoćna funkcija za pristupanje imenu pasmine preko pet.breed_id podatka kojeg joj dajemo
  const findBreedName = (breedId) => {
    const breed = breeds.find((breed) => breed.id === breedId);
    return breed ? breed.name : "Nema podatka o pasmini";
  };

  const deletePet = async (petId) => {
    //Asinkrono brisanje jer je nekad postavljao novu listu setUsers prije nego je dovršio brisanje pa je nekad trebalo 2x kliknuti za brisanje
    await Axios.delete(`http://localhost:3001/pets/${petId}/delete`);
    setPets((prevPets) => {
      // Filtriranje prethodne liste kako bi se dobila nova lista bez obrisane stavke
      const updatedPets = prevPets.filter((pet) => pet.id !== petId);
      return updatedPets;
    });
    setBoolean(!boolean);
  };

  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Age</th>
              <th>Breed</th>
              <th>Owner</th>
              <th>Created At</th>
              <th>Actions</th>
              <th>
                <a
                  type="button"
                  className="btn btn-primary float-end"
                  href="/pets/create"
                >
                  Add Pet
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, key) => {
              return (
                <tr key={key}>
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.weight}</td>
                  <td>{pet.age}</td>
                  <td>{findBreedName(pet.breed_id)}</td>
                  <td>{findOwnerName(pet.user_id)}</td>
                  <td>
                    {pet.createdAt
                      ? pet.createdAt.substring(0, 10)
                      : "Nema podatka"}
                  </td>
                  <td colSpan="2">
                    <a
                      href={`/pets/${pet.id}/update`}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => {
                        deletePet(pet.id);
                      }}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Pet;
