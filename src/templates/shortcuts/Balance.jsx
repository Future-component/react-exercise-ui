/**
 *  Created by beth on YYYY-MM-DD
 *  Balance
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { priceFormat } from '../../utils';

const style = {
    button: {
        position: 'absolute',
        top: '100px',
        right: '48px'
    },
};

class Balance extends Component {
    state = {
        balance: 15000,
        number: 100
    };
    componentDidMount() {
    };
    handleClick = () => {
        this.setState({
            balance: this.state.balance > 0 ? 0 : 15000,
            number: this.state.number > 0 ? 0 : 100
        });
    }
    render() {
        const { responsive, path } = this.props;
        return (
            <div className="uskid-card">
              <div className="fs-18">当前余额</div>
              <div className="fs-36" style={{ marginTop: '12px' }}>
                <span className={!this.state.balance && 'us-font-color-5'}>{priceFormat(this.state.balance.toString())}</span>
                <span className="fs-18" style={{ marginLeft: '12px' }}>元（
                  <span className={!this.state.number && 'us-font-color-5'}>{this.state.number}</span>
                节课）</span>
              </div>
              <Button type={!this.state.balance ? 'orange' : 'primary'} style={style.button} onClick={this.handleClick}>立即充值</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return {responsive};
};

export default withRouter(connect(mapStateToProps)(Balance));
