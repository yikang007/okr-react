import React, { Component } from 'react';
import './OkrItem.css';
import { Link } from 'react-router-dom';


class OkrItem extends Component {
    render() {

        var a = this.props.a;

        return <div>
            <div className="title">
                <div className="okr-title">
                    <Link to="/user"><img src={a.avatar} /></Link>
                    <Link to="/user">{a.username}</Link>
                    <span>{a.created_at}</span>
                </div>
                <div className="okr-content">
                    <Link to="/detail">{a.object}</Link>
                </div>
            </div>
        </div>
    }
}

export default OkrItem;