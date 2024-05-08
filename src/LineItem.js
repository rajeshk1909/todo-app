import React from "react"
import { FaTrashAlt } from "react-icons/fa"

const LineItem = ({ handleCheck, handleDelete, item }) => {
  return (
    <li className='flex bg-[#efeaea] my-2 py-2  justify-between px-10 items-center '>
      <input
        type='checkbox'
        checked={item.checked}
        className='w-10 h-10'
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}>
        {item.item}
      </label>

      <FaTrashAlt
        className='hover:text-red-700'
        role='button'
        tabIndex='0'
        onClick={() => handleDelete(item.id)}
        aria-label={`delete ${item.id}`}
      />
    </li>
  )
}

export default LineItem
