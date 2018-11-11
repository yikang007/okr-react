import React, { Component } from 'react';
import './Header.css';
// import Popup from '../Popup/Popup';
import { Link } from 'react-router-dom';


class Header extends Component {
    // constructor() {
    //     super();
    //     this.login = this.login.bind(this);
    //     this.register = this.register.bind(this);
    //     this.onChange = this.onChange.bind(this); 
    // }
    state = {
        visible: true,
        visibles: true
    }
    login = () => {
        this.setState({ visible: !this.state.visible });
    }
    logins = () => {
        this.setState({ visible: !this.state.visible });
        this.setState({ visibles: !this.state.visibles });
    }

    register = () => {
        this.setState({ visibles: !this.state.visibles });
    }
    registers = () => {
        this.setState({ visible: !this.state.visible });
        this.setState({ visibles: !this.state.visibles });
    }

    close = () => {
        this.setState({ visible: !this.state.visible });
    }
    closes = () => {
        this.setState({ visibles: !this.state.visibles });
    }

    render() {
        var { visible, visibles } = this.state;

        return <div className="header">
            <div className="header-box">
                <Link className="log" to="/">Okr</Link>
                <div className="land">
                    <span className="landing" onClick={this.login}>登陆</span>
                    <span className="register" onClick={this.register}>注册</span>
                </div>

                <div style={{ display: visible ? 'none' : 'block' }}>
                    <div className="mask" ></div>
                    <div className="modal">
                        <div className="modal-title"><input onClick={this.close} type="image" src="https://github.com/diaodiao007/okr/blob/master/cha.jpg?raw=true" /></div>
                        <div className="modal-land">登陆</div>
                        <div className="input-box">
                            <input name="phone" autocomplete="off" placeholder="电话号码" /></div>
                        <div className="input-box">
                            <input name="password" autocomplete="off" placeholder="密码" /></div>
                        <div className="forget">忘记密码？</div>
                        <div className="modal-bottom">
                            <input id="login" type="submit" value="登陆" />
                        </div>
                        <div className="modal-bottom-2">没有账号?<span onClick={this.registers} className="register">注册</span></div>
                    </div>
                </div>

                <div style={{ display: visibles ? 'none' : 'block' }}>
                    <div className="mask"></div>
                    <div className="modal-2">
                        <div className="modal-title"><input onClick={this.closes} type="image" src="https://github.com/diaodiao007/okr/blob/master/cha.jpg?raw=true" /></div>
                        <div className="modal-land">注册</div>
                        <div className="input-box">
                            <input name="phone" autocomplete="off" placeholder="手机号码" /></div>
                        <div className="input-box" >
                            <input name="password" autocomplete="off" placeholder="请输入您的密码" /></div>
                        <div className="input-box">
                            <input name="token" autocomplete="off" placeholder="请输入6位验证码" />
                            <span className="gain">获取验证码</span>
                            <span className="gain-1">请在60秒内输入验证码</span>
                        </div>
                        <div className="modal-bottom">
                            <input id="register" type="submit" value="注册" />
                        </div>
                        <div className="modal-bottom-2">已有账号?<span onClick={this.logins} className="landing">登陆</span></div>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default Header;