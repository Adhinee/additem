import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            id='addItem here'
            type="text"
            placeholder='Add Item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required />

        <button
        type='submit'
        aria-label='AddItem'>
            <FaPlus/>
        
        </button>
    </form>
  )
}

export default AddItem
