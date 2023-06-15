import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../pages/main';
import TodoPage from '../pages/todo';
import Layout from '../components/Layout';

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <MainPage/>
            },
            {
                path: 'todo/:todoId',
                element: <TodoPage/>
            }
        ]
    }

]);

export default router;//기본값으로 router를 export하겠다.