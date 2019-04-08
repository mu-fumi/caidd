import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import LoginHeader from '@/components/Login/Header'
import LoginFooter from '@/components/Login/Footer';
import './login.less';
import AppealModal from './AppealModal';

import { Card, Col, Row, Form, Icon, Input, Button, Checkbox, } from 'antd';
const { Meta } = Card;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;



class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <LoginHeader showModal={this.showModal} />

        <Row type="flex" justify="center" align="middle">
          <Col span={10}><DemoBox value={100}></DemoBox></Col>
          <Col span={7} style={{ paddingLeft: 90 }}>
            <div className='login-card'>

              <Card title="登录" style={{ width: 430, height: 400 }}>

                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item className="form-item">
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input placeholder="请输入邮箱号" style={{ height: 42 }} />
                    )}
                  </Form.Item>

                  <Form.Item className="form-item" style={{ marginBottom: 27 }}>
                    <Row gutter={8}>
                      <Col span={12}>
                        {getFieldDecorator('captcha', {
                          rules: [{ required: true, message: 'Please input the captcha you got!' }],
                        })(
                          <Input style={{ height: 42 }} placeholder="请输入验证码" />
                        )}
                      </Col>
                      <Col span={12}>
                        <Button style={{ height: 42 }} >获取验证码</Button>
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item className="form-item">
                    <Button className="login-btn" block>登录</Button>
                  </Form.Item>

                  <Form.Item className="form-item" style={{ marginBottom: 28 }}>
                    <Col span={24}>
                      <span> 没有账号？
                        <Link className="" to="/reg">立即注册</Link>
                      </span>
                      <Link className="login-form-forgot" to="/forgetpwd">忘记密码</Link>
                    </Col>
                  </Form.Item>

                  <Form.Item className="form-item">
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Icon type="qq" />
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                      <Icon type="wechat" />
                    </Col>
                  </Form.Item>


                </Form>


              </Card>

            </div>
          </Col>
          <Col span={4}><DemoBox value={80}></DemoBox></Col>
        </Row>

        <LoginFooter />

        <AppealModal />
      </React.Fragment >
    );
  }
}

Login.propTypes = {
};
export default connect()(Form.create()(Login));
