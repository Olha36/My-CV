import React from 'react'

export function Contacts() {
  return (
    <div className="contacts">
      <h3 className="sidebar-title">Contacts</h3>

      <div>
        <p>
          <span className="contact-type">C:</span>
          <a href="tel\:+38097-608-96-80" className="contact-link1">
            +38097-608-96-80
          </a>
        </p>
        <p>
          <span className="contact-type">E:</span>
          <a href="mailto:olhakucheruk36@gmail.com" className="contact-link2">
            olhakucheruk36@gmail.com
          </a>
        </p>
        <p>
          <span className="contact-type">L:</span>
          <a href="https://www.linkedin.com/in/olha-kucheruk-62b3ab217/" className="contact-link2">
          linkedin
          </a>
        </p>
        <p>
          <span className="contact-type">G:</span>
          <a href="https://github.com/Olha36" className="contact-link2">
          GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export function TechSkills() {
  return (
    <div className="tech-skills">
      <h3 className="sidebar-title">Tech Skills</h3>
      <ul className="skills-list">
        <li className="li-type">
          <span className="skills-text">HTML5</span>
        </li>
        <li className="li-type">
          <span className="skills-text">CSS3</span>
        </li>
        <li className="li-type">
          <span className="skills-text">ESLint/Prettier</span>
        </li>
        <li className="li-type">
          <span className="skills-text">GIT</span>
        </li>
        <li className="li-type">
          <span className="skills-text">JavaScript</span>
        </li>
        <li className="li-type">
          <span className="skills-text">React.js</span>
        </li>
      </ul>
    </div>
  )
}

export function SoftSkills() {
  return (
    <div className="soft-skills">
      <h3 className="sidebar-title">Soft Skills</h3>
      <ul className="skills-list">
        <li className="li-type">
          <span className="skills-text">Stress resistance</span>
        </li>
        <li className="li-type">
          <span className="skills-text">Motivated</span>
        </li>
        <li className="li-type">
          <span className="skills-text">Result-oriented</span>
        </li>
        <li className="li-type">
          <span className="skills-text">Teamwork</span>
        </li>
      </ul>
    </div>
  )
}

export function Languages() {
  return (
    <div className='languages'>
      <h3 className='sidebar-title'>Languages</h3>
      <ul className='languages-list'>
        <li className='li-type'>
          <span className="skills-text">Ukrainian - Native</span>
        </li>
        <li className='li-type'>
          <span className="skills-text">Russian - Proficiency</span>
        </li>
        <li className='li-type'>
          <span className="skills-text">English - Advanced</span>
        </li>
        <li className='li-type'>
          <span className="skills-text">Polish - Advanced</span>
        </li>
        <li className='li-type'>
          <span className="skills-text">German - Pre-intermediate</span>
        </li>
      </ul>
    </div>
  )
}
