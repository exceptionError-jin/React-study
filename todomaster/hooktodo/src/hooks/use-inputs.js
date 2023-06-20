import { useState } from "react";

// useInputs 커스텀 훅
// initialValue를 초기값으로 갖는 values와 값을 변경하는 함수 setValues를 반환함
const useInputs = (initialValue) => {
    // values 상태값과 값을 변경하는 함수 setValues를 useState를 통해 생성
    const [values, setValues] = useState(initialValue);

    // 입력값이 변경될 때 실행되는 onChange 함수
    const onChange = (event) => {
        // event 객체에서 name과 value를 추출하여
        // 이전 values 상태를 복사하고 변경된 값을 업데이트함
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    // values, onChange, setValues를 반환
    return [values, onChange, setValues];
};

export default useInputs;
