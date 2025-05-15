import React from 'react';
import  "./Subscribe.css";

function Subscribe() {
  return (
   <>
   <div className="Subscribe_items_main">

    <div className='Subscribe_items_Heading'>
        Subscribe for Our Newsletter
    </div>

    <div className='Subscribe_items_Mail_part'>
       <form action="">
         <input type="email" placeholder='Enter Your Email' required id='exmpleemail' />
        <label htmlFor="exmpleemail"></label>
        <button type="submit">Submit</button>
       </form>
    </div>

   </div>
   
   </>
  );
}

export default Subscribe;
