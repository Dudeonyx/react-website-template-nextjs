import { useEffect, useReducer } from 'react';
import {
  Nav,
  NavContainer,
  Logo,
  NavLinksContainer,
  NavLink,
  SignInButtonContainer,
  SignInButton,
  SideBarMenu,
  SideBarMenuContainer,
} from './NavElements';
import SideBar from './SideBar';

export default function NavBar() {
  const [showSideBar, toggleShowSideBar] = useReducer((s) => !s, false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 768 && showSideBar) {
      toggleShowSideBar();
    }
  });
  return (
    <Nav>
      <SideBar showSideBar={showSideBar} toggleShowSideBar={toggleShowSideBar} />
      <NavContainer>
        <Logo>dolla</Logo>
        <NavLinksContainer>
          <NavLink>
            <a>About</a>
          </NavLink>
          <NavLink>
            <a>Discover</a>
          </NavLink>
          <NavLink>
            <a>Services</a>
          </NavLink>
          <NavLink>
            <a>Sign Up</a>
          </NavLink>
        </NavLinksContainer>
        <SignInButtonContainer>
          <SignInButton>Sign In</SignInButton>
        </SignInButtonContainer>
        <SideBarMenuContainer>
          <SideBarMenu onClick={toggleShowSideBar} />
        </SideBarMenuContainer>
      </NavContainer>
    </Nav>
  );
}
