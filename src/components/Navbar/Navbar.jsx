import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="navbarcontainer">
        <div className="branding">
          <img src="src\assets\logo.jpg" alt="Brand Logo" />
        </div>
        <div className="profileandsearchbar">
          <div className="searchbar">
            <input type="text" placeholder='Search' />
            <SearchIcon className='searchicon' />
          </div>
          <div className="profile">
            <img src="src\assets\userlogo.png" alt="User Logo" />
          </div>
        </div>
        <DragHandleIcon fontSize='large' className='menuicon' onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={`${isOpen ? "menuopen open" : "menuopen"}`}>
        <div className="menucontainer">
          <div className="searchbar">
            <input type="text" placeholder='Search' />
            <SearchIcon className='searchicon' />
          </div>
          <div className="profile">
            <img src="src\assets\userlogo.png" alt="User Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
