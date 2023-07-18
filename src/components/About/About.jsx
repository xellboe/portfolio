import React from "react"
import Image from "next/image"
import avatar from "../../../public/img/Your_Image1.png"
import styles from "../../styles/modules/About.module.scss"
import { useMediaQuery } from "@/hooks"

const About = () => {
  const isMobile1200 = useMediaQuery(960)
  return (
    <div className={styles.about__container}>
      <div className={styles.about__wrapper}>
        <div className={styles.about__main}>
          <h3>
            I’m Nikita Korotkyi
            <br /> <span>Front-end</span> Developer{" "}
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
            rutrum semper sed suspendisse nunc lectus.
          </p>
          <button>
            HIRE ME{" "}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.78117 5.33312L5.20517 1.75712L6.14784 0.814453L11.3332 5.99979L6.14784 11.1851L5.20517 10.2425L8.78117 6.66645H0.666504V5.33312H8.78117Z"
                fill="#2B2B2B"
              />
            </svg>
          </button>
        </div>
        <div className={styles.about__secondary}>
          {!isMobile1200 && <Image src={avatar} alt="" width={325} height={460} />}
        </div>
      </div>
    </div>
  )
}

export default About
