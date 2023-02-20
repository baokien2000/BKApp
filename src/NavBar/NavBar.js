import React, { useContext, useRef, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AppContext } from '../Context/AppContext';

function NavBar({ setActivePage, active, setTabToggle, TabToggle }) {
    const { Language, ChoiseLanguage } = useContext(AppContext)
    let Language_Button = (lang) => {
        ChoiseLanguage(lang === 1 ? 1 : 0)
    }
    const navItem = ['Home', 'Introduce', 'Skill', 'Project', 'Certificate', 'Contact']
    const TabsToggle = (item) => {
        setActivePage(item)
        setTabToggle(!TabToggle)
    }
    return (
        <div className="AppNav">
            <Navbar collapseOnSelect expand="lg" bg="#27282c" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        {navItem.map((item, index) => {
                            return (

                                <span key={index}
                                    className={"nav-item " + (active === item ? "active" : "")}
                                    onClick={() => TabsToggle(item)}>
                                    <div className="nav-link"  ><span><b>{item}</b></span></div>

                                </span>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="">
                    <div className='Toggle_switch'>
                        <p style={{ color: (Language === 1 ? "Gray" : "White") }} className='VN' onClick={() => Language_Button(0)}><b>VN</b></p>
                        <p style={{ color: (Language === 1 ? "White" : "Gray") }} className='EN' onClick={() => Language_Button(1)}><b>EN</b></p>
                    </div>
                </Nav.Link>
            </Navbar>
        </div >
    );

}
export default NavBar;

