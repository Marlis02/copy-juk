export interface ICarsInputs {
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

export interface ICarsCountries {
  label: string
  value: string
}

export interface ICrateCarInputs {
  body: {
    bodyType: string
    semiTrailer: boolean
    truck: boolean
    coupling: boolean
  }
  uploadingType: {
    upper: boolean
    lateral: boolean
    rear: boolean
    dogruz: boolean
    hydrolift: boolean
    koniky: boolean
  }
  loadCapacity: string
  volume: string
  dimensions: {
    length: string
    width: string
    height: string
  }
  fromPoint: string
  toPoint: string
  when: {
    readyToUpload: string
    with: string
    withSelect: string
    allTheTime: string
    allTheTimeSelect: string
  }
  price: string
  note: string
  contacts: {
    name: string
    phone: string
  }
}
