export interface ITariffFree {
  title: string
  month: string
  currency: string
  price: number
  perUser: string
  perMonth: string
  text: string
}

export interface TariffFeature {
  item: string
}

export interface ITariffEnterprise {
  title: string
  price: number
  currency: string
  perUser: string
  perMonth: string
  text: string
  features: TariffFeature[]
  billing: string
  link: string
}
