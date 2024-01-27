import Axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

function Create() {
  const initialValue = {
    name: "",
    weight: "",
    age: "",
    user_id: "",
    breed_id: "",
  };

  const [users, setUsers] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedBreedId, setSelectedBreedId] = useState("");

  //Poziva se kada se u select owner listi promijeni stanje
  const handleUserChange = (event) => {
    setSelectedUserId(event.target.value);
  };
  //Poziva se kada se u select breed listi promijeni stanje
  const handleBreedChange = (event) => {
    setSelectedBreedId(event.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsers(response.data);
    });
    Axios.get("http://localhost:3001/breeds").then((response) => {
      setBreeds(response.data);
    });
  }, []);

  const onSubmit = (data, { resetForm }) => {
    const updatedData = {
      ...data,
      user_id: selectedUserId,
      breed_id: selectedBreedId,
    };
    Axios.post("http://localhost:3001/pets/create", updatedData).then(() => {
      resetForm({ updatedData: initialValue });
    });
  };

  return (
    <div className="col-6 mx-auto">
      <h1>Create Pet</h1>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="petName" className="form-label">
              Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="petName"
              name="name"
              placeholder="Enter a pet name..."
              autoComplete="off"
            />
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <Field
              type="number"
              step="0.1"
              className="form-control"
              id="weight"
              name="weight"
              placeholder="Enter weight..."
              autoComplete="off"
            />
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <Field
              type="number"
              className="form-control"
              id="age"
              name="age"
              placeholder="Enter age as a whole number..."
              autoComplete="off"
            />
            <label htmlFor="owner">Owner</label>
            <select
              id="owner"
              name="user_id"
              className="form-select w-25"
              aria-label="Default select example"
              value={selectedUserId}
              onChange={handleUserChange}
            >
              <option value="">Choose owner</option>
              {users.map((user, key) => {
                return (
                  <option key={key} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="breed">Breed</label>
            <select
              id="breed"
              name="breed_id"
              className="form-select w-25"
              aria-label="Default select example"
              value={selectedBreedId}
              onChange={handleBreedChange}
            >
              <option value="">Choose breed</option>
              {breeds.map((breed, key) => {
                return (
                  <option key={key} value={breed.id}>
                    {breed.name}
                  </option>
                );
              })}
            </select>
          </div>
          <a href="/pets" className="btn btn-link">
            Back
          </a>
          <button type="submit" className="btn btn-primary float-end">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Create;
