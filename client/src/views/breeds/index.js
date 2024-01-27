import { useEffect, useState } from "react";
import Axios from "axios";

function Breed() {
  const [breeds, setBreeds] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/breeds").then((response) => {
      setBreeds(response.data);
    });
  }, [boolean]);

  const deleteBreed = async (breedId) => {
    //Asinkrono brisanje jer je nekad postavljao novu listu setBreeds prije nego je dovršio brisanje pa je nekad trebalo 2x kliknuti za brisanje
    await Axios.delete(`http://localhost:3001/breeds/${breedId}/delete`);
    setBreeds((prevBreeds) => {
      // Filtriranje prethodne liste kako bi se dobila nova lista bez obrisane stavke
      const updatedBreeds = prevBreeds.filter((breed) => breed.id !== breedId);
      return updatedBreeds;
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
              <th>Created At</th>
              <th>Actions</th>
              <th>
                <a
                  type="button"
                  className="btn btn-primary float-end"
                  href="/breeds/create"
                >
                  Add Breed
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {breeds.map((breed, key) => {
              return (
                <tr key={key}>
                  <td>{breed.id}</td>
                  <td>{breed.name}</td>
                  <td>
                    {breed.createdAt
                      ? breed.createdAt.substring(0, 10)
                      : "Nema podatka"}
                  </td>
                  <td colSpan="2">
                    <a
                      href={`/breeds/${breed.id}/update`}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => {
                        deleteBreed(breed.id);
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

export default Breed;
