import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMagnifyingGlass,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const mobileView = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      // 입력한 검색어 읽어오기
      let keyword = event.target.value;
      // url 바꿔주기
      navigate(`/?q=${keyword}`);
    }
  };
  const userLogout = () => {
    if (authenticate === true) {
      setAuthenticate(false);
    }
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
          <div onClick={userLogout}>
            {authenticate === false ? '로그인' : '로그아웃'}
          </div>
        </div>
      </div>
      <div className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/e/e5/HM-Logo.png?20110120234711'
          alt=''
          onClick={goToHome}
        />
      </div>
      {mobileView ? (
        <div className='menu-container'>
          <FontAwesomeIcon className='list-icon' icon={faList} />
          <div className='menu-area-mobile'>
            {menuList.map((menu) => (
              <div key={menu}>{menu}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
          <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type='text' placeholder='제품 검색' onKeyDown={search} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
