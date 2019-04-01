import React from 'react';
import { connect } from 'dva';
import LoginHeader from './../components/Login/Header'

function IndexPage() {
  return (
    <div className='logo-wrap'>
      <LoginHeader keys={['index']} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
