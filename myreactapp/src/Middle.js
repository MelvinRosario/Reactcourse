import React from 'react'
import { useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Middle = () => {
        const [items, setItems] = useState(
          [
            {
              id:1,
              checked : true,
              item: "practice coding Morning"
            },
            {
              id:2,
              checked: false,
              item: "Practice coding Afternoon"
            },
            {
              id:3,
              checked: true,
              item: "Practice coding Night"
            }
          ]
        )
  return (
    <main>
          <ul>
            {items.map((item) => (
              <li className='item' key={item.id}>
                <input type="checkbox" checked = {item.checked} />
                <label htmlFor="">{item.item}</label>
                <FaRegTrashCan role='button' tabIndex='0' />
              </li>
            ))}
          </ul>
    </main>
  )
}

export default Middle