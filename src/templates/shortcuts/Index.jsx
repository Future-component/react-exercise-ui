/**
 *  Created by beth on YYYY-MM-DD
 *  Shortcuts
 */
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const style = {
  li: {
    width: '16%',
    float: 'left',
  },
  top: {
    margin: '0 auto',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
  }
};

class Shortcuts extends Component {
    state = {
      menus: [
        { key: '/app/staff', title: '添加员工', icon: 'home', color: 'us-color-2' },
        { key: '/app/class', title: '添加班级', icon: 'home', color: 'us-color-3' },
        { key: '/app/for', title: '预约外教课', icon: 'home', color: 'us-color-4' },
        { key: '/app/crm', title: 'CRM系统', icon: 'home', color: 'us-color-5' },
        { key: '/app/helper', title: '帮助文档', icon: 'home', color: 'us-color-6' },
        { key: '/app/init', title: '初始化引导', icon: 'home', color: 'us-color-7' }
      ]
    };
    componentDidMount() {
    };
    renderShortcutItem = () => {
      const menus = this.state.menus.map((item, index) => (<li style={style.li}>
        <div className={item.color} style={style.top}>
          <Icon id={item.icon} />
        </div>
        <p className="center fs-12">{item.title}</p>
      </li>));
      return (<ul>{menus}</ul>)
    }
    render() {
        const { responsive, path } = this.props;
        return (
          <div className="uskid-card">
            <div className="fs-18">快捷操作</div>
            <div style={{ marginTop: '12px' }}>
              {this.renderShortcutItem()}
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Shortcuts));
