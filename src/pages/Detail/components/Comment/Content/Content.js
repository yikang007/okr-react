import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

class Content extends React.Component {
    render() {
        var a = this.props.a;
        return <div>
            <div className="comment-object">
                <div className="comment-object-top">
                    <Link to="/user"><img src={a.avatar} /></Link>
                    <Link to="/user" className="bbb">{a.username}</Link>
                </div>
                <div className="contents">
                    <p>{a.content}</p>
                </div>
            </div>
        </div>
    }
}

export default Content;