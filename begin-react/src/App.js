import React, {useMemo, useReducer, createContext} from 'react';
import produce from "immer"
import "./App.css";
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(user) {
  console.log("활성 사용자 수를 새는중...");
  return user.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case "CREATE_USER":
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   users: state.users.concat(action.user)
      // };
    case "TOGGLE_USER":
      return produce(state, draft => {
        const user = draft.users.find(user => user.id===action.id);
        user.active = !user.active;
      })

      // return {
      //   ...state,
      //   users: state.users.map(user => 
      //     user.id === action.id
      //       ? {...user, active: !user.active}
      //       : user
      //   )
      // };
    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id===action.id);
        draft.users.splice(index, 1);
      })
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error("Unhandled action");
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList 
        users = {users}
      />
      <div>
        활성 사용자 수: {count}
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
