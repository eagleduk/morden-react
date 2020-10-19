import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span><br />
        </div>
    );
}

function UserList({users}) {

    return (
        <div>
            {
                // key 값이 있어야 효율적으로 랜더링을 할 수 있다.
                users.map((user,index) => (<User user={user} key={user.id}/>))
            }
        </div>
    )
}

export default UserList;