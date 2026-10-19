import { ThemeProvider } from "styled-components";
import { lazy, Suspense, useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import NotFound from "./components/NotFound";
import styled from "styled-components";

const Contact = lazy(() => import("./components/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const SkipLink = styled.a`
  position: absolute;
  left: 12px;
  top: 0;
  transform: translateY(-120%);
  z-index: 100;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  &:focus {
    top: 12px;
    transform: none;
  }
`

const Body = styled.main`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const path = window.location.pathname;
  const isHome = path === "/" || path === "/index.html";
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        {isHome ? (
          <>
            <SkipLink href="#main">Skip to content</SkipLink>
            <Navbar />
            <Body id="main">
              <HeroSection />
              <About />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Suspense fallback={null}>
                  <Contact />
                </Suspense>
              </Wrapper>
              {openModal.state &&
                <Suspense fallback={null}>
                  <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                </Suspense>
              }
            </Body>
            <Footer />
          </>
        ) : (
          <NotFound />
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
