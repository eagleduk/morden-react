import React, {useState, useRef} from "react";

function InputSample() {
    const nameInput = useRef();

    const [inputs ,setInputs] = useState({
        name: "",
        nickname: ""
    });

    const {name,nickname} = inputs;

    const onChange = (e) => {
        const {name,value} = e.target;
        // 기존 객체를 복사후 값을 업데이트
        setInputs({
            ...inputs,
            [name]: value // name을 변수로 사용 아마 :: 객체[key값] 과 비슷한듯.
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                value={name} 
                onChange={onChange}
                ref={nameInput}
            />
            <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name}({nickname})</b>
            </div>
        </div>
    );
}

export default InputSample;