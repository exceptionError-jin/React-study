import React from "react"
import { useParams } from "react-router-dom";
import BasicButton from "../../components/Button/Button"
import styled from "styled-components";
import todoAddModal from "./component/Modal/add-modal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoPage = () => {

    const params = useParams();
    console.log(params);
    const onAddToDo = () => toast("Wow so easy !");

    return (
        //태그명이 없는 태그를 fragment라고 부른다
        // <React.Fragment>
        //     <div>todo</div>
        //     <div>:)</div>
        // </React.Fragment>

        <todoAddModal onAddToDo={onAddToDo}>
            <S.Wrapper>
                <S.Container>
                    <S.Title>List</S.Title>
                    <S.Content></S.Content>
                    <S.ButtonBox>
                        <BasicButton variant={"primary"} size={"full"} onClick={onAddToDo}>
                            추가
                        </BasicButton>
                    </S.ButtonBox>
                </S.Container>
                <ToastContainer/>
            </S.Wrapper>
        </todoAddModal>
        

    )
}

export default TodoPage;

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
`;

const ButtonBox = styled.div`
    width: 100%;
`;

const S = {
    Wrapper,
    Container,
    Title,
    Content,
    ButtonBox
};