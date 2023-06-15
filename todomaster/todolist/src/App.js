import { ThemeProvider } from 'styled-components';
import './App.css';
import router from './routes/routing';
import { RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </ThemeProvider>
    // <BrowserRouter>
    // {/* html5를 지원하는 브라우저의 url의 변화를 감지 */}
    //   <Routes>
    //     {/* 하위에 있는 route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할(경로 컴포넌트) */}

    //   <Route element={<Layout/>}>
    //     <Route path='/' element={<MainPage/>}/>
    //     <Route path='/todo' element={<TodoPage/>}/>
    //   </Route>

    //   </Routes>
    // </BrowserRouter>
  )

  /* 
    BrowserRouter (url감지(주소감지))
    Routes(하위의 route 중 경로에 맞는 컴포넌트 보여줌)
    outlet -> Routes에 의해 가지고 와진 컴포넌트를 outlet으로 가져올 수 있음
    (Route안에 있는 것중 주소에 맞는거 가져온다는 뜻)
  */
}

export default App;
