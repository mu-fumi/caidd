import React from 'react';
import { Menu, Icon, Input, Row, Col, Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import './header.less';



const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


const Search = Input.Search;


const LoginHeader = ({ dispatch,  }) => {

  const showModal = () => {
    this.setState({
      visible: true,
    });
  }
  const hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  return (

    <Row type="flex" justify="center" align="middle" className='login-header'>
      <Col span={4}><DemoBox value={50}></DemoBox></Col>
      <Col span={8}>
        <div className="logo">
          <div>
            <p>财多多</p>
            <p>CAIDUODUO.COM</p>
          </div>
          <div className="con-lib">
            <span>
              企业端
            </span>
          </div>
        </div>
      </Col>
      <Col span={4}><DemoBox value={50}></DemoBox></Col>
      <Col span={8}>
        <div className="login-header-right">
          <ul>
            <li onClick={showModal}>我要申诉</li>
            <li>
              <span>个人</span>
              <span className='actived'>企业</span>
            </li>
          </ul>
        </div>
      </Col>


      <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>


    </Row>



  );
};

LoginHeader.propTypes = {
  
};

export default LoginHeader;
