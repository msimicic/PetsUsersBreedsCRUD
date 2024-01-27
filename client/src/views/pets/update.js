import { useEffect, useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";

function Modalni() {
  let { id } = useParams();
  const initialValue = {
    name: "",
    weight: "",
    age: "",
    user_id: "",
  };

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  //Poziva se kada se u select listi promijeni stanje
  const handleUserChange = (event) => {
    setSelectedUserId(event.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const updatePet = (data, { resetForm }) => {
    const updatedData = { ...data, user_id: selectedUserId };
    Axios.put(`http://localhost:3001/pets/${id}/update`, updatedData, id).then(
      () => {
        resetForm({ updatedData: initialValue });
      }
    );
  };

  return (
    <>
      <Formik initialValues={initialValue} onSubmit={updatePet}>
        <Form>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Edit Pet</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter a new name..."
                />
                <Field
                  type="number"
                  step="0.1"
                  className="form-control mb-2"
                  name="weight"
                  autoComplete="off"
                  placeholder="Enter a new weight..."
                />
                <Field
                  type="number"
                  className="form-control"
                  name="age"
                  autoComplete="off"
                  placeholder="Enter a new age..."
                />
                <label htmlFor="owner">Owner</label>
                <select
                  id="owner"
                  name="user_id"
                  className="form-select w-50"
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
              </Modal.Body>

              <Modal.Footer>
                <a href="/pets" className="btn btn-secondary">
                  Close
                </a>
                <Button variant="primary" type="submit">
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Modalni;
