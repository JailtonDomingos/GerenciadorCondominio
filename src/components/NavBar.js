import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

const NavBar = ( props ) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>LOGO</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/apartamentos' activeStyle>
                        Apartamentos
                    </NavLink>
                    <NavLink to='/condominos' activeStyle>
                        Condominos
                    </NavLink>
                    <NavLink to='/reservas' activeStyle>
                        Reservas  
                    </NavLink>
                    <NavLink to='/avisos' activeStyle>
                        Avisos
                    </NavLink>
                </NavMenu>
                <NavBtn> 
                    <NavBtnLink to='/singout' onClick={ props.event }>Sair</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
