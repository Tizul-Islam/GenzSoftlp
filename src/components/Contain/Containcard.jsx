import React from "react";
import "./contain.css";
import { useNavigate } from 'react-router-dom';
const projects = [
  {
    title: "Web App Development",
    company: "Rieauplabs",
    description: "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
    size: "large",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop" // Computer setup
  },
  {
    title: "Mobile App Development",
    company: "Roche Bangladesh Ltd.",
    description: "Developing innovative and native mobile apps for Android, iOS platforms.",
    size: "small",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500&auto=format&fit=crop" // Code on screen
  },
  {
    title: "AI & ML",
    company: "Expressions Ltd.",
    description: "Expertly crafted AI and ML solutions to transform your organization and drive smart decision-making.",
    size: "small",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop" // Developer working
  },
  {
    title: "UI/UX Design",
    company: "Department of ICT",
    description: "Creating user-centric and elegant designs to boost usability and engagement.",
    size: "large",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop" // Woman at computer
  },
  {
    title: "Cloud Solutions",
    company: "Virtual Reality System",
    description: "Secure, scalable, and efficient cloud infrastructure for your digital products.",
    size: "large",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format&fit=crop" // VR headset
  },
  {
    title: "E-Commerce Solutions",
    company: "NAEM",
    description: "Powerful e-commerce platforms tailored to your business model.",
    size: "small",
    image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500&auto=format&fit=crop" // Laptop with code
  },
  {
    title: "DevOps Consulting",
    company: "Tech Innovations Inc.",
    description: "Streamline your software development process with DevOps practices.",
    size: "small",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop" // AI visualization
  },
  {
    title: "Blockchain Development",
    company: "Crypto Solutions",
    description: "Leverage blockchain for secure and transparent transactions.",
    size: "small",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&auto=format&fit=crop" // Blockchain concept
  },
  {
    title: "Data Analytics",
    company: "Business Intelligence Corp",
    description: "Transform data into actionable insights for better decision-making.",
    size: "small",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop" // Data visualization
  },
  {
    title: "Cloud Migration Tool",
    company: "Data Systems Ltd.",
    description: "Automated cloud infrastructure migration",
    size: "small",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop" // Cloud computing
  },
  {
    title: "IoT Home System",
    company: "Smart Living Technologies",
    description: "Home automation control center",
    size: " large",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop" // Smart home
  },
  {
    title: "DevOps Automation",
    company: "Cloud Native Systems",
    description: "CI/CD pipeline management",
    size: "large",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop" // Server room
  },
  {
    title: "Cybersecurity Training",
    company: "SafeNet Academy",
    description: "Interactive security awareness platform",
    size: "small",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop" // Cybersecurity
  },
  {
    title: "Health Monitoring App",
    company: "Wellness Tech",
    description: "Personal health tracking system",
    size: "small",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop" // Medical tech
  },
  {
    title: "AR Navigation",
    company: "Future Vision Labs",
    description: "Augmented reality city guide",
    size: "large",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop" // AR glasses
  },
];

const Gallery = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details')

  };



  return (
    <div className="gallery-container">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-card ${project.size}`}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="card-content">
            <h2>{project.title}</h2>
            <h3>{project.company}</h3>
            <p>{project.description}</p>
            <button className="card-button" onClick={handleClick}>View Project</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;