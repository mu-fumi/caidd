import React from 'react';
import { Menu, Icon, Input } from 'antd';
import PropTypes from 'prop-types';


const Search = Input.Search;


const LoginHeader = ({ dispatch, keys }) => {

  function handleClick(e) {
    console.log(e.key);
  }


  return (
    <div>
      <div className="logo">
        <p>财多多</p>
        <p>CAIDUODUO.COM</p>
      </div>
      <div className="">企业端</div>
      <div className="">
        <ul>
          <li>我要申诉</li>
          <li>
            <span>个人</span>
            <span>企业</span>
          </li>
        </ul>
      </div>





      <Menu
        onClick={handleClick}
        selectedKeys={keys}
        mode="horizontal"
      >




        <Menu.Item key="node" disabled>
          <Icon type="tag" />CNODE
        </Menu.Item>

        <Menu.Item key="search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
        </Menu.Item>

      </Menu>







    </div>
  );
};

LoginHeader.propTypes = {
  keys: PropTypes.array.isRequired
};

export default LoginHeader;
