import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Layouts from './Layouts'
import Login from './Login'
import Cookies from 'js-cookie'

@withRouter
class Pages extends Component {
    constructor(props) {
        super(props)
        this.pathname = this.props.location.pathname
    }

    checkJsessionID = () => {
        if (this.props.location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login')
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            }
        }
    }

    componentWillMount() {
        if (this.pathname == '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            } else {
                this.props.history.replace('/login')
            }
        } else {
            this.checkJsessionID()
        }
    }

    componentWillReceiveProps() {
        this.checkJsessionID()
    }

    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={Layouts} />
            </Switch>
        )
    }
}

export default Pages
