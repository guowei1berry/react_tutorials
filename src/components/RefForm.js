import React, { useRef, useState } from "react";

function Ref() {
    const refContainer = useRef(null)
    const divContainer = useRef(null)


  const handleSubmit= (event) => {

    console.log("refContainer.current.value",refContainer.current.value)
    console.log("divContainer.current",divContainer.current)
    alert('A name was submitted: ' + refContainer.current.value);
    event.preventDefault();

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div><input type="text" ref={refContainer}/> </div>
    <div ref={divContainer}> useRef = awesome</div>
    <input type="submit" value="submit"  /> 
    </form>
    </div>



    
  );
}

export default Ref;

