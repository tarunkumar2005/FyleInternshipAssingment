import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Genderless Kei – Japan’s Hot",
    desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    imgSrc: "https://i.pinimg.com/236x/72/73/33/7273330b916e3e5c31961bcc806bc136.jpg"
  },
  {
    title: "Better Strategy & Quality",
    desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    imgSrc: "../images/projectimage1.png"
  },
  {
    title: "Genderless Kei – Japan’s Hot",
    desc: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    imgSrc: "https://i.pinimg.com/236x/82/91/92/829192bc01da4ec27ad484f5ed076bfc.jpg"
  }
];

const OutProjects = () => {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="container px-4 mb-[3%]" id="featured-3">
      <h1 className="font-cormorant-sc font-semibold text-2xl text-danger text-center py-2">Our Project</h1>
      <h1 className="font-cormorant-sc font-bold text-5xl text-dark text-center py-2">Why We Are Best</h1>
      <div className="container col-xxl-8 px-4 mx-auto">
        <div className="row align-items-center g-5 py-5">
          <div className="col-12 d-flex justify-content-center">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                <img src={projects[activeProject].imgSrc} className="img-fluid" width={770} height={567} alt="Project" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={index}
                    title={project.title}
                    desc={project.desc}
                    isActive={index === activeProject}
                    onClick={() => setActiveProject(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutProjects;