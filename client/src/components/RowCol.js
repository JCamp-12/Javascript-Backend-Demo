import React, { Component } from 'react';
import '../css/header.css'
import { Row, Col, Button } from 'antd';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Header extends Component  {
  render() {
    return (
      <Row>
      <Button/>
      <p>Align Top</p>
      <Row type="flex" justify="center" align="top">
        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        <Col span={12}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>
  
      <p>Align Center</p>
      <Row type="flex" justify="space-around" align="middle">
        <Col md={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>
  
      <p>Align Bottom</p>
      <Row type="flex" justify="space-between" align="bottom">
        <Col md={4}><DemoBox value={100}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={50}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={120}>col-4</DemoBox></Col>
        <Col md={4}><DemoBox value={80}>col-4</DemoBox></Col>
      </Row>
      
      <span>   Extra small menos que 576px	 </span>
      <br />
      <span> Small mais que 576px </span>
      <br />
      <span> Medium mais que 768px	Large </span>
      <br/> 
      <span> Large mais que 992px </span>
      <br/>
      <span> 	Extra large mais que 1200px  </span>
    </Row>
    )
  }
}

export default Header