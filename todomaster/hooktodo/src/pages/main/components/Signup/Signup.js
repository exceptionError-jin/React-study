import { useEffect, useState } from "react";
import BasicButton from "../../../../components/Button/Button";
import useInputs from "../../../../hooks/use-inputs";
import * as S from "../../style";

const SignUpForm = ({setIsFormLogin}) => {

  //onChangeForm이 use-inputs의 onChange와 같음
  //input의 데이터 값이 바뀔때마다 onChangeForm을 호출
  //그렇게 되면 onChange의 e가 주어지고 e.target이 input이기 때문에 e.target.name은 name이다
  //이제 그렇게 되면 input에 값을 입력하면 e.target.name에는 입력된 값이 들어감
  //간단히 말하면 key값의 value를 바꿔줌(name의 값을 key로 찾아서 값을 바꿔줌)
  const [{email, password, passwordConfirm}, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });
//비밀번호 확인 
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  useEffect(() => {
    if(password !== passwordConfirm){
      //비밀번호가 일치하지 않았을 때
      setIsPasswordConfirm(false);
    }
    //일치할 때
    return setIsPasswordConfirm(true);
  }, [password, passwordConfirm]);

//로그인 확인
  const handleSignUpSubmit = () => {
    if(!email || !password) return;
    if(!isPasswordConfirm) return;
    alert("회원가입 완료");
    setIsFormLogin(true);
  }

  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email"/>
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label> 
        <input onChange={onChangeForm} name="password"/>
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label> 
        <input onChange={onChangeForm} name="passwordfirm"/>
      </S.InputBox>
      <BasicButton 
      size={"full"} 
      shape={"default"} 
      variant={"primary"}
      onClick={handleSignUpSubmit}
      >
        회원가입
      </BasicButton>
    </S.Form>
  );
};
export default SignUpForm;
