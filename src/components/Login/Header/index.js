import React from 'react';
import { Menu, Icon, Input } from 'antd';
import PropTypes from 'prop-types';
import  './header.less';

const Search = Input.Search;


const LoginHeader = ({ dispatch, keys }) => {

  function handleClick(e) {
    console.log(e.key);
  }


  return (
    <div className='login-header'>
      <div className="logo">
        <div>
          <p>财多多</p>
          <p>CAIDUODUO.COM</p>
        </div>
        <div className="con-lib">企业端</div>
      </div>
      <div className="login-header-right">
        <ul>
          <li>我要申诉</li>
          <li>
            <span>个人</span>
            <span className='actived'>企业</span>
          </li>
        </ul>
      </div>







    </div>
  );
};

LoginHeader.propTypes = {
  keys: PropTypes.array.isRequired
};

export default LoginHeader;
