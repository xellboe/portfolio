import React from "react"

import { useForm } from "react-hook-form"

import styles from "../../styles/modules/Form.module.scss"
import axios from "axios"

const From = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" })
  const onSubmit = (data) => {
    axios.post(
      `https://api.telegram.org/bot6654165442:AAEmBLI2Y_hiBg4PpVjUkhuWxutscq4OQUA/sendMessage?chat_id=5540508200&text=Name: ${data.name}                                                                                             
      Email:  ${data.email}                                                                                             
      Message: ${data.text}`
    )
    reset()
  }
  return (
    <div className={styles.form__content}>
      <h2>Leave us your info</h2>
      <form id="tg" onSubmit={handleSubmit(onSubmit)} className={styles.form__place} action="" method="post">
        <label>
          Fullname:
          <input
            placeholder="Your Name"
            {...register("name", { required: true })}
            className={styles.form__input}
          />
        </label>

        <div className={styles.form__errors}>
          {errors?.name && <p>{errors?.message || "Enter your name!"}</p>}
        </div>

        <label>
          Email:
          <input
            placeholder="Email or telegram nickname"
            {...register("email", { required: true })}
            className={styles.form__input}
          />
        </label>
        <div className={styles.form__errors}>
          {errors?.email && <p>{errors?.message || "Enter your email or telegram nickname!"}</p>}
        </div>

        <label>
          Message:
          <textarea
            placeholder="Write me something"
            {...register("text", { required: true })}
            className={styles.form__textarea}
          />
        </label>
        <div className={styles.form__errors}>
          {errors?.text && <p>{errors?.message || "Do not leave the field empty :("}</p>}
        </div>
        <input type="submit" className={styles.form__submit} value="Send" disabled={!isValid} />
      </form>
    </div>
  )
}

export default From
