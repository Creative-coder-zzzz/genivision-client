import React from 'react'
import { assets } from '../assets/assets'
import { RiImageCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
         <Link to='/'>
                    <div className='flex items-center gap-2'>
                    <RiImageCircleFill className='text-2xl text-black' />
                    <h3 className='text-2xl tracking-widest font-bold text-black'>Genivision</h3>
                    </div>
                    </Link>
        <p className='flex-1 border-l border-gray-900 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @sandeshAdhikari | All right reserved.</p>
        <div className='flex gap-2.5'>
            <img width={35} src={assets.facebook_icon} alt="" />
            <img width={35} src={assets.twitter_icon} alt="" />
            <img width={35} src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer