import React from 'react';
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper} from '../../elements/NavElements'
import logo from "../../assets/logo.svg"
import Hamburger from './Burger.jsx';
import PageLinks from "../../constants/links"

const Navbar = () => { 

    return (
         <NavWrapper>
            <Link to="/">
                <img src={logo} alt="My Logo" />
            </Link>
        
        <Hamburger />
         </NavWrapper>
    )
}

export default Navbar