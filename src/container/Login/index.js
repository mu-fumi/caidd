import React from 'react';
import { connect } from 'dva';
import LoginHeader from '@/components/Login/Header'

function Login() {
  return (
    <React.Fragment>
      <LoginHeader keys={['index']} />
    </React.Fragment>
  );
}

Login.propTypes = {
};

export default connect()(Login);
