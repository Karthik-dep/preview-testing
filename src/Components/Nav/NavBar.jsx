import styled from "styled-components";
import NavBtn from "./NavBtn";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10rem;
  margin-bottom: 10rem;

  .active {
    color: #e6ff94;
  }
`;

function NavBar() {
  return (
    <nav>
      <Ul>
        <NavBtn path="/">
          <FaHome />
          <span>Dashboard</span>
        </NavBtn>
        <NavBtn path="/settings">
          <IoIosSettings /> <span>Settings</span>
        </NavBtn>
        <NavBtn path="/profile">
          <CgProfile /> <span>Profile</span>
        </NavBtn>
      </Ul>
    </nav>
  );
}

export default NavBar;
