/**
 *  Created by beth on YYYY-MM-DD
 *  Foreign
 */
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const style = {
  card: {
    float: 'left',
    marginTop: '24px',
    padding: '24px',
    width: 'calc(50% - 12px)',
    minHeight: '270px',
    background: 'rgba(255,255,255,1)',
    borderRadius: '4px',
    border: '1px solid #E3EAF1',
    overflow: 'hidden'
  },
  detail: {
    marginTop: '12px',
    marginBottom: '24px'
  },
  marginRight: {
    marginRight: '24px'
  },
  introduction: {
    paddingTop: '24px',
    borderTop: '1px solid #E3EAF1',
  }
};

class Foreign extends Component {
    state = {
      data: [
        {
          name: 'lan Keller',
          sex: '男',
          experience: '4年',
          nationality: 'United States of America',
          introduction: "Hello, my name is Ian and it’s great to meet all of you! I originally come from Ottawa, Canada, but have lived in many different places. I went to university in Toronto, Canada for public administration and have a postgraduate certificate in international development......"
        }, 
        {
          name: 'lan Keller',
          sex: '男',
          experience: '4年',
          nationality: 'United States of America',
          introduction: "Hello, my name is Ian and it’s great to meet all of you! I originally come from Ottawa, Canada, but have lived in many different places. I went to university in Toronto, Canada for public administration and have a postgraduate certificate in international development"
        },
        {
          name: 'lan Keller',
          sex: '男',
          experience: '4年',
          nationality: 'United States of America',
          introduction: "Hello, my name is Ian and it’s great to meet all of you! I originally come from Ottawa, Canada, but have lived in many different places. I went to university in Toronto, Canada for public administration and have a postgraduate certificate in international development......"
        }, 
        {
          name: 'lan Keller',
          sex: '男',
          experience: '4年',
          nationality: 'United States of America',
          introduction: "Hello, my name is Ian and it’s great to meet all of you! I originally come from Ottawa, Canada, but have lived in many different places. I went to university in Toronto, Canada for public administration and have a postgraduate certificate in international development"
        }
      ]
    };
    componentDidMount() {
    };
    renderForeignDetail = () => this.state.data.map((item, index) => {
      const introduction = item.introduction.length > 100 ?
        (<span>{item.introduction.slice(0, 100)}....<a>点击查看更多信息</a></span>)
         : item.introduction;
      return ((<div style={{...style.card, marginRight: index % 2 ? '0' : '24px' }} key={index}>
        <div className="logo" />
        <div>
          <div className="fs-18" style={style.name}>{item.name}</div>
          <div style={style.detail}>
            <span style={style.marginRight}>性别：{item.sex}</span>
            <span style={style.marginRight}>教学经验：{item.experience}</span>
            <span style={style.marginRight}>国籍：{item.nationality}</span>
          </div>
          <div style={style.introduction}>
            {introduction}
          </div>
        </div>
      </div>));
    })
    render() {
        const { responsive, path } = this.props;
        return (
            <div className="uskid-card clearfix">
              <div className="fs-18">外教介绍</div>
              {this.renderForeignDetail()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Foreign));
