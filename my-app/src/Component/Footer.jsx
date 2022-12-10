import React from 'react';
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className="Footer"> 
    <footer>  
    <p>Copyright Reserved {currentYear} ⓒ Ehsan Ellahi</p>
    </footer>  
    </div>
  );
}

export default Footer;