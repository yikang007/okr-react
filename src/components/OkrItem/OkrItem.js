import React, { Component } from 'react';
import './OkrItem.css';
import { Link } from 'react-router-dom';


class OkrItem extends Component {
    render() {

        var a = this.props.a;

        return <div>
            <div className="title">
                <div className="okr-title">
                    <a><img src={a.avatar} /></a>
                    <Link to="/user">{ a.username }</Link>
                    <span>{ a.created_at }</span>
                </div>
                <div className="contents">
                    {/* <a href="/details?id={{id}}">{ a.object }</a> */}
                    <Link to="/detail">{ a.object }</Link>
                </div>
            </div>
        </div>
    }
}

export default OkrItem;