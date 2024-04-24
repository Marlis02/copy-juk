'use client'
import Modal from '@/components/Modals/Modal'
import NewPassword from '@/components/Modals/PasswordRecovery/NewPassword'
import ConfirmEmail from '@/components/Modals/PasswordRecovery/СonfirmEmail'
import React, { useState } from 'react'

const News = () => {
  const [confirmEmail, setConfirmEmail] = useState(false)
  const [newPass, setNewPass] = useState(false)
  return (
    <div>
      <h3>News page</h3>
      <button onClick={() => setConfirmEmail(true)}>Modal</button>

      <Modal active={confirmEmail} setActive={setConfirmEmail}>
        <ConfirmEmail />
      </Modal>
      <button onClick={() => setNewPass(true)}>new pass</button>
      <Modal active={newPass} setActive={setNewPass}>
        <NewPassword />
      </Modal>
    </div>
  )
}

export default News
