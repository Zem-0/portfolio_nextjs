import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Driven by a passion for technology and innovation, I am an experienced developer specializing in AI, machine learning, and full-stack development. With a solid background in building dynamic applications and deploying robust solutions, I am committed to leveraging my skills to solve real-world problems. I thrive in collaborative environments where I can contribute my expertise in Python, TensorFlow, React.js, and other cutting-edge technologies. Beyond coding, I am dedicated to continuous learning, exploring new technologies, and refining my abilities to stay ahead in the ever-evolving tech landscape..
          </p>
          <p className="about-grid-info-text">
          As I continue to grow in my career, I am eager to contribute my skills and enthusiasm to projects that push boundaries and make a positive impact. Whether it is developing scalable AI models or crafting responsive web applications, I am dedicated to leveraging technology to drive innovation and drive meaningful change.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item ">React.js</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Pyhthon</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Machine Learning</li>
            <li className="about-grid-info-list-item">Artificial Intelligence</li>
            <li className="about-grid-info-list-item">Tensorflow</li>
            <li className="about-grid-info-list-item">Keras</li>
            <li className="about-grid-info-list-item">Langchains</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Deep Learning</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/pic.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
