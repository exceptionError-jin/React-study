import { useCallback, useState } from "react";


function UseCallback(){

    const [count, setCount] = useState(0);

    //UseCallback은 리랜더링 되어도 함수가 재선언되지않음
    //장점 : 여러 state가 변해도 의존성배열이 변하지 않는이상 재선언되지 않음

    //최초 랜더링때 count값이 0이기 때문에 onAddNumber는 1
    const onAddNumber = useCallback(() => {
        setCount(count + 1);
    }, 
    //count값이 바뀔때마다 함수 재선언
    [count]);

    //최초 랜더링때 count값이 0이기 때문에 onMinusNumber는 -1
    const onMinusNumber = useCallback(() => {
        setCount(count - 1);
    }, 
    //count값이 바뀔때마다 함수 재선언
    [count]);

    /*
    리랜더링 시에
    함수의 로직 및 연산에 필요한 데이터에 변화가 없다면
    해당 함수는 다시 재선언될 필요가 있을까?

    재선언될수도 있고 아닐수도 있다

    반복문, callback props, 무거운 연산 등
    위와같은 경우에 usecallback사용하는게 좋음
    */

    return (
        <div>
            <button onClick={onAddNumber}>+</button>
            {count}
            <button onClick={onMinusNumber}>-</button>
        </div>
    )
}

export default UseCallback;