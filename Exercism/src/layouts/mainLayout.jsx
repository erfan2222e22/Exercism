import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return(
            <main>
                <Outlet></Outlet>
            </main>

        )
}
export default MainLayout