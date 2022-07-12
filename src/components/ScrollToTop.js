import React, { useEffect, useState,useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed'
function ScrollToTop() {
    const titleRef = useRef()


  const handleBackClick= (event) => {

    const node = document.getElementById('mid')
    // console.log("node",node)
    // console.log("titleRef.current",titleRef.current)
    // titleRef.current.scrollIntoView({ behavior: 'smooth' })
    scrollIntoView(node, {
        scrollMode: 'if-needed',
        behavior:"smooth",
        block: 'start',
        // inline: 'nearest',
      })

  }
  // function handleSubmit(e) {
  //   e.preventDefault();    console.log('You clicked submit.');
  // }

  return (
    <div>
            <div id='mid' ref={titleRef}>mid</div>
            <div>
            <h1 >A React article for Latin readers</h1>
            // Rest of the article's content...
            </div>
            

            <button onClick={handleBackClick}>Back to the top</button>
    </div>
  );
}

export default ScrollToTop;