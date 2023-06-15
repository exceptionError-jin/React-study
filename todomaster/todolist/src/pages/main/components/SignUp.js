import BasicButton from '../../../components/Button/Button';
import * as S from '../components/style'

const SignUpForm = () => {
    return(
        <S.Form>
            <S.InputBox><label>아이디</label> <input/></S.InputBox>
            <S.InputBox><label>비밀번호</label> <input/></S.InputBox>
            <S.InputBox><label>비밀번호 확인</label> <input/></S.InputBox>
            <BasicButton size={"full"} shape={"default"} variant={"primary"}>회원가입</BasicButton>
        </S.Form>
    )
}

export default SignUpForm;