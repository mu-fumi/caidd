import React from 'react';
import { connect } from 'dva';
import LoginHeader from '@/components/Login/Header'
import LoginFooter from '@/components/Login/Footer';
import './login.less';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <LoginHeader />



        <Row type="flex" justify="center" align="middle">
          <Col span={10}><DemoBox value={100}></DemoBox></Col>
          <Col span={7} style={{paddingLeft: 90}}>
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
                        <a className="" href="">立即注册</a>
                      </span>
                      <a className="login-form-forgot" href="">忘记密码</a>
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

      </React.Fragment >
    );
  }
}

Login.propTypes = {
};
export default connect()(Form.create()(Login));
