import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s ease, transform 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Rafiullah</Logo>
        <EmailLink href={`mailto:${Bio.email}`} aria-label={`Email ${Bio.email}`}>
          <EmailOutlinedIcon fontSize="small" />
          {Bio.email}
        </EmailLink>
        <Nav aria-label="Footer">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          {Bio.github && <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></SocialMediaIcon>}
          {Bio.linkedin && <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></SocialMediaIcon>}
          {Bio.facebook && <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></SocialMediaIcon>}
          {Bio.insta && <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></SocialMediaIcon>}
        </SocialMediaIcons>
        <Copyright>
          &copy; 2026 Rafiullah. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;