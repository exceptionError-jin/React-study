import { useNavigate } from 'react-router-dom';
import BasicButton from '../../../../components/Button/Button'
import * as S from '../../style'

const SignInForm = ()=>{

    //커스텀 훅으로 넣어 훅 함수 재사용가능하도록 사용
    // const [email, onChangeEmail] = useInput();
    // const [password, onChangePassword] = useInput();

    const navigation = useNavigate();

    const onPressSignIn = (e) => {
        e.preventDefault();

        console.log(e.target.email.value, e.target.password.value);

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(email === "test" && password === "test"){
            return navigation('/todo/1');
        }
        return alert("아이디와 비밀번호를 확인해주세요.");
    };

    return (
        <S.Form onSubmit={onPressSignIn}>
            <S.InputBox>
                <label>이메일</label> 
                <input name = 'email'/>
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input name = 'password'/>
            </S.InputBox>
            <BasicButton 
            size={"full"} 
            shape={"default"} 
            variant={"primary"}
            >
                로그인
            </BasicButton>
        </S.Form>
    )
}
export default SignInForm