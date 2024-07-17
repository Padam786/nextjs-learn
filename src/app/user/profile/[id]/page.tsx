import React from 'react'

interface Params {
    id: string;
    name: string;
}

const page = ({params}:{params:Record<string,string>}):any => {
console.log(params)
  return (
    <div>page</div>
  )
}

export default page