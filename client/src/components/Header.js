import React, { Component } from 'react';
import '../css/header.css'
import { Row, Col, Button, Icon } from 'antd';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Header extends Component  {
  render() {
    return (
      <Row type="flex" className='headerContainer' justify="start">
        <Col xs={{ span: 5, push: 4 }} md={{ span: 2, push:5}}  >
          <img className='profileImg' src='https://avatars3.githubusercontent.com/u/8569238?v=4&u=3cb618386ff047e98a56751add49d3391a891a55&s=400'/>
        </Col>
        <Col xs={{ span: 14, push: 5 }} md={{ span: 16, push: 5 }}>
          <Row type="flex" justify="center" align="center">
            <p className='mainHeaderText'> Allan Felipe Murara </p>
          </Row>
          <Row type="flex" justify="center" style={{marginTop: '10px'}} align="start">
            <p className='childHeaderText'> Developer, curious, determined!</p>
            <p className='childHeaderText'> Studying Computer Science at <a href='https://lambdaschool.com/' target='_blank'>Lambda School</a> and Facebook Open Source Techonologies by my own.</p>
            <p className='childHeaderText'> I like to ride a bike at <a href='https://www.tripadvisor.com/Attraction_Review-g303582-d2202585-Reviews-Parque_Malwee-Jaragua_Do_Sul_State_of_Santa_Catarina.html' target='_blank'> Parque Malwee </a> or just enjoy the nature, play MTG Online and League Of Legends.</p>
            <p className='childHeaderText'> <a target='_blank' href='https://github.com/MuraraAllan/Fullstack-Javacript-Developer-Example-Project'> This Project on Github </a> </p>
          </Row>
          <Row type='flex' className='buttonBoxHeader' align='center' gutter={16} jusitfy='space-between'>
            <Col> <a href='/'> <Button type='primary' icon="home" ghost> Home </Button> </a> </Col>
            <Col> <a href='http://github.com/MuraraAllan' target='_blank'> <Button type='primary' icon="code-o" ghost>Github</Button> </a> </Col>
            <Col> <a href='https://www.linkedin.com/in/MuraraAllan/' target='_blank'> <Button type='primary'  icon="contacts" ghost> LinkedIn </Button> </a> </Col>
          </Row>
        </Col>
        
      </Row>
    )
  }
}

export default Header