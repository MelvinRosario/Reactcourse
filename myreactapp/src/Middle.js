import React, { useState } from 'react';

const Middle = () => {
  // Function to get a random text from an array
  function textChange() {
    const tname = ['Eat', 'Sleep', 'Repeat'];
    const rand = Math.floor(Math.random() * tname.length);
    return tname[rand];
  }
 
  const [text, setText] = useState("Click the button to change text");
  const changeText = () => {
    setText("Text changed Successfully");
  };

  return (
    <main>
      <div className='card'>
        <h4 className='ch4'>Let's go <span className='ccolor'>{textChange()}</span></h4>
        <p id='text'>{text}</p>
        <button onClick={changeText}>Click</button>
      </div>
    </main>
  );
};

export default Middle;
