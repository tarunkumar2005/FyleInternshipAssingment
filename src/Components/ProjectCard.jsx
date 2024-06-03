import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = ({ title, desc, isActive, onClick }) => {
  return (
    <div 
      className={`card border-0 rounded-0 px-3 py-2 ${isActive ? 'bg-danger text-white' : 'bg-light text-black'}`} 
      style={{ 
        cursor: 'pointer', 
        transform: isActive ? 'scale(1.05)' : 'scale(1)', 
        transition: 'transform 0.3s ease-in-out' 
      }} 
      onClick={onClick}
    >
      <div className="card-body">
        <h5 className={`card-title font-semibold text-2xl text-redish tracking-[0] leading-26 uppercase py-[1%] ${isActive ? 'text-white' : 'text-black'}`}>{title}</h5>
        <p className={`card-text font-poppins font-normal text-base tracking-[0] leading-28 ${isActive ? 'text-white' : 'text-black'}`}>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;