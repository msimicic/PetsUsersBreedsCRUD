import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";

function Modalni() {
  let { id } = useParams();
  const initialValue = {
    name: "",
    email: "",
  };

  const updateUser = (data, { resetForm }) => {
    Axios.put(`http://localhost:3001/users/${id}/update`, data, id).then(() => {
      resetForm({ data: initialValue });
    });
  };

  return (
    <>
      <Formik initialValues={initialValue} onSubmit={updateUser}>
        <Form>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
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
                  type="email"
                  className="form-control"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter a new email..."
                />
              </Modal.Body>

              <Modal.Footer>
                <a href="/users" className="btn btn-secondary">
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
