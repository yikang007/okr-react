import React from 'react';
import './Users.css';

class Users extends React.Component {
    render() {
        var a = this.props.a;
        return <div >
            <div className="user-top">
                <img src= { a.avatar }></img> <span>{ a.username }</span> <button>修改个人资料</button>
            </div>
        </div>
    }
}

export default Users;