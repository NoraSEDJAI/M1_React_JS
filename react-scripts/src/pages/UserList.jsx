import { useCallback, useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";

const users = ["Eva", "Aude", "Anne", "Marc", "Sansom"];

function UserList() {
  const [searchCriteria, setSearchCriteria] = useState("");
  const handleSearch = useCallback(
    (event) => setSearchCriteria(event.target.value),
    [],
  );

  const [newUser, setNewUser] = useState("");
  const handleNewUserChange = useCallback(
    (event) => setNewUser(event.target.value),
    [],
  );

  const handleCreateUser = () => {
    if (newUser.trim() !== "") {
      setFilteredUsers([...filteredUsers, newUser]);
      setNewUser("");
    }
  };

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.toLowerCase().includes(searchCriteria.toLowerCase()),
      ),
    );
  }, [searchCriteria]);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recherche"
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-6 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nouveau User"
                value={newUser}
                onChange={handleNewUserChange}
              />
              <button className="btn btn-primary" onClick={handleCreateUser}>
                Créer
              </button>
            </div>
          </div>

          {filteredUsers.map((user, i) => (
            <div className="col-xs-6 col-sm-4 col-md-3 mb-3" key={i}>
              <UserProfile user={user} />
            </div>
          ))}
          <div className="d-flex col-12 mb-3 justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
