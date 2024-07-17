import React from 'react'

const layout = ({children,left,right}: {children:any,left:string, right:string}) => {
 
  const isSidebar = false;
    return (
    <div>{children}


{
    isSidebar ? left : right
  
}
  
    </div>
  )
}

export default layout