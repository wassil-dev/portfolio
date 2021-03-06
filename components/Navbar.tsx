import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import {useRouter} from 'next/router'


const Navbar = () => {



    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()

    useEffect(()=>{ 

        if (pathname === '/') setActiveItem('About')
        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/projects') setActiveItem('Projects')

    },[])

    const NavItem: FunctionComponent<{
        active: string
        setActive: Function
        name: string
        route: string
     }> = ({ active, setActive, name, route }) => {
        return active !== name ? (
           <Link href={route}  scroll={false}>
              <a>
                 <span className='mx-2 cursor-pointer hover:border-b-4 hover:text-green-500' onClick={() => setActive(name)}>
                    {name}
                 </span>
              </a>
           </Link>
        ) : null
     }
     

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold text-green-500 border-b-4 border-green-500">{activeItem}</span>
            <div className="flex space-x-5 text-lg">

                <NavItem active={activeItem} setActive={setActiveItem} name='About' route='/' />
                <NavItem active={activeItem} setActive={setActiveItem} name='Resume' route='/resume' />
                <NavItem active={activeItem} setActive={setActiveItem} name='Projects' route='/projects' />
            </div>
        </div>
    )
}

export default Navbar
