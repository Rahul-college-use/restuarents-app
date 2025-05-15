import React from 'react';
import  "./Footer.css";
// import { format } from 'date-fns';
function Footer() {
    //  const today = new Date()
    // const formated = format(today,"yyyy-MM-dd")
    // console.log(formated)

    return (
   <>
   <div className="footer_item_main">
    <div className='img_box'>

    </div>
    <div className='footer_items_details'>
      <span>mob:-</span> +91 9199855936  <span> 8:00 AM - 11:00 PM</span>
    </div>
      <div className='footer_items_Copyright'>
        Copyright © 2025 Rahul. All Rights Reserved.
      </div>
   </div>
   </>
  );
}

export default Footer;
