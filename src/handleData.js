import { useState } from 'react';
import { list } from './someData';

function HandleData (){

     let [i , setI] = useState(0);

     function handleClick(){
          console.log(i);
          if(i == list.length-1){
               setI(0);
          }else{

               setI(i+1);
          }
     }

     let viewedProfile = list[i] ;

     return (

               // <button onClick={handleClick}>Next</button> ?? error why ?
          <main>
               <button onClick={handleClick}>Next</button>
               <h2><b>{viewedProfile['name']}</b> {viewedProfile['artist']}</h2>
               <img src={viewedProfile['url']} height='200px' />
               <p>{viewedProfile['description']}</p>
          </main>

     )
}

export default HandleData ;