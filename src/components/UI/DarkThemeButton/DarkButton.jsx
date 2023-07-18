import React, { useContext, useState } from "react"
import styles from "./DarkButton.module.scss"
import { DarkThemeContext } from "@/app/page"

const DarkButton = () => {
  const { dark, setDark } = useContext(DarkThemeContext)
  console.log(dark, "before ouside")

  const onDark = () => {
    setDark(!dark)

    !dark ? localStorage.setItem("darkMode", "dark") : localStorage.setItem("darkMode", "light")
  }

  return (
    <button className={styles.dark__theme} onClick={onDark} width={35} height={35}>
      <svg width="35" height="35" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="black">
        <circle cx="12.5" cy="12.5" r="12.5" fill="none"></circle>
        <path
          d="M12.5 25M 4.1612 18.0312 C 4.9829 19.2605 6.0668 20.2923 7.3351 21.0523 C 8.6034 21.8123 10.0245 22.2816 11.4959 22.4264 C 12.9674 22.5712 14.4526 22.3879 15.8448 21.8897 C 17.2369 21.3915 18.5012 20.5908 19.5466 19.5452 C 20.5921 18.4997 21.3927 17.2353 21.8908 15.8432 C 22.3888 14.451 22.572 12.9657 22.4271 11.4943 C 22.2822 10.0228 21.8127 8.6018 21.0526 7.3336 C 20.2925 6.0654 19.2606 4.9815 18.0312 4.16 C 18.5702 6.0828 18.5875 8.1144 18.0814 10.0461 C 17.5752 11.9778 16.5639 13.7398 15.1513 15.1513 C 13.74 16.5637 11.9781 17.5749 10.0467 18.081 C 8.1152 18.5872 6.0838 18.57 4.1612 18.0312Z"
          fill="#2B2B2B"
        />
      </svg>
    </button>
  )
}

export default DarkButton
