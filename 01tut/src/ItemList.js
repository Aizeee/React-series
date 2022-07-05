import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((itm) => (
          <li className="iteem" key={itm.id}>
              <input
                  type="checkbox"
                  onChange={()=> handleCheck(itm.id)} //try to understand how 
                  checked={itm.checked}               //handle function is called
              
                                                      // like why you need to have () in {}
                                                      // because {} is a script
                                                      // () is a func
                                                      // and what you want is a script!!!!
                                                      // and not also a string "" 

              
              />                                    
              <label 
                  style={(itm.checked)? {textDecoration:"line-through"}: null}
                  onDoubleClick={()=>handleCheck(itm.id)}
              >       
              {itm.item}          
              </label>


              <FaTrashAlt 
                  onClick={()=>handleDelete(itm.id)}
                  role="button" 
                  tabIndex= "0"
                  aria-label={`Delete ${itm.item}`}
              />
          </li>
        ))}
          
      </ul>
  )
}

export default ItemList
