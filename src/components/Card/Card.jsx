import React from 'react';
 import "./Card.sty.css"

 

 export const Card = (props) => {
  return ( 
  <div className='card-container'>
      {/* <img  alt="avatar"
       src={MyIcon}  alt="" /> */}
    
 <img src={props.img} alt="" />

<h2> {props.avatar.name} </h2>
<p> {props.avatar.email}</p>
<p> {props.avatar.phone}</p>



  </div>
  )
};

export default Card;
