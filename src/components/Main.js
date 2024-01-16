import React, { useEffect, useState } from "react";
import UserInput from "./UserInput";
import userData from "../utils/data/users";
import UserList from "./UserList";
const Main = () => {
  const [users, setUsers] = useState(userData);

  const [show, setShow] = useState(true);

  const [selectedUser, setSelectedUser] = useState([]);
  const [text, setText] = useState('');


  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value.toLowerCase())

    if (value === "") {
      setUsers(userData);

      const matchFilter = userData.filter(
        (item) =>
          selectedUser.findIndex((item1) => item1.name === item.name) === -1
      );
      setUsers(matchFilter);
    } else {
      const match = userData.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setUsers(match);
    }
  };



  const selectHandler = (index) => {
    const list = users.slice(index, index + 1);
    setSelectedUser([...selectedUser, ...list]);
    const match = users.filter((user) => user !== list[0]);
    setUsers(match);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const RemoveHandler = (item) => {
    setUsers([...users, item]);
    const match = selectedUser.filter((user) => user !== item);
    setSelectedUser(match);
  };
  return (
    <section>
      <UserInput
        onChangeHandler={onChangeHandler}
        selectedUser={selectedUser}
        handleShow={handleShow}
        RemoveHandler={RemoveHandler}
        
      />
      <UserList users={users} selectHandler={selectHandler} show={show} />
    </section>
  );
};

export default Main;
