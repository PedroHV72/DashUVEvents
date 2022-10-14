import React, { useState } from 'react'
import controlIcon from '../assets/icons/control.png'
import logo from '../assets/icons/logo.png'
import Calendar from '../assets/icons/Calendar.png'
import Chart from '../assets/icons/Chart.png'

export default function Sidebar() {

    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Eventos ", src: Calendar },
    ];

    return (
        <div className='flex'>
            <button onClick={() => setOpen(!open)}>
            <div className={` ${open ? "w-72" : "w-20 "
                } bg-dark-purple duration-300 h-screen p-5  pt-8 relative`}>
                
                <div className='flex gap-x-4 items-center'>
                    <img src={logo} alt='logo' className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Eventos</h1>
                </div>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                      <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md`}>
                        <img src={menu.src} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                      </li>
                    ))}
                </ul>
            </div>
            </button>
        </div>
    )
}