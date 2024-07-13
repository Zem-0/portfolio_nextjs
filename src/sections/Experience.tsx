import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Nexus Info",
      role: "AI/ML Intern",
      url: "https://nexusinfo.in/",
      start: "June 2024",
      end: "July 2024",
      shortDescription: [
        "Developed Intelligent Chatbots: Architected and implemented intelligent chatbots using state-of-the-art NLP models from Hugging Face, enhancing user interaction efficiency by 35% and boosting customer retention rates.",
        " Contributed actively to team projects, fostering a collaborative work environment and achieving project milestones within deadlines.",
        "Utilized Python and TensorFlow to design and deploy dynamic chatbot interfaces, resulting in a 25% increase in engagement and real-time query resolution capabilities.",
        "Enhanced User Engagement: Led initiatives to integrate advanced AI functionalities into chatbot systems, enhancing user engagement metrics and driving better user experience outcomes",
      ],
    },
    {
      name: "Oasis Infobyte",
      role: "Machine Learning Intern",
      url: "https://oasisinfobyte.com/",
      start: "April 2024",
      end: "June 2024",
      shortDescription: [
        "Deep Learning Model Development: Developed high-accuracy deep learning models for brain tumor classification.",
        "Advanced NLP Chatbots: Created intelligent chatbots using cutting-edge NLP models, improving user interaction by 35%.",
        "Automation Implementation: Implemented automation techniques reducing response times by 30%.",
        "TensorFlow Expertise: Utilized TensorFlow for dynamic chatbot interfaces, enhancing real-time query resolution by 25%.",
      ],
    },
    {
      name: "Cisco",
      role: "Network Engineer Intern",
      url: "https://www.netacad.com/",
      start: "April 2024",
      end: "June 2024",
      shortDescription: [
        "IoT Solution Development: Developed and implemented IoT solutions for connected devices, improving operational efficiency by 20%.",
        "Network Optimization: Applied Cisco networking protocols to optimize IoT network performance, resulting in a 15% reduction in downtime.",
        "Team Collaboration: Collaborated with cross-functional teams to integrate IoT solutions seamlessly.",
        "Problem Solving: Resolved complex network issues and optimized performance through strategic troubleshooting and configuration adjustments.",
      ],
    },
    {
      name: "Code Clause",
      role: "Web Developer Intern",
      url: "https://internship.codeclause.com/",
      start: "June 2024",
      end: "July 2024",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Upwork",
      role: "Freelancer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2023",
      end: "Present",
      shortDescription: [
        "Client Collaboration: Successfully managed multiple freelance projects on Upwork, collaborating closely with clients to deliver tailored web solutions.",
        "Technology Expertise: Leveraged proficiency in web development technologies such as HTML, CSS, JavaScript, and frameworks like React.js and Node.js to create responsive and dynamic websites.",
        "Positive Feedback: Received consistent positive feedback and ratings from clients on Upwork for delivering high-quality, user-friendly web solutions that meet business objectives.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
