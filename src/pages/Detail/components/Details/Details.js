import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

class Details extends React.Component {
    render() {
        var a = this.props.a;
        return <div>
            <div className="okr-object">
                <div className="okr-object-top">
                    <Link to="/user"><img src={a.avatar} /></Link>
                    <Link to="/user" className="bbb">{a.username}</Link>
                </div>
                <div className="contents">
                    <p>{a.object}</p>
                </div>
            </div>
            <div className="okr-key">
                <div className="okr-key-contents">{a.key_results}</div>
            </div>
            <div className="okr-key">
                <div className="okr-action-contents">{a.action}</div>
            </div>
        </div>
    }
}

export default Details;