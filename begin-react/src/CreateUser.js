import React, { useContext, useRef, } from "react";
import UseInputs from "./useInputs"
import { UserDispatch } from "./App"

function CreateUser() {
    const dispatch = useContext(UserDispatch);
    const [{username,email}, onChange, reset] = UseInputs({
        username: "",
        email: "",
    });
    const nextId = useRef(4);

    const onCreate = () => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
        reset();
    }

    return (
        <div>
            <input 
                name="username" 
                placeholder="계정명" 
                onChange={onChange} 
                value={username}
            />
            <input 
                name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);