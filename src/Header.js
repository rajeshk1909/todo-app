import React from "react"

const Header = ({title}) => {
  return (
    <header className='bg-blue-500 h-14 text-white font-bold text-4xl text-center'>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
   title:"To do list"
}


export default Header
