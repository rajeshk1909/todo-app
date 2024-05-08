import React from "react"

const Footer = ({length}) => {
  return (
    <div className='justify-center bg-blue-500 h-20 items-center flex '>
      {length} list {length === 1 ? "item" : "items"}
    </div>
  )
}

export default Footer
