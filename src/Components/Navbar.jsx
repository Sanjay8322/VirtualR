import { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
import { Menu ,X } from 'lucide-react'
const Navbar = () => {

    const [mobileDrawer, setMobileDrawer] = useState(false)
    function toggleMenu(){
        setMobileDrawer(!mobileDrawer)
    }
  return (
    <nav className="sticky backdrop-blur top-0 z-50 border-b border-neutral-800 py-3">
        <div className="container px-4 mx-auto text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" className='h-10 w-10 mr-2' />
                    <span className='text-xl tracking-tight'>VirtuR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                        <li>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex items-center space-x-12 justify-center'>
                    <a href="#" className='border rounded-md py-2 px-3' >Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 rounded-md' >Create an account</a>
                </div>

                <div className='lg:hidden flex justify-end items-center'>
                    <button onClick={toggleMenu}>
                        {mobileDrawer ? <X /> : <Menu /> }
                    </button>
                </div>
            </div>
            {mobileDrawer &&
            <div className='fixed z-20 right-0 bg-neutral-900 w-full flex p-12 justify-center items-center flex-col lg:hidden'>
                <ul className=''>
                    {navItems.map((item,index)=>(
                        <li className='py-3'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex space-x-6'>
                    <a href="#" className='border rounded-md py-2 px-3' >Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-3 rounded-md' >Create an account</a>
                </div>
            </div>
            }
        </div>
    </nav>
  )
}

export default Navbar