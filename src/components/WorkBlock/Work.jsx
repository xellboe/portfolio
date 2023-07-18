import React from "react"

import styles from "../../styles/modules/Work.module.scss"

const Work = () => {
  return (
    <div className={styles.work__content}>
      <h2>Work</h2>
      <div className={styles.work_block}>
        <div className={styles.work_element}>
          <div className={styles.schoolname}>
            <div className={styles.name}>Web Studio</div>
            <div className={styles.date}> Dec 2021 – Mar 2022</div>
          </div>
          <div className={styles.speciality}>
            <div className={styles.spec_name}>Layout designer</div>
            <div className={styles.spec_description}>Making a simple landing pages</div>
          </div>
        </div>
        <hr />

        <div className={styles.work_element}>
          <div className={styles.schoolname}>
            <div className={styles.name}>Web Studio</div>
            <div className={styles.date}> Dec 2021 – Mar 2022</div>
          </div>
          <div className={styles.speciality}>
            <div className={styles.spec_name}>Layout designer</div>
            <div className={styles.spec_description}>Making a simple landing pages</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
