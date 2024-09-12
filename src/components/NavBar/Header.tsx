import MenuToogle from "./MenuToogle";
import React from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <MenuToogle toggle={toggle} isOpen={isOpen} />
    )
}

export default Header