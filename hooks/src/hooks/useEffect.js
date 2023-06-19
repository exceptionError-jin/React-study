import { useEffect, useState } from "react";
import TimerModal from "./timer-modal";

function UseEffect(){

    /*
    UseEffect사용이유 

    1. 페이지가 mount되었을 때 실행 = window.onload(페이지 처음 실행)
    2. state는 비동기이고 state가 바뀌고 난 다음에 있어야할 이벤트는 UseEffect로 구현해야한다.
    (state는 비동기로 동작 -> state 변화 이후 실행할 effect(함수, 기능) 관리)
    3. 페이지가 unmount되었을 때는 return을 사용하여 컴포넌트가 DOM에서 제거 되었을 때
        실행 할 effect를 관리
    */

    const [isOpenTimerModal, setIsOpenTimerModal] = useState(false);

    //페이지 열렸을 때 최초 1회만 실행
    useEffect(() => {
        console.log('mount');
    }, 
    //의존성 배열 값이 바뀔때마다 리랜더링됨
    [isOpenTimerModal]);

    return (
        <div>
            {isOpenTimerModal && <TimerModal/>}
            {/* setIsOpenTimerModal은 비동기이기떄문에 동기적은 함수 실행이 불가능하다.*/}
            <button onClick={() => setIsOpenTimerModal(prev => !prev)}>
                실행
            </button>
        </div>
    );
}

export default UseEffect;