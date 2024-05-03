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

export interface ISelect {
  label: string
  value: string
}

export interface CargoProps {
  isCargo: boolean
  isCar: boolean
  home?: boolean
  paymentHistory?: boolean
  orderHistory?: boolean
}

export interface ICargoList {
  id: number
  direction: string
  route: string
  date: string
  cargo: string
  cost: string
  active: string
  status?: string
}

export interface IUnloading {}
export interface ICreateCargoInputs {
  cargoName: string
  cargoSize: {
    cargoWeight: string
    weightType: string
    cargoVolume: string
  }
  transportName: string
  transportSize: {
    transportVolume: string
    transportWeight: string
    transportWeightType: string
  }
  cargoDimensions: {
    length: number
    width: number
    height: number
    diameter: number
  }
  containerCarrier: string
  smallTonnageContainers: string
  readyToLoad: string
  workingDays: string
  workingDate: string
  uploading: {
    locality: string
    addressLocality: string
    uploadingTime: string
  }
  unloading: {
    locality: string
    addressLocality: string
    unloadingTime: string
  }
  upper: string
  rear: string
  addPayment: {
    prepaymentFuel: boolean
    paymentOnUnloading: boolean
  }
  contacts: {
    name: string
    phone: string
  }
  price: string
  note: string
  addPhoto: string
}
