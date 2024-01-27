import Axios from "axios";
import { Formik, Form, Field } from "formik";

function Create() {
  const initialValue = {
    name: "",
    email: "",
  };

  const onSubmit = (data, { resetForm }) => {
    Axios.post("http://localhost:3001/users/create", data).then(() => {
      resetForm({ data: initialValue });
    });
  };

  return (
    <div className="col-6 mx-auto">
      <h1>Create User</h1>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="userName"
              name="name"
              placeholder="Enter a user name..."
              autoComplete="off"
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter an email..."
              autoComplete="off"
            />
          </div>
          <a href="/users" className="btn btn-link">
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
