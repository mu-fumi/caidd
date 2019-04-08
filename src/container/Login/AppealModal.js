import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

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
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children, visible, title, name } = this.props.LoginState.login;
    console.log(visible);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title={title}
          visible={visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          12313132131313
        </Modal>
      </span>
    );
  }
}


const LoginStateProps = (state) =>{
  return {
    LoginState:state, 
  }
}

export default connect(LoginStateProps)(Form.create()(UserEditModal));