import React from 'react';


const Footer = () => {
  const hours = new Date().getHours();
  const open = 9;
  const close = 18;
  const isOpen = hours > open && hours < close; // use ternary instead of a condition inside the if statement
 
  return(
    <footer className="footer">
      {
       isOpen ? (<p>We are open until {`${close}hours`}</p>) : (<p>Come visit us between {`${open}am and ${close}pm`}</p>)
      }
    </footer>
  )
}

export default Footer;
