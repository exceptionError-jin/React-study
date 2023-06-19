import { useEffect, useState } from "react";


function TimerModal(){

    const [count, setCount] = useState(0);

    //실행 후 이펙트 효과
    useEffect(() => {
        console.log('timer mount');
        let intervals = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        //unmount되었을 때 실행
        return () => {
            clearInterval(intervals);
            console.log('timer unmount');
        }
    }, []);
    /**
     * useEffect와 useMemo의 가장 큰 차이점은
     * 값을 캐싱하느냐이다.
     * 
     * 만약 특정값 캐싱을 위해 ref와 effect를 사용하면
     * 메모리 및 퍼포먼스의 낭비(누수)가 생김
     * 
     * 따라서 내가 특정한 값을 연산하여 캐싱하고싶으면 useMemo사용
     * 특정 state가 변했을 때 실행시키고 싶은 로직이 있을 뿐이라면 useEffect사용
     */


    return (
        <div>
            {count}
        </div>
    )
}

export default TimerModal;