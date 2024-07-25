import React from 'react'
import { useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Middle = () => {
        const [items, setItems] = useState(
          [
            {
              id:1,
              checked : true,
              item: "practice coding"
            },
            {
              id:2,
              checked: false,
              item: "Playing Red dead redemption"
            },
            {
              id:3,
              checked: true,
              item: "Read About Future and options"
            }
          ]
        )
        const handleCheck = (id) =>{
           const listItems = items.map((item) => 
          item.id === id ? { ...item, checked:!item.checked} : item)
           setItems(listItems)
        }
       
  return (
    <main>
          <ul>
            {items.map((item) => (
              <li className='item' key={item.id}>
                <input 
                onChange={() => handleCheck(item.id)}
                type="checkbox" 
                checked = {item.checked} />
                <label htmlFor="">{item.item}</label>
                <FaRegTrashCan role='button' tabIndex='0' />
              </li>
            ))}
          </ul>
    </main>
  )
}

export default Middle