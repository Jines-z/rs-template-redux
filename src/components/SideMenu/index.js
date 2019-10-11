import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import router from '@/router/config'
import './index.less'
const SubMenu = Menu.SubMenu

@withRouter
class SideMenu extends Component {
    state = {
        keys: []
    }

    componentDidMount() {
        this.selectKey()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey()
        }
    }

    selectKey = () => {
        let keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({ keys: keys })
    }

    onSelect = ({ key }) => {
        this.props.history.push(key)
    }

    titleNode = item => {
        return (
            <span>
                <span className={'font icon-' + item.icon}></span>
                <span>{item.name}</span>
            </span>
        )
    }

    render() {
        return (
            <div className='SideMenu_wrap'>
                <Menu
                    mode='inline'
                    theme='dark'
                    onSelect={this.onSelect}
                    selectedKeys={this.state.keys}
                    defaultOpenKeys={['/' + this.state.keys[0].split('/')[1]]}
                >
                    {router.map(item =>
                        item.subRoute && item.subRoute.length > 0
                            ? (
                                <SubMenu key={item.path} title={this.titleNode(item)}>
                                    {item.subRoute.map(subItem =>
                                        <Menu.Item key={item.path + subItem.path}>
                                            <span>{subItem.name}</span>
                                        </Menu.Item>
                                    )}
                                </SubMenu>
                            )
                            : (
                                <Menu.Item key={item.path}>
                                    <span className={'font icon-' + item.icon}></span>
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                    )}
                </Menu>
            </div>
        )
    }
}

export default SideMenu
