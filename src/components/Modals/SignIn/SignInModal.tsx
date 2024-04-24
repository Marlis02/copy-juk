'use client'
import React, { useState } from 'react'
import styles from './signin.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ISignInFields } from '@/types/auth.types'
import Image from 'next/image'
import Link from 'next/link'
import ConfirmEmail from '../PasswordRecovery/СonfirmEmail'
import Modal from '../Modal'

const SignInModal = () => {
  const { handleSubmit, control, reset } = useForm<ISignInFields>()
  const [showPassword, setShowPassword] = useState(false)
  const [confirmEmail, setConfirmEamil] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const onSubmit: SubmitHandler<ISignInFields> = (data) => {
    alert(data.email + ', pass :' + data.password)
    reset()
  }

  return (
    <>
      <form className={styles.formCon} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.formTitle}>Вход</h3>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Введите Email:</p>
              <input
                type="email"
                {...field}
                placeholder="Email"
                className={styles.inp}
              />
            </div>
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className={styles.passwordCon}>
              <p>Введите пароль:</p>
              <input
                type={showPassword ? 'text' : 'password'}
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image
                    src="/icons/closeEye.svg"
                    alt="eye"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/icons/openEye.svg"
                    alt="eye"
                    width={20}
                    height={20}
                  />
                )}
              </button>
              <p onClick={() => setConfirmEamil(true)}>Забыли пароль?</p>
              {/* <Modal active={confirmEmail} setActive={setConfirmEamil}>
                <ConfirmEmail />
              </Modal> */}
            </div>
          )}
        />

        <button className={styles.signInBtn} type="submit">
          Вход
        </button>
        <p className={styles.register}>
          Вы еще не зарегистрированы?{' '}
          <Link href="/signup">Зарегистрироваться</Link>
        </p>
      </form>
    </>
  )
}

export default SignInModal
