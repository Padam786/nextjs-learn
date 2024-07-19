import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
  return (
    <div>
        <Link href={'/admin/dashboard'}>
        Go to Admin Dashboard
        </Link>
    </div>
  )
}

export default LearnLink