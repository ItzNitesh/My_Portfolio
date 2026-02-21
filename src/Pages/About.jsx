import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import updatedCV from '../assets/pdf/Nitesh Cv.pdf';
import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import JavaScriptLogo from '../assets/images/js.png';
import tailwindcsslogo from '../assets/images/tailwind-css.svg';
import bootstraplogo from '../assets/images/bootstrap-logo.png';
import reactLogo from '../assets/images/react.png';
import sassLogo from '../assets/images/sass.png';
import wpLogo from '../assets/images/wp.png';
import figmaLogo from '../assets/images/figma.png';
import canvalogo from '../assets/images/canva.webp';

const About = () => {
  const [text] = useTypewriter({
    words: [
      'Front End Developer',
      'Website Developer',
      'UX/UI Developer',
      'Freelancer',
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="about">
      <section className="about-section">
        <div className="container">
          <div className="about-me">
            <h5>
              I'm Nitesh Gupta and{' '}
              <span
                className="blood-red"
                style={{ margin: '10px', fontFamily: 'Sofadi One' }}
              >
                {text}
              </span>
              <Cursor cursorColor="red" />
            </h5>
            <p>
              I am a dedicated and passionate Web Developer, committed to
              delivering high-quality and customized websites. Leveraging my
              full potential and effort, I ensure the creation of bespoke
              websites that align with your specific demands and ideas. My
              skills and imagination are applied efficiently to craft unique and
              successful web solutions.
              <br />
              <br />
              With a solid foundation in front-end technologies and an eye for
              design, I specialize in creating responsive, user-centric websites
              that not only look great but also function seamlessly across all
              devices. Whether it’s building static websites, dynamic platforms,
              or e-commerce solutions, I deliver results that align perfectly
              with business objectives. By staying updated with the latest
              trends, I ensure every project reflects modern standards and
              delivers an engaging user experience.
            </p>
          </div>

          {/* Work Experience & Skills */}
          <div className="row mt-4">
            {/* Work Experience */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="workExperience">
                <h4>Work Experience</h4>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">Radiumbox Phil Technology (p) Ltd</span>
                          <br />
                          <span>Front End Developer (Web Designer)</span>
                          <br />
                          <span>Nov 2022 June 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                     <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">Maxtra Technologies</span>
                          <br />
                          <span>Front End Developer (Web Designer)</span>
                          <br />
                          <span>June 2024 Feb 2025</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">
                            GTF Technologies
                          </span>
                          <br />
                          <span>Front End Developer</span>
                          <br />
                          <span>Feb 2025 - PRESENT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="skill">
                <h4>Skills</h4>
                <div className="skill-sec">
                  {[
                    htmlLogo,
                    cssLogo,
                    JavaScriptLogo,
                    bootstraplogo,
                    tailwindcsslogo,
                    reactLogo,
                    sassLogo,
                    wpLogo,
                    figmaLogo,
                    canvalogo,
                  ].map((logo, idx) => (
                    <span className="logo" key={idx}>
                      <img src={logo} alt="Skill Logo" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button (Optional) */}
          <div className="mt-4 text-center">
            <a
              href={updatedCV}
              download="Nitesh Gupta Pdf"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
