import React, { useEffect, useState,useRef } from 'react';

function Ref() {
  const [inputValue, setInputValue] = useState("")
  const count = useRef(0)

  useEffect(()=>{
    count.current = count.current +1
  })

  const handleSubmit= (event) => {

    console.log("inputValue",inputValue)
    alert('A name was submitted: ' + inputValue);
    event.preventDefault();

  }
  // function handleSubmit(e) {
  //   e.preventDefault();    console.log('You clicked submit.');
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          input
      <input 
      type="text"
      value={inputValue} 
      onChange={(e)=> {
        setInputValue(e.target.value)
        console.log("inputValue",inputValue)
      }}
      placeholder="hello input here"/>
      </label>
      <input type="submit" value="submit"  />

      <h1>Render Count: {count.current}</h1>
      </form>
    </div>
  );
}

export default Ref;