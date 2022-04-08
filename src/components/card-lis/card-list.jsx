 import React from 'react';
 import './card-lis.css';
 import Card from '../Card/Card';
import images from '../Card/images/images';
 
    export const CardList = props => {
    
     return (
    <div className='card-list'>
        {props.avatars.map(avatar => (
         < Card  key={avatar.id}
          avatar={avatar}
          img={images[2].imgURL}
         />
         
                
        
       ))},


    </div>
     );
     
    }