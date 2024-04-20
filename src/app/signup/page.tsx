'use client'
import Modal from '@/components/Modals/ForgotPass/gg'
import React, { useState } from 'react'

const SignUpPage = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div>
      <h3>Sign Up Page</h3>
      <button className="open-btn" onClick={() => setModalActive(true)}>
        Регистрация
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default SignUpPage
