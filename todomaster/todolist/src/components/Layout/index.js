//jsx는 html만 리턴함
//큰 차이는 없으므로 js로 통일시키는게 좋음

//index로 통일 시 import 한단계 경로가 낮아짐

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>    
        </>

    )
}

export default Layout;