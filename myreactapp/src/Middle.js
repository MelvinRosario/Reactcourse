import React from 'react'

const Middle = () => {
    function textChange(){
    let tname = ['Eat','Sleep','Repeat'];
    let rand  = Math.floor(Math.random()*3);
    return tname[rand]; 
    }
    let changeText = (name) =>{
    console.log(`Bala Click the button so changed ${name}`)
    }
  return (
    <main>
      <div className='card'>
      <h4 className='ch4'>Let's go <span  className='ccolor'>{textChange()}</span> </h4>
      <p id='text'>Click the button to change text</p>
      <button onClick={() => changeText('bala')}>Click</button>
      </div>
      
    </main>
  )
}

export default Middle