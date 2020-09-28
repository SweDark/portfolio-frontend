import React from 'react';
import { Ul} from '../../elements'
import {Link} from "gatsby"
const NavMenu = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/" className="navmenu">Home</Link></li>
      <li><Link to="/" className="navmenu">About me</Link></li>
      <li><Link to="/" className="navmenu">Contact me</Link></li>
    </Ul>
  )
}
 export default NavMenu