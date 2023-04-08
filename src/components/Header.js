import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/' height='30' width='30'>
                <i className="fa-solid fa-blog" ></i>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}>
            <Collapse>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/BlogsPage'>
                            <i className='fa fa-blog fa-lg' /> Blogs
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </NavbarToggler>
        </Navbar>
    );
}

export default Header;