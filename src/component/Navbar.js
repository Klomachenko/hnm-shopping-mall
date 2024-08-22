import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성',
  ];

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/e/e5/HM-Logo.png?20110120234711'
          alt=''
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' placeholder='제품 검색' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
