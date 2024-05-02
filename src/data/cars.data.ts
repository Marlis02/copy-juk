import { ISelect } from '@/types/cargo.types'
import { ICarsCountries } from '@/types/cars.types'

export const carsCountries: ICarsCountries[] = [
  { label: 'USA', value: 'usa' },
  { label: 'India', value: 'India' },
  { label: 'China', value: 'China' },
  { label: 'Finland', value: 'Finland' },
]

export const bodyTypes: ISelect[] = [
  { label: 'Sedan', value: 'Sedan' },
  { label: 'Hatchback', value: 'Hatchback' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Truck', value: 'Truck' },
]

export const timeSelect: ISelect[] = [
  { label: '2024-05-01', value: '2024-05-01' },
  { label: '2024-05-02', value: '2024-05-02' },
  { label: '2024-05-03', value: '2024-05-03' },
  { label: '2024-05-04', value: '2024-05-04' },
]
