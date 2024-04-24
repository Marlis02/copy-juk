'use client'
import React, { useState, createRef, useEffect } from 'react'
import styles from './passRecov.module.scss'
import { useRouter } from 'next/navigation'

const ConfirmCode = () => {
  const [code, setCode] = useState(['', '', '', ''])
  const [seconds, setSeconds] = useState(60)
  const router = useRouter()
  const inputRefs: any = Array(4)
    .fill(0)
    .map((_, i) => createRef())

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCode = [...code]
      newCode[index] = event.target.value
      setCode(newCode)

      if (event.target.value.length === 1 && index < 3) {
        inputRefs[index + 1].current.focus()
      }
    }

  const handleKeyDown = (index: number) => (event: any) => {
    if (event.key === 'Backspace' && code[index] === '' && index > 0) {
      const newCode = [...code]
      newCode[index - 1] = ''
      setCode(newCode)
      inputRefs[index - 1].current.focus()
    }
  }

  const handleSubmit = () => {
    let confirmCode = code.join('')

    if (confirmCode.length < 4) {
      alert('Заполните код')
    } else {
      router.push('/forgot-password/new-pass')
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(60)
    }
  }, [seconds])

  return (
    <div className={styles.formCon}>
      <div className={styles.formTitle}>
        <h3>Восстановить пароль</h3>
        <p>Введите код </p>
        <p>Проверьте вашу почту</p>
      </div>
      <div className={styles.formInp}>
        {' '}
        {code.map((_, index) => (
          <input
            className={styles.codeInp}
            key={index}
            type="text"
            value={code[index]}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            maxLength={1}
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <p className={styles.timer}>
        Отправить заново <span>{seconds}s</span>
      </p>
      <button className={styles.btn} onClick={handleSubmit}>
        Продолжить
      </button>
      {/* <Modal active={newPass} setActive={setNewPass} id={'newPass'}>
        <NewPassword />
      </Modal> */}
    </div>
  )
}

export default ConfirmCode
