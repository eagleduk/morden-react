import React from "react";

function User({user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove}) {

    return (
        <div>
            {
                // key 값이 있어야 효율적으로 랜더링을 할 수 있다.
                users.map(
                    (user,index) => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                    />
                    )
                )
            }
        </div>
    )
}

export default UserList;