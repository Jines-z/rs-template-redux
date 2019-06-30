import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { message } from 'antd'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'
import service from '@/service'
import * as ROOT_action from '@/store/ROOT/action'
import * as action from '@/store/Login/action'
import FormBox from '../components/FormBox'
import '../index.less'

@connect(
    state => ({ ...state.Login }),
    dispatch => bindActionCreators({ ...ROOT_action, ...action }, dispatch)
)
class Login extends Component {
    constructor() {
        super()
    }

    submit = form => {
        const { changeLoading, ROOT_ChangeUser, history } = this.props
        form.validateFields(async(err, values) => {
            if (!err) {
                changeLoading(true)
                let { userName, password } = values
                const param = {
                    userName,
                    password
                }
                const result = await service.login(param).catch(err => {
                    changeLoading(false)
                    throw err
                })
                changeLoading(false)
                if (result.success) {
                    let message = `M&${userName}&${password}`
                    let key = 'react_starter'
                    let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                    Cookies.set('JSESSIONID', session, { expires: 1, path: '/' })
                    Cookies.set('userName', userName, { expires: 1, path: '/' })
                    ROOT_ChangeUser({ name: userName })
                    history.push('/home')
                } else {
                    message.error('账号：admin ； 密码：123456')
                }
            }
        })
    }

    render() {
        return (
            <div className='Login_wrap clear clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit} {...this.props} />
                </div>
            </div>
        )
    }
}

export default Login
