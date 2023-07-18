"use client"
import styles from "../../styles/modules/LeftBar.module.scss"

import React from "react"

const ProgressElement = ({ title, progressValue }) => {
  return (
    <div>
      <div className={styles.progress_bar}>
        <p className={styles.progress_bar__title}>{title}</p>
        <span className={styles.progress_bar__percentage}>{progressValue}%</span>
      </div>
      <div className={styles.progress_bar__line}>
        <div className={styles.progress_bar__line__number} style={{ width: `${progressValue}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressElement
