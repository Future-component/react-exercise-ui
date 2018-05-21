/**
 *  Created by beth on YYYY-MM-DD
 *  Bookings
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import moment from 'moment';

const style = {
  noClasses: {
    all: {
      textAlign: 'center',
      marginTop: '26px',
    },
    empty: {
      width: '100%',
      height: '120px',
      background: '#F2F5FA',
      border: '1px dashed'
    },
    p: { margin: '24px' },
    button: {
      width: '180px'
    }
  },
  classes: {
    paddingTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #E3EAF1'
  },
  booking: {
    marginTop: '12px',
    padding: '10px 24px'
  },
  bookingItem: {
    name: {
      display: 'inline-block',
      width: '30%',
    },
    time: {
      display: 'inline-block',
      width: '30%'
    },
    teacher: {
      display: 'inline-block',
      width: '10%'
    },
    opt: {
      display: 'inline-block',
      width: '30%',
      textAlign: 'right',
      fontSize: '12px'
    }
  }
}

class Bookings extends Component {
    state = {
      classes: [
        {
          className: '班级名称',
          bookings: [1, 2, 3, 4],
        }, {
          className: '班级名称',
          bookings: [1, 2, 3, 4],
        }, {
          className: '班级名称',
          bookings: [1, 2, 3, 4],
        }
      ],
      bookings: {
        1: {
          courseName: '综合-Lesson-1-1-Can Yo',
          teacherName: 'Thomas',
        },
        2: {
          courseName: '综合-Lesson-1-1-Can Yo',
          teacherName: 'Thomas',
        },
        3: {
          courseName: '综合-Lesson-1-1-Can Yo',
          teacherName: 'Thomas',
        },
        4: {
          courseName: '综合-Lesson-1-1-Can Yo',
          teacherName: 'Thomas',
        },
      }
    };
    componentDidMount() {
    };
    renderOperation = (booking) => {
      return (<div style={style.bookingItem.opt}>
        <a>进入教室</a>
        <a>取消预约</a>
      </div>);
    }
    renderBookings = (key, index) => {
      const booking = this.state.bookings[key];
      const startTime = moment().format('YYYY年MM月DD日 HH:mm');
      return (<div style={{...style.booking, marginTop: index % 4 % 2 === 0 ? '12px' : '6px' }} className={classNames({
        [`us-bg-color-${index % 4 > 1 ? 3 : 2}`]: true
      })}>
        <div style={style.bookingItem.name}>{booking.courseName}</div>
        <div style={style.bookingItem.time}>{startTime}</div>
        <div style={style.bookingItem.teacher}>{booking.teacherName}</div>
        {this.renderOperation(booking)}
      </div>);
    }
    renderClasses = () => this.state.classes.map((item, index) => {
      const bookings = item.bookings.map((subItem, subIndex) => (this.renderBookings(subItem, subIndex)))
      return (<div style={style.classes}>
        <span className={classNames({
          'small-round pull-left': true,
          [`us-color-${index % 6 + 2}`]: true,
        })}></span>
        <span className="fs-16">{item.className}</span>
        {bookings}
      </div>);
    })
    renderNoClasses = () => (<div style={style.noClasses.all}>
      <div style={style.noClasses.empty} />
      <div className="fs-16 us-font-color-4" style={style.noClasses.p}>最近一周没有课程安排，赶快去预约外教上课吧</div>
      <Button type="primary" style={style.noClasses.button}>预约外教课</Button>
    </div>)
    render() {
        const { responsive, path } = this.props;
        return (
            <div className="uskid-card">
              <div className="fs-18">即将开始的课程</div>
              {this.renderNoClasses()}
              {this.renderClasses()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Bookings));
