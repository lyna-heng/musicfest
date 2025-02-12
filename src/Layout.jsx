import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout({setStageCategory}) {
    return (
        <div>
            <Header setStageCategory={setStageCategory}/>
            <Outlet />
        </div>   
    )
}