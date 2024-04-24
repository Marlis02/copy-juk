'use client'
import React, { useState, useRef, createRef, useEffect } from 'react'
import styles from './passRecov.module.scss'

const ConfirmCode = () => {
  const [code, setCode] = useState(['', '', '', ''])
  const [seconds, setSeconds] = useState(60)
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
    alert(confirmCode)
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
      <p className={styles.timer}>Отправить заново {seconds}</p>
      <button className={styles.btn} onClick={handleSubmit}>
        Продолжить
      </button>
    </div>
  )
}

export default ConfirmCode
