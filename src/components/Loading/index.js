import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import * as ROOT_action from '@/store/ROOT/action'
import './index.less'

@withRouter
@connect(
    state => ({ ...state.ROOT }),
    dispatch => bindActionCreators({ ...ROOT_action }, dispatch)
)
class Loading extends Component {
    componentDidUpdate() {
        if (this.props.ROOT_loading) {
            this.props.ROOT_DelayLoading()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.props.ROOT_ChangeLoading(true)
        }
    }

    render() {
        const { ROOT_loading } = this.props
        return (
            <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={ROOT_loading}>
                {this.props.children}
            </Spin>
        )
    }
}

export default Loading
