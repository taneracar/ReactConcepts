import React, { useEffect, useState } from "react";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const [pending, setPending] = useState(false);
  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) {
        setPending(false);
        setUsersList(result?.users);
      } else {
        setUsersList([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleFetch(){
    fetchAllUsers();
  }
/*   useEffect(() => {
    fetchAllUsers();
  }, []); */
  console.log(usersList);

  if(pending){
    return <h1>Fetching Users! please wait</h1>
  }
  return (
    <div>
      <h1>All Users Lists</h1>
      <button onClick={handleFetch}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((user) => (
            <li key={user?.id}>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! please try again..</h1>
        )}
      </ul>
    </div>
  );
};

export default Users;
