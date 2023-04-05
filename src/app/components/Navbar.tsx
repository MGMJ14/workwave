import React from 'react'
import Button from './Button'
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 sticky top-0 p-8  bg-slate-500 text-slate-200'>

            <Link href="/">
                WorkWave
            </Link>

            <Link href="/board">Job Postings</Link>
            <Button />
        </div>
    )
}

export default Navbar