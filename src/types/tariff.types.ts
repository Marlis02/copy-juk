// home Tariff

export interface IHomeTariffFree {
  title: string
  month: string
  currency: string
  price: number
  perUser: string
  perMonth: string
  text: string
}

export interface IHomeTariffFeature {
  item: string
}

export interface IHomeTariffEnterprise {
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
