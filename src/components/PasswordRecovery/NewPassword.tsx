'use client'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './passRecov.module.scss'
import { INewPassword } from '@/types/auth.types'

const NewPassword = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<INewPassword>()
  const pwd = watch('newPassword')

  const onSubmit: SubmitHandler<INewPassword> = (data) => {
    alert(data.confirmNewPassword + ' ' + data.newPassword)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCon}>
        <h3 className={styles.title}>Введите новый пароль</h3>
        <Controller
          name="newPassword"
          control={control}
          rules={{
            required: 'Passowrd is required',
          }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Введите пароль </p>
              <input
                type="password"
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
            </div>
          )}
        />
        <Controller
          name="confirmNewPassword"
          control={control}
          rules={{
            required: 'Password is required',
            validate: (value) => value === pwd || 'Пароли не совпадают',
          }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Повторите пароль </p>
              <input
                type="password"
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
              {errors.confirmNewPassword && (
                <span className={styles.error}>
                  {errors.confirmNewPassword.message}
                </span>
              )}
            </div>
          )}
        />
        <button type="submit" className={styles.btn}>
          Сохранить
        </button>
      </form>
    </>
  )
}

export default NewPassword
