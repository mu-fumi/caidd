import React from 'react';
import { Row, Col, } from 'antd';
import { connect } from 'dva';
import './header.less';


const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const LoginHeader = ({ dispatch, visible, title }) => {

  const showModal = () => {
    dispatch({
      type: 'login/changeModal',
      payload: {
        visible: true,
        title: '我要申诉'
      }
    })
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
            <li onClick={(e) => showModal()}>我要申诉</li>
            <li>
              <span>个人</span>
              <span className='actived'>企业</span>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};


function mapStateToProps(state) {
  const { visible, title } = state;
  return {
    visible,
    title
  };
}



export default connect(mapStateToProps)(LoginHeader);
