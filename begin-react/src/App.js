import React, {useRef, useState} from 'react';

import "./App.css";
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        username: "test1",
        email: "test1@email.com",
        active: true
    },
    {
        id: 2,
        username: "test2",
        email: "test2@email.com",
        active: false
    },
    {
        id: 3,
        username: "test3",
        email: "test3@email.com",
        active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: ""
    })
    nextId.current += 1;
  }

  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  })

  const { username, email } = inputs;

  const onChange = e => {

  const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id != id));
  };

  const onToggle = id => {
    setUsers(
      users.map(
        user => user.id ===id
        ? {...user, active: !user.active}
        : user
      )
    );
  }

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
