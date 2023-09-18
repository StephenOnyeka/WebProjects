import React from 'react'
import "./footer1.css"

function Footer1() {
  return (
    <>
      <div id='footer1'>
          <div className="footer1_container">
              <div id='footer1_logo'>
                  <p id='dnk'>DNK</p>
                  <h3> The best look anytime, anywhere.</h3>
              </div>
          
              <div className='BOX'>
                  <ul>
                    <h3>For Her</h3>
                    <li><a href=""> Women Jeans</a> </li>
                    <li><a href=""> Tops and Shirts</a> </li>
                    <li><a href=""> Women Jackets</a> </li>
                    <li><a href=""> Heels and Flats</a> </li>
                    <li><a href=""> Women Accessories</a> </li>
                  </ul>
              </div>
              
              <div className='BOX'>                  
                  <ul>
                    <h3>For Him</h3>
                    <li><a href=""> Men Jeans</a> </li>
                    <li><a href=""> Men Shirts</a> </li>
                    <li><a href=""> Men Shoes</a> </li>
                    <li><a href=""> Men Accessories</a> </li>
                    <li><a href=""> Men Jackets</a> </li>
                  </ul>
              </div>
        
              <div className='BOX contact'>                  
                  <ul>
                    <h3>Subscribe</h3>
                    <input type="text" placeholder='Your e-mail address...'/>
                    <button>SUBSCRIBE</button>
                  </ul>
              </div>
           
          </div>
      </div>

      
    </>
  )
}

export default Footer1