/**
 *  Created by beth on YYYY-MM-DD
 *  Staff
 */
import React, { Component } from 'react';
import { Button, Table, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
      <span>
    <a>Action 一 {record.name}</a>
    <span className="ant-divider" />
    <a>Delete</a>
    <span className="ant-divider" />
    <a className="ant-dropdown-link">
      More actions <Icon type="down" />
    </a>
  </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

const style = {
  marginBottom: '24px',
}

class Staff extends Component {
    state = {
    };
    componentDidMount() {
    };
    render() {
        const { responsive, path } = this.props;
        return (
            <div className="uskid-card">
              <div className="fs-18" style={style}>员工管理<Button type="primary" className="pull-right">添加员工</Button></div>
              <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Staff));
