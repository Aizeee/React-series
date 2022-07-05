import React from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleCheck,handleDelete,handleSubmit}) => {
  return (
    <form className="addForm"onSubmit={handleSubmit}>
        <input 
            type="text"
            id="addItem"
            autoFocus
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
            type='submit'

        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem