import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from './Counter';

import "./App.css";
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const name = "react";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본단위 px
    padding: "1rem" // 다른 단위 사용 시 문자열로 설정
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: "test1",
        email: "test1@email.com"
    },
    {
        id: 2,
        username: "test2",
        email: "test2@email.com"
    },
    {
        id: 3,
        username: "test3",
        email: "test3@email.com"
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

  return (
    <>
      <Wrapper>
      {/* 주석은 화면에 보이지 않습니다.*/}
      /* 중괄호로 감싸지 않으면 화면에 보입니다.*/
        <Hello name="react"
                color="red"
                isSpecial // boolean 값을 설정할 시에는 값의 이름만 지정해 주어도 true 값이 된다.
          // 화면에 보이지 않습니다.
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <Hello />
      </Wrapper>

      <Counter />  

      <InputSample />

      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
