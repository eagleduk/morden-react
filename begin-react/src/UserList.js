import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;

    // component Mount, UnMount 시 실행
    useEffect(() => {
        //// component mount
        console.log("컴포넌트가 화면에 나타남");
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        return () => {
            //// component unmount
            console.log("컴포넌트가 화면에서 사라짐");
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
        }
    },[]);

    // useEffect 의 두번째 파라미터의 값이 component Mount, Update 시 실행
    useEffect(()=>{
        //// component mount, update 되고 실행
        console.log("user값이 설정됨");
        return () => {
            //// update 되기 직전 실행
            console.log("user값이 바뀌기 전");
        }
    },
    // 내부에서 값(함수)을 사용하고 있으면 넣어주는게 당연하다.
    [user]
    );

    useEffect(()=>{
        console.log("두번째 파라메터가 없으면 부모가 Component 가 랜더링, 리랜더링될 떄 사용한 만큼 로드된다.");
    });

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