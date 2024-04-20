'use client'
import React, { useState } from 'react'
import styles from './signin.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ISignInFields } from '@/types/auth.types'
import Image from 'next/image'
import Link from 'next/link'
import { DiVim } from 'react-icons/di'

const SignInModal = ({ active, setActive }: any) => {
  const { handleSubmit, control } = useForm<ISignInFields>()
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const onSubmit: SubmitHandler<ISignInFields> = (data) =>
    alert(data.email + ', pass :' + data.password)

  console.log(active, 'active')
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? styles.modalConActive : styles.modalCon}
    >
      <div className={styles.formCon} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <button onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <img
                      src="/icons/closeEye.svg"
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <img
                      src="/icons/openEye.svg"
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
                <p>Забыли пароль? </p>
              </div>
            )}
          />

          <button className={styles.signInBtn} type="submit">
            Вход
          </button>
          <p className={styles.register}>
            Вы еще не зарегистрированы?{' '}
            <Link href="/signup" onClick={() => setActive(false)}>
              Зарегистрироваться
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignInModal
