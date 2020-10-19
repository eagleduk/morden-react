import React from "react";

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b 
                style={{
                    color: active ? "blue" : "black",
                    cursor: "pointer"
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {

    return (
        <div>
            {
                // key 값이 있어야 효율적으로 랜더링을 할 수 있다.
                users.map(
                    (user) => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                    )
                )
            }
        </div>
    )
}

export default UserList;