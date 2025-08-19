import React, { useEffect, useState } from 'react';
import "./header.css";
import Wrapper from '../wrapper/wrapper';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import logo from "../../photos/logo.png";
import Sidebar from '../sidebar/sidebar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToSaved = () => {
    navigate("/savelist")
  };

  const savedItems = useSelector((state) => state.saved.items);

  return (
    <header className='header-container'>
      <Wrapper>
        <div className="menu-container">
          <div className="logo flex-row">
            <img className='img-logo' src={logo} alt="foto" />
            <span>Yeddi 24 Faktlar</span>
          </div>
          <div className="header-icon flex-row">
            <div className='flex-row badge-container'>
              <span className={`flex-row ${savedItems.length == 0 ? "badge-zero" : "badge"}`}>
                {savedItems.length > 0 ? savedItems.length : 0}
              </span>
              <BookmarksIcon className='icon' onClick={goToSaved} />
            </div>
            <MenuIcon onClick={() => setOpen(!open)} className='icon' />
          </div>
        </div>
        <Sidebar open={open} setOpen={setOpen} />
      </Wrapper>
    </header>
  )
}

export default Header;