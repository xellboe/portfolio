import React from "react"

import styles from "../../styles/modules/Education.module.scss"

const Education = () => {
  return (
    <div className={styles.education__content}>
      <h2>Education</h2>
      <div className={styles.education_block}>
        <div className={styles.education_element}>
          <div className={styles.schoolname}>
            <div className={styles.name}>State University Zhytomyr Polytechnic</div>
            <div className={styles.date}>2021–now</div>
          </div>
          <div className={styles.speciality}>
            <div className={styles.spec_name}>Software engineer</div>
            <div className={styles.spec_description}>
              Software engineering is the branch of computer science that deals with the design, development,
              testing, and maintenance of software applications. Software engineers apply engineering
              principles and knowledge of programming languages to build software solutions for end users.
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.education_element}>
          <div className={styles.schoolname}>
            <div className={styles.name}>ZTK KNUBA</div>
            <div className={styles.date}>2017–2021</div>
          </div>
          <div className={styles.speciality}>
            <div className={styles.spec_name}>Computer engineering</div>
            <div className={styles.spec_description}>
              Computer engineering is a branch of electrical engineering and computer science that integrates
              several fields of computer science and electronic engineering required to develop computer
              hardware and software.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
