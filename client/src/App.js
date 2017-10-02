import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import RowCol from './components/RowCol'
import LeftMenu from './components/LeftMenu'
import { Row, Col } from 'antd'

class App extends Component {
  render() {
    return (
      <Row className='mainDiv'>
        <Header/>
        {/* this grid will manage the sidebar column and the main grid where the current page code will be displayed over graphql + relay :)    */}
        <Row type='flex'>
          <Col span={10}>
            <LeftMenu />
          </Col>
        </Row>
        {/* <RowCol /> */} 
      </Row>
    );
  }
}

export default App;
