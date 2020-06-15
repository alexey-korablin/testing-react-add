import React from 'react';

import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header data-testid='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img data-testid='logoIMG' src={Logo} alt='Logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
