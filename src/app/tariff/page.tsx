'use client'

import PasswordRecovery from '@/components/Modals/ForgotPass/Gg'
import Modal from '@/components/Modals/Modal'
import ConfirmCode from '@/components/Modals/PasswordRecovery/СonfirmСode'
import { useState } from 'react'

const TariffPage = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <h3>Tarrif Page</h3>
      <button onClick={() => setModalActive(true)}>modal</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <ConfirmCode />
      </Modal>
    </div>
  )
}

export default TariffPage
