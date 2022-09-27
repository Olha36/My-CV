import React from 'react'
import img from './pic.jpg'
import { Contacts, TechSkills, SoftSkills, Languages } from './Pages'

export function Sidebar() {
  return (
    <div className='sidebar'>
      <img src={img} alt="Olha Kucheruk" className="photo" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </div>
  )
}


