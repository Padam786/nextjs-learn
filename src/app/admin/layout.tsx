import AdminHeader from '@/components/AdminHeader'
import React from 'react'

const AdminLayout = ({children}:{children:any}) => {
  return (
    <div>
        <AdminHeader/>
        {children}</div>
  )
}

export default AdminLayout