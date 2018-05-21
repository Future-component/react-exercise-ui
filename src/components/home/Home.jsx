/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col } from 'antd';
import Balance from '../../templates/shortcuts/Balance';
import Shortcuts from '../../templates/shortcuts/Index';
import Bookings from '../../templates/bookings/Index';

const style = {
    padding: '0'
};

class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={12} style={style}>
                       <Balance />
                    </Col>
                    <Col className="gutter-row" md={12} style={style}>
                       <Shortcuts />
                    </Col>
                </Row>
                <Row gutter={10}>
                  <Bookings />
                </Row>
            </div>
        )
    }
}

export default Dashboard;