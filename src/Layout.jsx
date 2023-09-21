import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className = "container-fluid">
            <div className = "row justify-content-center mt-3">
                <div className = "col-md-4 text-center">
                    <p className = "lead">This is HNG Stage 3 Project for Frontend Track</p>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout