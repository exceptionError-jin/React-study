import styled from "styled-components";
import {
    flexAlignCenter,
    flexCenter,
    madalBackGround
} from "../../../../styles/common"

const TodoAddModal = ({onAddToDo}) => {
    return (
        <> 
        <span>ADD TODO LIST</span>
        <button>X</button>
        <input placeholder="제목 입력"></input>
        <textarea placeholder="내용 입력"></textarea>
        <button onClick={onAddToDo}>add</button>
        </>
    );
};

export default TodoAddModal;