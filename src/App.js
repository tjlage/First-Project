import { useState } from "react/cjs/react.development";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([])
  const addNewUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: username, age: age, id: Math.random().toString() }]
    })
  };
  return (
    <div className="App">
      <AddUser addUser={addNewUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
