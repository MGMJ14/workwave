import React from 'react'
import Button from './Button'
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 p-8 bg-slate-500 text-slate-200'>
            <div className=' text-4xl'>
                <Link href="/">
                    WorkWave
                </Link>
            </div>
            <Button />
        </div>
    )
}

export default Navbar