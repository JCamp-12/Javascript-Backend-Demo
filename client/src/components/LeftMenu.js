import React, { Component } from 'react';
import { Menu, Icon, Row } from 'antd';
import '../css/leftMenu.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component  {
  render() {
    return (
      <Row type='flexbox'>
        <p> All examples will show Text Box with code retrieved from github using my GraphQL + DataLoader Endpoint, the requests are made over the V3 REST API.  </p>
        <Row type='flexbox'>
          <p> Code Examples </p>
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Authentication</span></span>}>
              <MenuItemGroup key="g1" title="Using Passport">
                <Menu.Item key="1">OAuth Linkedin (Constructing)</Menu.Item>
                <Menu.Item key="2">JWT Over Sign Up/Sign In</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Row>
      </Row>
    );
  }
}

export default LeftMenu