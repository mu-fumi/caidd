import React from 'react';
import { Router, Route, Switch,Redirect  } from 'dva/router';
import dynamic from 'dva/dynamic';
import NProgress from 'nprogress';
import '@/common/global.less';

function RouterConfig({ history, app }) {
  NProgress.start()

  const Login = dynamic({
    app,
    component: () => require('./container/Login'),
  })

  const Reg = dynamic({
    app,
    component: () => require('./container/Reg'),
  })

  const ForgetPassword = dynamic({
    app,
    component: () => require('./container/ForgetPassword'),
  })



  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/reg" exact component={Reg} />
        <Route path="/forgetpwd" exact component={ForgetPassword} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
