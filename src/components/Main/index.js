import React from "react"
import { Flag, About, Projects, Work, Education } from "../main components"


export default function MainContent() {
    return(
        <div className="main-content">
        <Flag />
        <About />
        <Projects />
        <Work />
        <Education />
      </div>
    )
  }