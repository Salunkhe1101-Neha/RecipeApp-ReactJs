// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'

// const Navbar = ({setSearch}) => {
//   const linkStyle = {
//     margin: "1rem",
//     textDecoration: "none",
//     color: 'black',
//     display:'flex',
//     justifyContent:'space-around'

//   };
//   return (
//     <div className='navBar'>
//           <Link to={"/"}><a href=""><img src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg" height={'50px'} alt="" /></a></Link>
//            <Link to={"/"} style={linkStyle}>Home</Link>
//            {/* <Link to={"/about"} style={linkStyle}>About</Link>
//            <Link to={"/aboutMeaks"} style={linkStyle}>About Meals</Link>
//            <Link to={"/contact"} style={linkStyle}>Contact Us</Link> */}
//            {/* <Link to={"/search"} style={linkStyle}>Search</Link>*/}
//            <input type="text" placeholder='  Search Here' onChange={(e)=>setSearch(e.target.value)} style={{height:'30px', width:'300px', borderRadius:'10px'}} />

       
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setSearch }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div className='navBar'>
      <Link to={"/"} className="logo-link">
        <img src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg" height={'50px'} alt="" />
      </Link>
      <div className="nav-links">
        <Link to={"/"} style={linkStyle}>Home</Link>
        {/* Add more navigation links here */}
      </div>
      <div className="search-container">
        <input type="text" placeholder='Search Here' onChange={(e) => setSearch(e.target.value)} className="search-input" />
      </div>
    </div>
  );
};

export default Navbar;
