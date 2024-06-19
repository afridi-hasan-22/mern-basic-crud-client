import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className='flex justify-between items-center py-3 px-4'>
        <div>Logo</div>
        <div>
          <ul className='flex space-x-4'>
            <Link to='/'><li>Home</li></Link>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Header;