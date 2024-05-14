import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavBar from "./Nav/NavBar";

function AppLayout() {
  return (
    <>
      <div>
        <Logo />
        <NavBar />
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
