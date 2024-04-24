// home Tariff

export interface IHomeTariffFree {
  id: number
  title: string
  month: string
  currency: string
  price: number
  perUser: string
  perMonth: string
  text: string
}

export interface IHomeTariffFeature {
  id: number
  item: string
}

export interface IHomeTariffEnterprise {
  id: number
  title: string
  price: number
  currency: string
  perUser: string
  perMonth: string
  text: string
  features: IHomeTariffFeature[]
  billing: string
  link: string
}
//-------------------------------------------
