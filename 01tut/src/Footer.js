import React from 'react'

const Footer = ({items,itemsLength}) => {
    return (
        <footer>
            {itemsLength!==1 ?            
                <p>{itemsLength} List Items</p>
            :
                <p>{itemsLength} List Item</p>
            
            }   
        </footer>
  )
}

export default Footer