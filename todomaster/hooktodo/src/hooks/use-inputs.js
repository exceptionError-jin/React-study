import { useState } from "react";

// useInputs 커스텀 훅
// initialValue를 초기값으로 갖는 values와 값을 변경하는 함수 setValues를 반환함
//useinputs를 만든 이유 : state를 하나로 만들기 위해

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

    /*state의 불변성
        state가 바뀌는 조건 : 이전 값과 현재 값이 달라야함
    
        state가 객체일 때 state는 deep equal을 통해 객체 내 키값의 데이터가 변화가 있는지 확인하고
        상태를 업데이트함

        그러나 이러한 과정에서 새로운 객체를 선언하여 새로운 참조 메모리 주소값을 할당하면
        리엑트는 deep equal을 하지 않고 메모리 주소값이 달라졌으므로 상태를 업데이트함
   
        따라서 데이터 객체일 때 깊은 복사를 통해 새로운 객체를 만들어주어 상태 업데이트 최적화를 진행한다.

        +

        원본 데이터의 훼손이 일어나면 하나의 state는 다양한 컴포넌트에서 구독하고 있을 가능성이 있다
        참조 데이터가 수정되면 현재 이 데이터를 참조하고 있는 컴포넌트에서 예외 상황이 발생할 수 있다
        사이트 이펙트의 배제
    */

    // values, onChange, setValues를 반환
    return [values, onChange, setValues];
};

export default useInputs;
