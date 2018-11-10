import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Users from './components/Users/Users';
import OkrItem from '../../components/OkrItem/OkrItem';

class User extends React.Component {

    state = {
        user:[{
            "id": 1,
            "username": "157470",
            "phone": "1574705775",
            "password": "123",
            "created_at": "0000-00-00 00:00:00",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }],
        okr: [{
            "id": 1,
            "object": "天冷了",
            "key_results": "水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水",
            "action": "真棒",
            "user_id": 1,
            "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        },{
            "id": 1,
            "object": "天冷了",
            "key_results": "水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水",
            "action": "真棒",
            "user_id": 1,
            "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        },{
            "id": 1,
            "object": "天冷了",
            "key_results": "水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水",
            "action": "真棒",
            "user_id": 1,
            "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }]

    }
    render() {
        var { user,okr } = this.state;
        return <div>
            <Header></Header>
            {
                user.map(item => {
                    return <Users a = {item}></Users>
                })
            }
            {
                okr.map(item => {
                    return <OkrItem a = {item}></OkrItem>
                })
            }



            {/* hello User page
            <Link to="/">Index</Link>
            <Link to='/user'>User</Link>
            <Link to='/detail'>Detail</Link> */}
        </div>
    }
}

export default User;