import logo from '../assets/logo.png' 

export function Header () {
    return (
        <header className="flex justify-between items-center ">
            <div>
                <img src={logo} alt=""  className='w-24 -mx-2 -my-2' />
            </div>
            <nav>
                <ul className="flex ">
                    <li className="mx-3 text-xl font-normal">Contrate-nos</li>
                    <li className="mx-3 text-xl font-normal">Nossa História</li>
                </ul>
            </nav>
        </header>
    )
}