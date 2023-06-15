import React from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom";



const MainPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("todoId"));

    const navigate = useNavigate();

    const onClickNavigateTodo = () => {
        // window.location.href = "/todo/2";
        // location.href는 모든 정보를 다 가져오기때문에 쓰면안됨
        //navigate를 써야함
        navigate("/todo/1");

        //뒤로가기
        // navigate(-1);

        //주소만 바꾸고싶을떄
        // setSearchParams({
        //     todoId: 3
        // })
    }

    return (
        //태그명이 없는 태그를 fragment라고 부른다
        <React.Fragment>
            <div>main</div>
            <div>:)</div>
            <button onClick={onClickNavigateTodo}>todo페이지로 이동</button>
            {/* a태그는 새로운페이지로 이동, 모든정보 다시 받아야함 */}
            <a href="/todo/3">TODOPAGE</a>
            {/* 링크는 한번에 안가져옴 리엑트에서는 링크로 이동시켜야함 */}
            <Link to="/todo/4">TODOPAGE</Link>
        </React.Fragment>
    )
}

export default MainPage;