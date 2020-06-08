import React, { useState } from 'react';
import { Navbar, 
         Nav, 
         NavLink, 
         NavItem,
         Collapse, 
         NavbarToggler 
} from 'reactstrap';

function NavbarComponent(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar dark expand="md">
            <div className='container'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar />
                <Nav className='nav-items'>
                    <NavItem className='nav-link'>
                        <NavLink href='#'>
                            Library
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href='#'>
                            Transport
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href='#'>
                            Finances
                        </NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href='#'>
                            Time Table
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;