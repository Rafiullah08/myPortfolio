import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { Bio } from '../../data/constants';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav as="header">
      <NavbarContainer as="nav" aria-label="Primary">
        <NavLogo href="#about" aria-label="Rafi Ullah home">
          <DiCssdeck size="3rem" /> <Span>Rafi Ullah</Span>
        </NavLogo>
        <MobileIcon
          as="button"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars aria-hidden="true" />
        </MobileIcon>
        <NavItems>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href='#skills'>Skills</NavLink></li>
          <li><NavLink href='#experience'>Experience</NavLink></li>
          <li><NavLink href='#projects'>Projects</NavLink></li>
          <li><NavLink href='#education'>Education</NavLink></li>
          <li><NavLink href='#contact'>Contact</NavLink></li>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.resume} download>Download CV</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(false)}>Contact</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.resume} download onClick={() => setIsOpen(false)}>Download CV</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
