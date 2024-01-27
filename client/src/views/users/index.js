import { useEffect, useState } from "react";
import Axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsers(response.data);
    });
  }, [boolean]);

  const deleteUser = async (userId) => {
    //Asinkrono brisanje jer je nekad postavljao novu listu setUsers prije nego je dovršio brisanje pa je nekad trebalo 2x kliknuti za brisanje
    await Axios.delete(`http://localhost:3001/users/${userId}/delete`);
    setUsers((prevUsers) => {
      // Filtriranje prethodne liste kako bi se dobila nova lista bez obrisane stavke
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
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
              <th>Email</th>
              <th>Created At</th>
              <th>Actions</th>
              <th>
                <a
                  type="button"
                  className="btn btn-primary float-end"
                  href="/users/create"
                >
                  Add User
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.createdAt
                      ? user.createdAt.substring(0, 10)
                      : "Nema podatka"}
                  </td>
                  <td colSpan="2">
                    <a
                      href={`/users/${user.id}/update`}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => {
                        deleteUser(user.id);
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

export default User;
