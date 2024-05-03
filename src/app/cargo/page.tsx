'use client'

import CargoList from '@/components/CargoList/CargoList'
import styles from './cargo.module.scss'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { ICargoInputs } from '@/types/cargo.types'
import { cargoCountries } from '@/data/cargo.data'

const Cargo = () => {
  const [isMounted, setIsMounted] = useState(false) // fix error version

  useEffect(() => setIsMounted(true), [])
  const { handleSubmit, control } = useForm<ICargoInputs>()
  const onSubmit: SubmitHandler<ICargoInputs> = (data) => console.log(data)
  return (
    <div className={styles.cargoCon}>
      <h3 className={styles.title}>Найти груз</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formCon}>
          <div className={styles.form_left}>
            <div className={styles.leftCon1}>
              <label>Откуда</label>
              {isMounted && (
                <Controller
                  name="fromCountry"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.inp1}
                      placeholder="Страна, город "
                      options={cargoCountries}
                      value={cargoCountries.find((c) => c.value === value)}
                      onChange={(val) => onChange(val ? val.value : '')} // Добавлена проверка на val
                    />
                  )}
                  rules={{ required: true }}
                />
              )}
              <Controller
                name="fromArea"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.inp2}
                    placeholder="Все области"
                  />
                )}
              />
              <Controller
                name="fromCity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.inp3}
                    placeholder="Город отправления"
                  />
                )}
              />
            </div>
            <div className={styles.leftCon2}>
              <label>Масса</label>
              <div className={styles.inp4}>
                <Controller
                  name="fromMass"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>От</label>
                      <input {...field} placeholder="Масса" />
                    </>
                  )}
                />
                <Controller
                  name="toMass"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>До</label>
                      <input {...field} placeholder="Масса" />
                    </>
                  )}
                />
              </div>
              <div className={styles.inp5}>
                <Controller
                  name="typeTransport"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>Тип</label>
                      <input {...field} placeholder="Все виды транспорта" />
                    </>
                  )}
                />
              </div>
            </div>
            <div className={styles.leftCon3}>
              <label>Дата</label>
              <div className={styles.inp6}>
                <Controller
                  name="fromDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>C</label>
                      <input {...field} type="date" />
                    </>
                  )}
                />
                <Controller
                  name="toDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>По</label>
                      <input {...field} type="date" />
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.form_right}>
            <div className={styles.rightCon1}>
              <label>Куда</label>
              {isMounted && (
                <Controller
                  name="toCountry"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.inp7}
                      placeholder="Страна, город "
                      options={cargoCountries}
                      value={cargoCountries.find((c) => c.value === value)}
                      onChange={(val) => onChange(val ? val.value : '')} // Добавлена проверка на val
                    />
                  )}
                  rules={{ required: true }}
                />
              )}
              <Controller
                name="toArea"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.inp8}
                    placeholder="Все области"
                  />
                )}
              />
              <Controller
                name="toCity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.inp9}
                    placeholder="Город отправления"
                  />
                )}
              />
            </div>
            <div className={styles.rightCon2}>
              <label>Объем</label>
              <div className={styles.inp10}>
                <Controller
                  name="fromVolime"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>От</label>
                      <input {...field} placeholder="Объем m³" />
                    </>
                  )}
                />
                <Controller
                  name="toVolime"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label>До</label>
                      <input {...field} placeholder="Объем m³" />
                    </>
                  )}
                />
              </div>
            </div>
            <div className={styles.rightCon3}>
              <label>Погрузка</label>
              {isMounted && (
                <Controller
                  name="typeShipment"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.inp11}
                      placeholder="Все виды погрузки"
                      options={cargoCountries}
                      value={cargoCountries.find((c) => c.value === value)}
                      onChange={(val) => onChange(val ? val.value : '')} // Добавлена проверка на val
                    />
                  )}
                  rules={{ required: true }}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.fromCon2}>
          <button type="submit">Найти</button>
        </div>
      </form>

      <CargoList isCargo={true} isCar={false} home={true} />
    </div>
  )
}

export default Cargo
