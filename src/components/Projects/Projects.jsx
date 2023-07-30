"use client"

import React from "react"
import Image from "next/image"
import styles from "../../styles/modules/Projects.module.scss"
import proj1 from "../../../public/img/port1.png"
import Weather from "../../../public/img/Weather.png"

const Projects = () => {
  return (
    <div className={styles.portfolio__content}>
      <h2>Portfolio</h2>

      <div className={styles.portfolio__block}>
        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="https://xellboe.github.io/weather-forecast/" target="_blank">
              <Image src={Weather} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>

        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="#">
              <Image src={proj1} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>

        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="#">
              <Image src={proj1} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>

        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="#">
              <Image src={proj1} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>

        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="#">
              <Image src={proj1} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>
        <div className={styles.portfolio__item}>
          <div className={styles.portfolio__preview}>
            <a href="#">
              <Image src={proj1} width={300} height={300} alt="" />
            </a>
          </div>
          <div className={styles.portfolio__description}>HTML/CSS, JS, Bootstrap</div>
        </div>
      </div>
    </div>
  )
}

export default Projects
