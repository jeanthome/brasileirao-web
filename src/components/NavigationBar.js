import React, {Component} from 'react';
import {Nav, Navbar, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class NavigationBar extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a href="#">Início</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/classificacao" activeClassName="active">
                            <NavItem>Classificação</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/jogos" activeClassName="active">
                            <NavItem>Lista de jogos</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/times" activeClassName="active">
                            <NavItem>Times</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown title="Cadastro" id="dropdown-register">
                            <LinkContainer to="/cadastro/jogador">
                                <MenuItem>Jogador</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/cadastro/partida">
                                <MenuItem>Partida</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;

