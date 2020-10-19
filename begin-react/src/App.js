import React, {useRef, useState, useMemo} from 'react';

import "./App.css";
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(user) {
  console.log("활성 사용자 수를 새는중...");
  return user.filter(user => user.active).length;
}

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

  // 두번째 파라메터의 값이 변경될 때 첫번째 파라메터의 함수 수행
  const count = useMemo(()=>countActiveUsers(users),[users]);

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
      <div>
        활성 사용자 수: {count}
      </div>
    </>
  );
}

export default App;
