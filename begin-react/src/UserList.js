import React, {useContext} from "react";
import { UserDispatch } from "./App"

const User = React.memo(function User({user}) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);
    
    return (
        <div>
            <b 
                style={{
                    color: active ? "blue" : "black",
                    cursor: "pointer"
                }}
                onClick={() => dispatch({ type: "TOGGLE_USER", id })}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => dispatch({ type: "REMOVE_USER", id })}>삭제</button>
        </div>
    );
});

function UserList({users}) {

    return (
        <div>
            {
                // key 값이 있어야 효율적으로 랜더링을 할 수 있다.
                users.map(
                    (user) => (
                    <User 
                        user={user} 
                        key={user.id} 
                    />
                    )
                )
            }
        </div>
    )
}

export default React.memo(
    UserList,
    // users의 값이 변하지 않으면 component 를 리랜더링 하지 않는다.
    (prevProps, nextProps) => prevProps.users === nextProps.users
    );