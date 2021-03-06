import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import Router from '@/router'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'
import * as ROOT_action from '@/store/ROOT/action'

@withRouter
@connect(
    state => ({ ...state.ROOT }),
    dispatch => bindActionCreators({ ...ROOT_action }, dispatch)
)
class Right extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { ROOT_userInfo, ROOT_ChangeUser } = this.props
        if (ROOT_userInfo.name == '') {
            ROOT_ChangeUser({ name: Cookies.get('userName') })
        }
    }

    titleNode = () => {
        return (
            <span
                style={{ fontSize: '14px', cursor: 'pointer' }}
                onClick={this.logout}
            >
                退出
            </span>
        )
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        const { name } = this.props.ROOT_userInfo
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={this.titleNode()}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading>
                        <Router />
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right
