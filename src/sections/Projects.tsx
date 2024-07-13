import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/Screenshot 2024-07-13 000231.png",
      projectName: "Lip Reader Application",
      projectLink: "https://lip-reading-model.streamlit.app/",
      projectDescription:
        "Developed a deep learning model for a lip reading application, achieving an 85% accuracy rate in speech recognition, reducing communication errors by 20%.",
      projectTech: [
        "Deep Learning",
        "CNN",
        "Streamlit",
        "OpenCV",
        "Tensorflow",
        
      ],
      projectExternalLinks: {
        github: "https://github.com/Zem-0/lip-reader-",
        externalLink: "https://lip-reading-model.streamlit.app/",
      },
    },
    {
      image: "/Screenshot 2024-07-05 114400.png",
      projectName: "Multi Health Risk Assessment",
      projectLink: "https://multi-risk-assessment.streamlit.app/",
      projectDescription:
        "Engineered an application enabling users to input data and predict disease risk with 90% accuracy using advanced machine learning models for breast cancer, tumors, heart disease, and diabetes.",
      projectTech: [
        "Machine Learning",
        "Streamlit",
        "Python",
        "Supervised Learning",

      ],
      projectExternalLinks: {
        github: "https://github.com/Zem-0/Multi-Risk-Assessment-",
        externalLink: "https://multi-risk-assessment.streamlit.app/",
      },
    },
    {
      image: "/Screenshot 2024-07-01 195812.png",
      projectName: "Multi-Media Content Creator using AI",
      projectLink: "https://netlify.com",
      projectDescription:
        "• Engineered an application enabling users to input data and predict disease risk with 90% accuracy using advanced machine learning models for breast cancer, tumors, heart disease, and diabetes.",
      projectTech: [
        "React",
        "Next.js",
        "Gemini API",
        "MongoDB",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/Zem-0/AI-Content-creator",
        externalLink: "https://ai-content-creator-eight.vercel.app/",
      },
    },
    {
      image: "/1.jpg",
      projectName: "Brain Tumor Detection useing ML ",
      projectLink: "https://github.com/Zem-0/Brain_Tumor-Detection-DeepLearning-model",
      projectDescription:
        "Engineered an application enabling users to input data and predict disease risk with 90% accuracy using advanced machine learning models for Brain Tumor Detection",
      projectTech: [
        "CNN",
        "Deep Learning",
        "Python",
        "Unsupervised Learning",

      ],
      projectExternalLinks: {
        github: "https://github.com/Zem-0/Brain_Tumor-Detection-DeepLearning-model",
        externalLink: "https://github.com/Zem-0/Brain_Tumor-Detection-DeepLearning-model",
      },
    },
    {
      image: "/Screenshot 2024-07-13 002806.png",
      projectName: "Personalised College Enquiry Chatbot using Langchain",
      projectLink: "https://zem-0-enquiry-bot-groq-app-wonhvu.streamlit.app/",
      projectDescription:
        "Development and Integration: Created intelligent chatbots using state-of-the-art NLP models from Hugging Face, enhancing user interaction and satisfaction",
      projectTech: [
        "Lanchain",
        "GROQ API",
        "Python",
        "Hugging Face",
        "Chat Bot",
        "NLP",

      ],
      projectExternalLinks: {
        github: "https://github.com/Zem-0/chatbot",
        externalLink: "https://zem-0-enquiry-bot-groq-app-wonhvu.streamlit.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
