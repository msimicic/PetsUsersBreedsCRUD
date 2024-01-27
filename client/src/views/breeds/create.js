import Axios from "axios";
import { Formik, Form, Field } from "formik";

function Create() {
  const initialValue = {
    name: "",
  };

  const onSubmit = (data, { resetForm }) => {
    Axios.post("http://localhost:3001/breeds/create", data).then(() => {
      resetForm({ data: initialValue });
    });
  };

  return (
    <div className="col-6 mx-auto">
      <h1>Create Breed</h1>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="breedName" className="form-label">
              Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="breedName"
              name="name"
              placeholder="Enter a breed name..."
              autoComplete="off"
            />
          </div>
          <a href="/breeds" className="btn btn-link">
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
