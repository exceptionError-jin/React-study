import { useMemo, useRef, useState } from "react";


function UseMemo(){

    const arr = useRef([1, 2, 3, 4]);
    const [state1, setState] = useState(false);
    const [state2, setState2] = useState(false);

    //최초 랜더링시에만 연산값을 캐싱하고 그후에는 리랜더링되어도 재연산하지 않음
    const memoCount = useMemo(() => {
        arr.current.push(arr.length + 1);
        console.log(arr.current.length);
        return arr.current;
    }, 
    //!!!의존성배열(배열안의 값이 바뀌면 리랜더링됨)
    //배열이니깐 여러개 넣을 수도 있음(한개여도 배열)
    [state2]);

    

    console.log('리랜더링');

    return (
        <div>
            {memoCount.length}
            <button onClick={() => setState2(prev => !prev)}>+</button>

            {/* 실행문을 적지 않으면 함수의 매개변수로 이벤트객체가 오기때문에 
                이벤트 객체를 받지 않으려면 실행문을 적어야한다.(강제 리랜더링용) */}
            <button onClick={() => setState(prev => !prev)}>유지</button>
        </div>
    )
}

export default UseMemo;