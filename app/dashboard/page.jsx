import React from 'react'
import Dashboard from '../components/dashboard-module/Dashboard'

const Page = () => {
  console.log("we're in dashboard")
  return (
    <div className='min-h-screen w-full'>
        <Dashboard/>
    </div>
  )
}

export default Page