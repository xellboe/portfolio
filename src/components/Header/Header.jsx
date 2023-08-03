"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import Profile from "../../../public/img/Profile.png"
import iconExtra from "../../../public/img/ExtraSkill.png"
import styles from "../../styles/modules/Header.module.scss"
import DarkButton from "../UI/DarkThemeButton/DarkButton"
import { CSSTransition } from "react-transition-group"
import ProgressElement from "../LeftBar/ProgressElement"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    document.querySelector("body").classList.toggle("overflow-hidden")
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__container}>
        <Image
          src={Profile}
          className={styles.header__logo}
          width={70}
          height={70}
          alt="Picture of the author"
        />
        <div className={styles.header__subcontainer}>
          <DarkButton />
          <button
            onClick={handleToggleMenu}
            className={`${styles.header__burger} ${menuOpen ? styles.open : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {/* {menuOpen && ( */}
      <CSSTransition
        in={menuOpen}
        timeout={200}
        classNames={{
          enterActive: styles.alert_enter,
          enterDone: styles.alert_enter_active,
          exitActive: styles.alert_exit,
          exitDone: styles.alert_exit_active,
        }}
        unmountOnExit
      >
        <div className={styles.header__menu}>
          <div className={styles.header__summary}>
            <div className={styles.header__text}>
              <h3>Nikita Korotkyi</h3>
              <p>Font-end Developer</p>
            </div>
            <div className={styles.header__links}>
              <ul className={styles.header__icon}>
                <li>
                  <a href="https://www.linkedin.com/in/nkorotkyi/" target="_blank">
                    <svg
                      id="Capa_1"
                      style={{ enableBackground: "new 0 0 112.196 112.196" }}
                      version="1.1"
                      viewBox="0 0 112.196 112.196"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <circle cx="56.098" cy="56.097" r="56.098" style={{ fill: "#ffb400" }} />
                        <g>
                          <path
                            d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z"
                            style={{ fill: "black" }}
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/nk_sdy" target="_blank">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                        fill="#FFB400"
                      />
                      <path
                        d="M8.93822 25.174C11.7438 23.6286 14.8756 22.3388 17.8018 21.0424C22.836 18.919 27.8902 16.8324 32.9954 14.8898C33.9887 14.5588 35.7734 14.2351 35.9484 15.7071C35.8526 17.7907 35.4584 19.8621 35.188 21.9335C34.5017 26.4887 33.7085 31.0283 32.935 35.5685C32.6685 37.0808 30.774 37.8637 29.5618 36.8959C26.6486 34.9281 23.713 32.9795 20.837 30.9661C19.8949 30.0088 20.7685 28.6341 21.6099 27.9505C24.0093 25.5859 26.5539 23.5769 28.8279 21.0901C29.4413 19.6088 27.6289 20.8572 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8683 13.2479 28.0361 11.4797 27.4927C9.89428 26.8363 7.57106 26.175 8.93806 25.1741L8.93822 25.174Z"
                        fill="black"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="18.0028"
                          y1="2.0016"
                          x2="6.0028"
                          y2="30"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#37AEE2" />
                          <stop offset="1" stopColor="#1E96C8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/xellboe" target="_blank">
                    <svg
                      data-name="Social Media Icons"
                      id="Social_Media_Icons"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g className={styles.git}>
                        <path
                          // style={{ fill: "white" }}
                          d="M512,256c0,117.67-79.41,216.81-187.56,246.75-2.57-1.9-4.71-5.5-4.71-12.15,0-16.47-.67-81.38-.67-81.38s-2.64-22.35-15.43-32.57c0,0,0,0,0,0,2.5,0,96.9-1.73,112.94-90.59,0,0,16.26-58.42-23.06-102.11,0,0,12.52-30.31-2.64-66.55,0,0-29-2-69.17,26.36,0,0-43.77-8.57-65.7-8.57s-65.7,8.57-65.7,8.57c-40.19-28.33-69.17-26.36-69.17-26.36-15.16,36.24-2.64,66.55-2.64,66.55C79.17,227.6,95.43,286,95.43,286c16,88.86,110.44,90.56,112.94,90.59,0,0,0,0,0,0-12.79,10.22-15.43,32.57-15.43,32.57s-35.57,24.39-68.52-10.75c0,0-17.57-43.93-57.1-32.51,0,0-3.51,8.36,14.06,15.38,0,0,19.32,16,24.15,36.12,0,0,21.19,49.1,87,32.84-.14,16.37-.27,33.05-.27,40.3,0,6.65-2.14,10.25-4.71,12.15C79.41,472.81,0,373.67,0,256,0,114.62,114.62,0,256,0S512,114.62,512,256Z"
                        />
                        <path
                          style={{ fill: "black" }}
                          className="cls-1"
                          d="M416.57,286c-16,88.86-110.44,90.56-112.94,90.59,0,0,0,0,0,0,12.79,10.22,15.43,32.57,15.43,32.57s.67,64.91.67,81.38c0,6.65,2.14,10.25,4.71,12.15a257.82,257.82,0,0,1-136.88,0c2.57-1.9,4.71-5.5,4.71-12.15,0-7.25.13-23.93.27-40.3-65.82,16.26-87-32.84-87-32.84-4.83-20.09-24.15-36.12-24.15-36.12C63.81,374.32,67.32,366,67.32,366c39.53-11.42,57.1,32.51,57.1,32.51,33,35.14,68.52,10.75,68.52,10.75s2.64-22.35,15.43-32.57c0,0,0,0,0,0-2.5,0-96.9-1.73-112.94-90.59,0,0-16.26-58.42,23.06-102.11,0,0-12.52-30.31,2.64-66.55,0,0,29-2,69.17,26.36,0,0,43.77-8.57,65.7-8.57s65.7,8.57,65.7,8.57c40.19-28.33,69.17-26.36,69.17-26.36,15.16,36.24,2.64,66.55,2.64,66.55C432.83,227.6,416.57,286,416.57,286Z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.header__languages}>
            <h4 className={styles.title}>Languages</h4>
            <ProgressElement title="Ukrainian" progressValue={100} />
            <ProgressElement title="English" progressValue={65} />
          </div>
          <div className={styles.header__skills}>
            <h4 className={styles.title}>Skills</h4>
            <ProgressElement title="HTML" progressValue={80} />
            <ProgressElement title="CSS" progressValue={70} />
            <ProgressElement title="JavaScript" progressValue={60} />
            <ProgressElement title="React" progressValue={60} />
            <ProgressElement title="Redux Toolkit" progressValue={50} />
            <ProgressElement title="TypeScript" progressValue={40} />
            <ProgressElement title="Next.js" progressValue={30} />
          </div>

          <div className={styles.header__extra}>
            <h4 className={styles.title}>Extra skills</h4>
            <div className={styles.header__extrablock}>
              <div className={styles.header__extraskills}>
                <Image src={iconExtra} width={15} height={15} alt="" />
                <span>SASS/SCSS</span>
              </div>

              <div className={styles.header__extraskills}>
                <Image src={iconExtra} width={15} height={15} alt="" />
                <span>Git</span>
              </div>

              <div className={styles.header__extraskills}>
                <Image src={iconExtra} width={15} height={15} alt="" />
                <span>React Router Dom</span>
              </div>

              <div className={styles.header__extraskills}>
                <Image src={iconExtra} width={15} height={15} alt="" />
                <span>React Skeleton</span>
              </div>

              <div className={styles.header__extraskills}>
                <Image src={iconExtra} width={15} height={15} alt="" />
                <span>Axios</span>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      {/* )} */}
    </div>
  )
}

export default Header
