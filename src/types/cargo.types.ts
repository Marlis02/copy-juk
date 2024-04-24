export interface ICargoInputs {
  fromCountry: string
  toCountry: string
  fromArea: string
  toArea: string
  fromCity: string
  toCity: string
  fromMass: string
  toMass: string
  typeTransport: string
  fromDate: string
  toDate: string
  fromVolime: string
  toVolime: string
  typeShipment: string
}

export interface ICargoCountries {
  label: string
  value: string
}

export interface CargoProps {
  isCargo: boolean
  isCar: boolean
}

export interface ICargoList {
  id: number
  direction: string
  route: string
  date: string
  cargo: string
  cost: string
}
