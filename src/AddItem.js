import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item here2</label>
        <input
            autoFocus
            id='addItem'
            type="text"
            placeholder='Add Items in here'
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
