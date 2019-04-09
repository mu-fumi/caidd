import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Form, Input, Row, Col, Upload, Icon, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class UserEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.props.dispatch({
      type: 'login/changeModal',
      payload: {
        visible: false,
      }
    })
  };

  okHandler = () => {
    const { PropsOnOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        PropsOnOk(values);
        this.hideModelHandler();
      }
    });
  };


  render() {
    const { visible, title, } = this.props.LoginState;
    const { getFieldDecorator } = this.props.form;
    const { name, account, tel, idCardCountry, reasons, idCardFigure } = this.props.record;
    const formItemLayout = {
      // labelCol: { span: 6 },
      // wrapperCol: { span: 14 },
    };

    return (
      <span>
        <Modal
          title={title}
          width='740px'
          visible={visible}
          onOk={this.okHandler}
          style={{ top: 40 }}
          maskClosable={false}
          onCancel={this.hideModelHandler}
          cancelText='222'
          destroyOnClose
          footer={[
            <Button
              key="submit"
              type="danger"
              shape='round'
              style={{ textAlign: 'center' }}

              onClick={this.okHandler}>
              提交申述
            </Button>,
          ]}
        >
          <Form onSubmit={this.okHandler}
            className="ant-advanced-search-form"
          >
            <Row gutter={24}>
              <Col span={12}  >
                <Form.Item label="申述账号">
                  {getFieldDecorator('account', {
                    rules: [{
                      required: false,
                      message: '申述账号不能为空',
                    }],
                  })(
                    <Input placeholder="输入申述账号" />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}  >
                <Form.Item label="申诉人姓名">
                  {getFieldDecorator('name', {
                    rules: [{
                      required: false,
                      message: '申诉人姓名不能为空',
                    }],
                  })(
                    <Input placeholder="输入申诉人姓名" />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <FormItem {...formItemLayout} label="联系方式">
              {getFieldDecorator('tel', {
                rules: [{
                  required: false,
                  message: '联系方式不能为空',
                }],
              })(<Input placeholder='输入联系方式' />)}
            </FormItem>
            <Row gutter={24}>
              <Col span={12}  >
                <FormItem {...formItemLayout} label="身份证">
                  {getFieldDecorator('idCardCountry', {
                    rules: [{
                      message: '身份证国徽面不能为空',
                    }],
                  })(
                    <Upload.Dragger name="files" >
                      <p className="ant-upload-drag-icon">
                        <Icon type="plus" />
                      </p>
                      <p className="ant-upload-text">身份证国徽面</p>
                    </Upload.Dragger>
                  )}
                </FormItem>
              </Col>
              <Col span={12}  >
                <FormItem {...formItemLayout} label=" " colon={false} >
                  {getFieldDecorator('idCardFigure', {
                    rules: [{
                      message: '身份证人像面不能为空',
                    }],
                  })(
                    <Upload.Dragger name="files" >
                      <p className="ant-upload-drag-icon">
                        <Icon type="plus" />
                      </p>
                      <p className="ant-upload-text">身份证人像面</p>
                    </Upload.Dragger>
                  )}
                </FormItem>
              </Col>
            </Row>
            <FormItem {...formItemLayout} label="申述原因">
              {getFieldDecorator('reasons', {
                rules: [{
                  required: false,
                  message: '申述原因不能为空',
                }],
              })(<TextArea placeholder='输入申述原因' />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}


const LoginStateProps = (state) => {
  return {
    LoginState: state.login,
  }
}

export default connect(LoginStateProps)(Form.create()(UserEditModal));