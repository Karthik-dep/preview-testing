/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  background-color: #000000;
  color: #ffffff;
  outline: 0;
  border: 0;
  padding: 2rem 4rem;
  border-radius: 1rem;

  & svg {
    font-size: 2rem;
  }
`;

function NavBtn({ children, path }) {
  return <StyledNav to={path}>{children}</StyledNav>;
}

export default NavBtn;
