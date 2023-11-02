import React from 'react'
import Login from '../components/login-module/Login'
import Image from 'next/image'
import loginBg from '@/public/layered-waves-haikei.svg'

const Page = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center bg-fsblack text-fswhite overflow-hidden'>
        <Login/>
        <Image src={loginBg} className='absolute top-0 right-0 w-full hidden lg:block pointer-events-none'/>
    </div>
  )
}

export default Page