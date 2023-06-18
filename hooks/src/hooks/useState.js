import { useState } from "react"

function UseState(){

    // let count = 0;
    const[count, setCount] = useState(0);

    // 구조 분해 할당 -> const[count, setCount] = useState(0);
    /**
     * const, let[변수명, 바꿀 수 있는 함수] = useState(기본 값)
     * 
     * count가 state(상태)가 되서 변경 시 UseState(랜더링 함수) 재실행
     * 재실행한다는건 함수안에 들어있는 모든 값들을 다시 실행한다는 소리
     */

    const handleAddNumber = () => {
        setCount(count + 1);
        // console.log(count);
    }

    const handleMinusNumber = () => {
        setCount(count - 1);
        // console.log(count);
    }
    

    return (
        <div>
            <button onClick={handleAddNumber}>+</button>
            {count}
            <button onClick={handleMinusNumber}>-</button>
        </div>
    )
}

export default UseState;