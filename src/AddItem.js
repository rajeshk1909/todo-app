import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const AddItem = ({ newItem, setNewItem, handleSumbit }) => {
  const inputRef = useRef()
  return (
    <form
      className='flex justify-around mt-5'
      onSubmit={(e) => {
        e.preventDefault()
        handleSumbit(e)
      }}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        type='text'
        ref={inputRef}
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className='border-2 py-1 w-[500px] border-black rounded-lg px-1 '
      />

      <button type='Submit' onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
