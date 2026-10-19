import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import Reveal from '../Reveal'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'desktop', label: 'Desktop' },
  { key: 'mobile', label: 'Mobile' },
];

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const visibleProjects = toggle === 'all'
    ? projects
    : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects" as="section" aria-labelledby="projects-title">
      <Wrapper>
        <Reveal>
          <Title as="h2" id="projects-title">Projects</Title>
          <Desc>
            Products I've built, from my own SaaS platform to client e-commerce, booking and mobile apps.
          </Desc>
        </Reveal>
        <ToggleButtonGroup role="tablist" aria-label="Project categories">
          {categories.map((category, index) => (
            <React.Fragment key={category.key}>
              {index > 0 && <Divider />}
              <ToggleButton
                active={toggle === category.key}
                value={category.key}
                onClick={() => setToggle(category.key)}
                role="tab"
                aria-selected={toggle === category.key}
              >
                {category.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
