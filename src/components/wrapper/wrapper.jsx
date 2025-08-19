import React from 'react';
import "./wrapper.css";

function Wrapper(props) {
  return (
    <div className='wrapper-container'>
      {props.children}
    </div>
  )
}

export default Wrapper;