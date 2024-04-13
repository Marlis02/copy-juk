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
