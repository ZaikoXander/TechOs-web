import logo from '../assets/logo.png' 

interface INavItem {
  link: string
  text: string
}

function Header() {
  const navItems: INavItem[] = [
    {
      link: '/',
      text: 'Nossa História',
    },
    {
      link: '/project',
      text: 'Projeto',
    },
    {
      link: '/linux',
      text: 'Linux',
    },
    {
      link: '/contact-us',
      text: 'Contate-nos',
    },
    {
      link: '/about-us',
      text: 'Saiba Mais',
    },
  ]

  const renderedNavItems = navItems.map((navItem, index) => (
    <li className="mx-3 text-xl font-semibold" key={index}>
      <a href={navItem.link}>{ navItem.text }</a>
    </li>
  ))

  return (
    <header className="flex justify-between items-center h-16 bg-gray-100 px-4 filter drop-shadow">
      <a href="/">
        <img
          src={logo}
          alt="TechOS logo"
          className='w-20'
        />
      </a>
      <nav>
        <ul className="flex">
          { renderedNavItems }
        </ul>
      </nav>
    </header>
  )
}

export default Header
