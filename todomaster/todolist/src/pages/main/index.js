import styled from 'styled-components';
import SignInForm from './components/SignIn';
import SignUpForm from './components/SignUp';
import { flexCenter } from '../../styles/common';
import { PALETTE } from '../../styles/theme';


const MainPage = () => {

    let isFormLogin = true;

    const onClickFormHeader = (e) => {
        const {innerText} = e.target
        console.log(innerText); 
        if(innerText === 'LOGIN') return isFormLogin = true;
        isFormLogin = false;
    }

    // const handleClickFormHeader = (e) => {
    // }

    return (
        <S.Container>
            <S.Header>
                <S.LoginHeader 
                isFormLogin={isFormLogin} 
                onClick={onClickFormHeader}>LOGIN</S.LoginHeader>
                <S.SignHeader 
                isFormLogin={isFormLogin} 
                onClick={onClickFormHeader}>SIGN</S.SignHeader>
            </S.Header>
                {isFormLogin ? <SignInForm/> : <SignUpForm/>}
                
        </S.Container>
        
    )
}

export default MainPage;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    ${flexCenter}
    flex-direction: column;
`

const Header = styled.div`
    width: 360px;
    height: 30px;
    display: flex;
    /* background-color: #00C7AE; */
    /* background-color: ${PALETTE.primary[300]}; */
    background-color: ${({theme}) => theme.PALETTE.primary[300]};

    div {
        ${flexCenter}
        width: 50%;
        cursor: pointer;

        :hover {
            opacity: 0.3;
        }
    }
`

const LoginHeader = styled.div`
    background-color: ${({theme, isFormLogin}) => isFormLogin ? '#E0E0E0' : '#F5F5F5' };
`

const SignHeader = styled.div`
    background-color: ${({theme, isFormLogin}) => isFormLogin ? '#F5F5F5' : '#E0E0E0' };
`

//styled-component는 변수를 속성으로 전달받아
//해당 변수 값에 따라서 스타일을 조정 할  수 있다 => style변경을 위해 dom api에 접근할 필요가 없다.

const S = {
    Container,
    Header,
    LoginHeader,
    SignHeader
}