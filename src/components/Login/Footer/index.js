import React from 'react';
import PropTypes from 'prop-types';
import  './footer.less';



const LoginFooter = ({ dispatch, keys }) => {
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
