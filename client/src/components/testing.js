import React, { Component } from 'react';
import '../css/header.css'
import { Row, Col, Button } from 'antd';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Header extends Component  {
  render() {
    return (
      <Row type="flex" justify="start">
        <Col xs={{ span: 7, push: 4 }} md={{ span: 3, push: 6}}  >
          <img className='profileImg' src='https://avatars3.githubusercontent.com/u/8569238?v=4&u=3cb618386ff047e98a56751add49d3391a891a55&s=400'/>
        </Col>
        <Col xs={{ span: 13, push: 4 }} md={{ span: 21, push: 6 }}>
          <Row type="flex" justify="center" >
            <span> Allan Murara </span>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Header