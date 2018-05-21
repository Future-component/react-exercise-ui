/**
 *  Created by beth on YYYY-MM-DD
 *  Class
 */
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const style = {
  row: {
    marginLeft: '-24px',
    marginRight: '-24px'
  },
  col: {
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '48px',
  },
  box1: {
    height: '238px',
    padding: '24px',
    background: '#F2F5FA'
  },
  box2: {
    height: '238px',
    padding: '24px',
    background: '#FAFBFD'
  },
  box3: {
    height: '238px',
    padding: '24px',
    background: '#FFFFFF'
  }
}

class Class extends Component {
    state = {
      data: [
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        },
        {
          className: '向日葵班级',
          courseName: '幼儿系列Level 2',
          createTime: moment().format('YYYY年MM月DD日'),
        }
      ]
    };
    componentDidMount() {
    };
    renderClasses = () => this.state.data.map((item, index) => (<Col className="gutter-row" md={4} style={style.col}>
      <div className="border" style={style.box2}>
        <div className="logo" />
        <span>{item.className}</span>
        <div className="fs-12">
          <div>课程：{item.courseName}</div>
          <div>创建：{item.createTime}</div>
        </div>
        <a>点击查看</a>
      </div>
    </Col>))
    render() {
        const { responsive, path } = this.props;
        return (
            <div className="uskid-card">
              <Row gutter={10} style={style.row}>
                <Col className="gutter-row" md={4} style={style.col}>
                  <div className="border" style={style.box1}>
                    添加班级
                    <Icon id="add" />
                  </div>
                </Col>
                {this.renderClasses()}
                <Col className="gutter-row" md={4} style={style.col}>
                  <div className="border" style={style.box3}>
                    已归档班级
                    <span className="fs-12">2个</span>
                    <a>点击查看</a>
                  </div>
                </Col>
              </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Class));
