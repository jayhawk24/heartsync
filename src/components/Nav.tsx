import React from 'react'
import Image from 'next/image'
import homeIcon from '../../public/icons/home.svg'
import historyIcon from '../../public/icons/history.svg'
import scheduleIcon from '../../public/icons/schedule.svg'
import profileIcon from '../../public/icons/profile.svg'
import Link from 'next/link'

type Props = {
    className?: string
}

const Nav = ({ className }: Props) => {
    const navItems = [
        {
            name: 'home',
            link: '/start',
            icon: homeIcon
        },
        {
            name: 'history',
            link: '/history',
            icon: historyIcon
        },
        {
            name: 'schedule',
            link: '/schedule',
            icon: scheduleIcon
        },
        {
            name: 'profile',
            link: '/profile',
            icon: profileIcon
        }

    ]
    return (
        <div className={`absolute bottom-0 w-full ${className}`}>
            <div className='flex items-center justify-evenly w-full bg-primary-800 rounded-tl-3xl rounded-tr-3xl'>
                {navItems.map((item, index) => (
                    <Link className='p-2 h-20 w-20 flex  flex-col justify-center items-center' href={item.link} key={index}>
                        <Image src={item.icon} alt={item.name} />
                        <div>{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Nav