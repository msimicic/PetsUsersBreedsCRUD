import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./views/layouts/layout";
import Home from "./views/home/index";

import Breed from "./views/breeds/index";
import CreateBreed from "./views/breeds/create";
import ModalniBreed from "./views/breeds/update";

import User from "./views/users/index";
import CreateUser from "./views/users/create";
import ModalniUser from "./views/users/update";

import Pet from "./views/pets/index";
import CreatePet from "./views/pets/create";
import ModalniPet from "./views/pets/update";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breed />} />
          <Route path="/breeds/create" element={<CreateBreed />} />
          <Route path="/breeds/:id/update" element={<ModalniBreed />} />

          <Route path="/users" element={<User />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:id/update" element={<ModalniUser />} />

          <Route path="/pets" element={<Pet />} />
          <Route path="/pets/create" element={<CreatePet />} />
          <Route path="/pets/:id/update" element={<ModalniPet />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
