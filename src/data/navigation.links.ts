interface INavItem {
  title: string
  href: string
}

export const navItems: INavItem[] = [
  { title: 'Главное', href: '/' },
  { title: 'Груз', href: '/cargo' },
  { title: 'Машины', href: '/cars' },
  { title: 'Новости', href: '/news' },
  { title: 'Тариф', href: '/tariff' },
  { title: 'Контакты', href: '/contacts' },
]

export const profileItems: INavItem[] = [
  { title: 'История платежей', href: '/profile/payment_history' },
  { title: 'История заказов', href: '/profile/order_history' },
  { title: 'Создать заказ', href: '/profile/create_order' },
  { title: 'Документы', href: '/profile/docs' },
  { title: 'Автопарк', href: '/profile/autopark' },
  { title: 'Профиль', href: '/profile' },
]
