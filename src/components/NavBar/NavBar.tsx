import React from "react"
import Logo from "../Logo";
import MenuToggle from "./MenuToogle";
import MenuLinks from "./MenuLinks";
import NavBarContainer from "./NavBarContainer";

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w={"200px"}
        color={"white"}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar