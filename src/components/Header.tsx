import logo from '../assets/logo.png' 

interface INavItem {
  link: string
  text: string
}

function Header() {
  const navItems: INavItem[] = [
    {
      link: '/',
      text: 'Contrate-nos',
    },
    {
      link: '/',
      text: 'Nossa História',
    }
  ]

  const renderedNavItems = navItems.map((navItem, index) => (
    <li className="mx-3 text-xl font-normal">
      <a href={navItem.link} key={index}>{ navItem.text }</a>
    </li>
  ))

  return (
    <header className="flex justify-between items-center h-16 bg-gray-100 px-4">
      <a href="/">
        <img
          src={logo}
          alt="TechOS logo"
          className='w-32 -m-2'
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
