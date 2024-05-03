import CargoList from '@/components/CargoList/CargoList'
import React from 'react'
const PaymentHistory = () => {
  return (
    <>
      <CargoList isCar={false} isCargo={false} paymentHistory={true} />
    </>
  )
}

export default PaymentHistory
