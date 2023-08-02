import React from "react"

import { useForm } from "react-hook-form"

import styles from "../../styles/modules/Form.module.scss"
import axios from "axios"

const Form = () => {
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
            {...register("email", {
              required: true,
              pattern:
                /(^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$)|(.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.)/,
            })}
            className={styles.form__input}
          />
        </label>
        <div className={styles.form__errors}>
          {errors?.email && errors?.email.type === "required" && (
            <span>Enter your email or telegram nickname!</span>
          )}
          {errors?.email && errors?.email.type === "pattern" && <span>Not valid email or TG nickname</span>}
          {errors?.email && errors?.email.type === "pattern" && <span>Not valid email or TG nickname</span>}
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

export default Form
