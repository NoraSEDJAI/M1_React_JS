import { useCallback, useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

const users = ['Eva', 'Aude', 'Anne', 'Marc', 'Sansom']

function UserList() {
  const [searchCriteria, setSearchCriteria] = useState('')
  const handleSearch = useCallback(event => setSearchCriteria(event.target.value), [])

  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(() => {
    setFilteredUsers(users.filter(user => user.toLowerCase().includes(searchCriteria.toLowerCase())))
  }, [searchCriteria])

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
      <div className="container mt-3">
        <div className="row">
          {
            filteredUsers.map((user, i) =>
              <div className="col-xs-6 col-sm-4 col-md-3 mb-3" key={i}>
                <UserProfile user={user} />
              </div>
            )}
          <div className="d-flex col-3 mb-3 justify-content-center align-items-center" >
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