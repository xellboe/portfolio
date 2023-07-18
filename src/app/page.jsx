"use client"
import { useMediaQuery } from "@/hooks"
import LeftBar from "../components/LeftBar/LeftBar"
import Header from "@/components/Header/Header"
import RightBar from "@/components/RightBar/RightBar"

import About from "@/components/About/About"
import Education from "@/components/Education/Education"
import Projects from "@/components/Projects/Projects"
import Work from "@/components/WorkBlock/Work"
import { createContext, useState } from "react"

export const DarkThemeContext = createContext()

export default function Home() {
  const [dark, setDark] = useState(false)
  useState

  const isMobile = useMediaQuery(650)

  return (
    <DarkThemeContext.Provider value={{ dark, setDark }}>
      <div className={localStorage.getItem("darkMode") === "dark" ? "container dark" : "container"}>
        {isMobile ? <Header /> : <LeftBar />}
        <div className="center">
          <About />
          <Education />
          <Work />
          <Projects />
        </div>
        {isMobile ? "" : <RightBar />}
      </div>
    </DarkThemeContext.Provider>
  )
}
