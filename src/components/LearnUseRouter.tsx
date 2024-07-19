"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const LearnUseRouter = () => {
    const router = useRouter();

  return (
    <>
    <button onClick={()=> router.push("/admin/dashboard")}>
        Go to About Page
  
    </button>

    </>
  )
}

export default LearnUseRouter