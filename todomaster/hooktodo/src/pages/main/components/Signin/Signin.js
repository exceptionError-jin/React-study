import { useState } from 'react';
import BasicButton from '../../../../components/Button/Button'
import * as S from '../../style'
import useInput from '../../../../hooks/use-input';

const SignInForm = ()=>{

    //커스텀 훅으로 넣어 훅 함수 재사용가능하도록 사용
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();

    const onPressSignIn = (e) => {
        e.preventDefault();
        console.log("sign-in");
    };

    return (
        <S.Form>
            <S.InputBox>
                <label>이메일</label> 
                <input value={email} onChange={onChangeEmail}/>
            </S.InputBox>
            <S.InputBox>
                <label>비밀번호</label>
                <input value={password} onChange={onChangePassword}/>
            </S.InputBox>
            <BasicButton 
            size={"full"} 
            shape={"default"} 
            variant={"primary"}
            onClick={onPressSignIn} 
            >
                로그인
            </BasicButton>
        </S.Form>
    )
}
export default SignInForm