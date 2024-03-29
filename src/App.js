import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./App.css";
import { addUser, deleteUser, updateUser } from "./features/Users";
import { Button } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newuser , setNewName ] = useState("");
  return (
    <div className="App">
      <div> 
      <div className="addUser">
        <input
          type={"text"}
          placeholder={"Name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
          ></input>
        <input
        className="inputss"
          type={"text"}
          placeholder={"userName"}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          ></input>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
              );
              console.log(name, username);
            }}
            >
          Add User
        </Button>
          </div>
      </div>
      <div className="displayUsers">
        {userList.map((user, index) => {
          return (
            <div>

              <label key={index - 1}>{user.id}</label>
              <h1 key={index}>{user.name}</h1>
              <h1 key={index + 1}>{user.username}</h1>
              <input
                type={"text"}
                placeholder={"NewuserName"}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              ></input>
              <Button
              disabled={  newuser.length >8  ? false : true}
              
                onClick={() => {
                  console.log("userUpdated");
                  dispatch(updateUser({ id: user.id , username : newuser }));
                }}
              >
                Update userName
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                  console.log(dispatch(deleteUser({ id: user.id })));
                }}
              >
                Delete User
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
