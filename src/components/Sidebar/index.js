import React from 'react'
import img from './pic.jpg'
import { Contacts, TechSkills, SoftSkills } from './Pages'

export function Sidebar() {
  return (
    <>
      <img src={img} alt="Olha Kucheruk" className="photo" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
    </>
  )
}


