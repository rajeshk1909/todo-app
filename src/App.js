import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import { useState } from "react"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import { useDispatch, useSelector } from "react-redux"
import { setListItems } from "../src/redux/features/listItems"

function App() {
  const [newItem, setNewItem] = useState("")

  const [search, setSearch] = useState("")

  const lineItems = useSelector((state) => state.listItems.listItems)

  const dispatch = useDispatch()

  const addItem = (item) => {
    const newItem = {
      id: lineItems.length ? lineItems[lineItems.length - 1].id + 1 : 1,
      checked: false,
      item,
    }
    const addNewItem = lineItems.length ? [...lineItems, newItem] : [newItem]
    dispatch(setListItems(addNewItem))
  }

  const handleCheck = (id) => {
    const updateItem = lineItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    dispatch(setListItems(updateItem))
  }

  const handleDelete = (id) => {
    const removeItem = lineItems.filter((item) => item.id !== id)
    dispatch(setListItems(removeItem))
  }

  const handleSumbit = (e) => {
    if (!newItem) return
    addItem(newItem)
    setNewItem("")
  }

  return (
    <div className='mx-auto w-[700px] border-2 border-black  h-[100vh]'>
      <Header title='Course List' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSumbit={handleSumbit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main div className='mx-2 my-2'>
        {
          <Content
            items={lineItems.filter((items) =>
              items?.item?.toLowerCase().includes(search?.toLowerCase())
            )}
            search={search}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer length={lineItems.length} />
    </div>
  )
}

export default App
