import { useRef, useState } from "react"

function UseRef() {

    const count = useRef(0);
    const htmlRef = useRef(null);
    //useRef에 담기는 값은 객체로서 current속성에 담긴다.
    //리린더링되어도 값을 유지(캐싱)!!!, 상태는 아니기에 ref의 값이 변해도 리랜더는 되지 않음

    const[forceReRender, setForceReRender] = useState(true);

    const onChangeUseRef = () => {
        // htmlRef.current.style.color = 'red';
        //위와같이 dom api에 접근하는 방식은 리엑트에서 지양하고있음
        count.current += 1;
    }

    //강제로 리랜더링 시키기 위해 만듦
    const onForceReRender = () => {
        //true, false반복
        setForceReRender((prev) => !prev);
    }

    console.log(count.current);

    return (
        <div>
            {/* forceReRender가 true일 때만 show를 보여줌 */}
            {forceReRender && <div>show</div>}
            <div ref={htmlRef}>colors</div>
            <button onClick={onChangeUseRef}>카운트 추가</button>
            <button onClick={onForceReRender}>리랜더링</button>
        </div>
    )
}

export default UseRef;