import React from "react"

const SearchItem = ({ setSearch, search }) => {


  return (
    <form
      className='flex justify-evenly mt-5'
      onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='Search'>Search</label>
      <input
        className='border-2 py-1 w-[540px] border-black rounded-lg px-1 '
        role='searchbox'
        type='text'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem
