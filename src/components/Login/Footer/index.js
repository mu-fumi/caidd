import React from 'react';
import { Menu, Icon, Input } from 'antd';
import PropTypes from 'prop-types';
import  './footer.less';

const Search = Input.Search;


const LoginFooter = ({ dispatch, keys }) => {

  function handleClick(e) {
    console.log(e.key);
  }


  return (
    <div className='login-footer'>
        <p>Copyright © 2019 CDD. All Rights Reserved.</p>
        <p>成都市财多多有限公司版权所有  |  财多多网站服务条款  |  联系我们:13568542365</p>
    </div>
  );
};

LoginFooter.propTypes = {
    
};

export default LoginFooter;
