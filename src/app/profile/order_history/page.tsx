import CargoList from '@/components/CargoList/CargoList'
import React from 'react'

const OrderHistory = () => {
  return (
    <>
      <CargoList isCar={false} isCargo={false} orderHistory={true} />
    </>
  )
}

export default OrderHistory
