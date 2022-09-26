import React from "react"
export function Flag() {
    return (
        <div className="flag">
          <div className="yellow"></div>
          <div className="blue"></div>
        </div>
    )
}

export function About() {
  return (
    <div className="about">
      <h2 className="about-position">Front-End Developer</h2>
      <h1 className="about-name">Olha Kucheruk</h1>
      <p className="about-text">
          Graduate front-end developer focusing on react and javascript development skills. I am expanding my javascript
          and react knowledge and eager to work and make a profit for a company. My dream is to achieve a senior level in 3-5 years
          and to get a C2 English level.
      </p>
    </div>
  )
}

export function Projects() {
  return (
    <div className="projects">
      <h3 className="project-title">Projects</h3>
  
      <ol className="projects-list">
        <li className="projects-item">
          <span className="project">
            <a href="https://olha36.github.io/My-portfolio/" 
                className="project-link">https://olha36.github.io/My-portfolio/
            </a>
            ................
            <span className="project-bracket">[</span> HTML5, CSS3 <span className="project-bracket">]</span> 
          </span>
            
        </li>
        <li className="projects-item">
          <span className="project">
            <a href="https://olha36.github.io/Guess-the-number-game/"
              className="project-link">https://olha36.github.io/Guess-the-number-game/
            </a>
            ................
            <span className="project-bracket">[</span>JavaScript<span className="project-bracket">]</span>
          </span>
              
        </li>
        <li className="projects-item">
          <span className="project">
            <a href="https://hellenglish.goit.global/"
              className="project-link">https://hellenglish.goit.global/
            </a>
            ................
            <span className="project-bracket">[</span> React.js, Node.js <span className="project-bracket">]</span>
          </span>
              
        </li>
      </ol>
    </div>
  )
}

export function Work() {
  return (
    <div className="work">
      <h3 className="work-experience">Work Experience</h3>

        <div className="work-details">
          <h4>Front-End Developer <span className="work-place">Freelance</span></h4>
          <p>December 2021 - up to now  <span className="work-bracket">|</span>  Ukraine</p>

          <ul className="work-responsibilities">
            <li>
              Develop web sites structure and maintain mobile version. 
            </li>
            <li>
              Perform basic javascript functions to make the site work.
            </li>
            <li>
              Style web site according to the template. 
            </li>
            <li>
              Use figma when it is needed. 
            </li>
          </ul>
        </div>

        <div className="work-details"> 
          <h4>English coach <span className="work-place">  Hedgehog</span></h4>
          <p>August 2021 - January 2022  <span className="work-bracket">|</span>  Ukraine</p>

          <ul className="work-responsibilities">
            <li>
              Provide English classes for employees. 
            </li>
            <li>
              Prepare new employees for their work organising customer support classes.
            </li>
            <li>
              Give feedback. 
            </li>
          </ul>
        </div>

        <div className="work-details">
          <h4>English teacher <span className="work-place">High five</span> </h4>
          <p>June 2020 - July 2021  <span className="work-bracket">|</span>   Poland</p>

          <ul className="work-responsibilities">
            <li>
              Prepare English lessons for children. 
            </li>
            <li>
              Work on children &apos;s motivation to learn English.
            </li>
            <li>
              Give feedback.  
            </li>

          </ul>

        </div>

      </div>
  )
}

export function Education() {
  return (
    <div className="education">
      <h3>Education</h3>

      <div className="education-info">
        <h4 className="education-name">Zhytomyr State Ivan Franko University</h4>
        <h5>Philology. The Germanic Languages and Literature (including translation)</h5>
        <h6>Bachelor &apos;s degree</h6>
        <p>September 2016 - June 2020   <span className="work-bracket">|</span>   Ukraine</p>
      </div>

      <div className="education-info">
          <h4 className="education-name">Zhytomyr Polytechnic State University</h4>
          <h5>Computer science, software engineering</h5>
          <h6>Master &apos;s degree</h6>
          <p>October 2022 <span className="work-bracket">|</span>   Ukraine</p>
      </div>
  </div>
  )
}