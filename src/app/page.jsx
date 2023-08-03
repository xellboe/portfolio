"use client"
import { useMediaQuery } from "@/hooks"
import LeftBar from "../components/LeftBar/LeftBar"
import Header from "@/components/Header/Header"
import RightBar from "@/components/RightBar/RightBar"

import About from "@/components/About/About"
import Education from "@/components/Education/Education"
import Projects from "@/components/Projects/Projects"
import Work from "@/components/WorkBlock/Work"
import { createContext, useEffect, useState } from "react"
import Form from "@/components/Form/Form"

export const DarkThemeContext = createContext()

export default function Home() {
  const [dark, setDark] = useState(false)
  useState

  const isMobile = useMediaQuery(650)

  let isDark
  useEffect(() => {
    const pageTheme = document.querySelector(".container")
    if (localStorage.getItem("darkMode") === "dark") {
      setDark(true)
      pageTheme.classList.add("dark")
    } else {
      setDark(false)
      pageTheme.classList.remove("dark")
    }
  }, [dark])

  return (
    <DarkThemeContext.Provider value={{ dark, setDark }}>
      <div className={isDark === "dark" ? "container dark" : "container"}>
        {isMobile ? <Header /> : <LeftBar />}
        <div className="center">
          <About />
          <Education />
          <Work />
          <Projects />
          <Form />
        </div>
        {isMobile ? "" : <RightBar />}
      </div>
    </DarkThemeContext.Provider>
  )
}
