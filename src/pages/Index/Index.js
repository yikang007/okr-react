import React from 'react';
import { Link } from 'react-router-dom';
// import './Index.css';
import Header from '../../components/Header/Header';
import Publish from './components/Publish/Publish';
import OkrItem from '../../components/OkrItem/OkrItem';


class Index extends React.Component {

    state = {
        okrList: [{
            "id": 1,
            "object": "天冷了",
            "key_results": "水水水水水",
            "action": "真棒", "user_id": 1, "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        },
        {
            "id": 3,
            "object": "飞机飞过天空，天空之城",
            "key_results": "落雨下的黄昏",
            "action": "等我们", "user_id": 4,
            "created_at": "2018-11-03T11:28:41.000Z",
            "username": "11****",
            "avatar": ""
        },
        { "id": 4, "object": "吃饭", "key_results": "睡觉", "action": "打豆豆", "user_id": 9, "created_at": "0000-00-00 00:00:00", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 6, "object": "锄禾日当午", "key_results": "汗滴禾下土", "action": "古风二首", "user_id": 9, "created_at": "2018-11-03T14:11:29.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 7, "object": "努力", "key_results": "奋斗", "action": "嫖娼", "user_id": 9, "created_at": "2018-11-03T14:11:16.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 8, "object": "恭喜", "key_results": "IG", "action": "夺冠", "user_id": 9, "created_at": "2018-11-03T14:11:22.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 9, "object": "我要", "key_results": "打", "action": "十个", "user_id": 9, "created_at": "2018-11-03T14:11:43.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 10, "object": "天天", "key_results": "爆极品", "action": "真好", "user_id": 9, "created_at": "2018-11-03T14:11:04.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 11, "object": "吃鸡", "key_results": "外挂", "action": "死全家", "user_id": 9, "created_at": "0000-00-00 00:00:00", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 12, "object": "手机", "key_results": "电脑", "action": "ipad", "user_id": 9, "created_at": "2018-11-03T14:11:49.000Z", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 13, "object": "重庆", "key_results": "默哀", "action": "逝者已逝，生者安息", "user_id": 9, "created_at": "0000-00-00 00:00:00", "username": "1889768", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 14, "object": "Jque", "key_results": "", "action": "", "user_id": 8, "created_at": "2018-11-03T14:38:30.000Z", "username": "22****", "avatar": "" }, { "id": 15, "object": "易康66666666666666666", "key_results": "超帅的", "action": "真棒", "user_id": 1, "created_at": "0000-00-00 00:00:00", "username": "157775", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 16, "object": "asdjaasdf", "key_results": "", "action": "", "user_id": 4, "created_at": "2018-11-04T06:46:55.000Z", "username": "11****", "avatar": "" }, { "id": 31, "object": "修改资料", "key_results": "超帅的", "action": "真棒", "user_id": 14, "created_at": "0000-00-00 00:00:00", "username": "50452", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 32, "object": "飞机飞过天空", "key_results": "天空之城", "action": "落于下的黄昏的我们", "user_id": 4, "created_at": "2018-11-06T06:25:22.000Z", "username": "11****", "avatar": "" }, { "id": 33, "object": null, "key_results": "s's's's", "action": "s's", "user_id": 0, "created_at": "2018-11-06T06:40:54.000Z", "username": null, "avatar": null }, { "id": 34, "object": null, "key_results": "速度", "action": "速度", "user_id": 0, "created_at": "2018-11-06T06:42:56.000Z", "username": null, "avatar": null }, { "id": 35, "object": null, "key_results": "s'd", "action": "s", "user_id": 0, "created_at": "2018-11-06T06:45:08.000Z", "username": null, "avatar": null }, { "id": 36, "object": null, "key_results": "", "action": "", "user_id": 0, "created_at": "2018-11-06T06:45:24.000Z", "username": null, "avatar": null }, { "id": 37, "object": null, "key_results": "d's", "action": "", "user_id": 0, "created_at": "2018-11-06T06:48:45.000Z", "username": null, "avatar": null }, { "id": 38, "object": null, "key_results": null, "action": null, "user_id": 0, "created_at": "2018-11-06T06:50:59.000Z", "username": null, "avatar": null }, { "id": 39, "object": "a's'd", "key_results": "d's", "action": "a's'd", "user_id": 0, "created_at": "2018-11-06T06:52:08.000Z", "username": null, "avatar": null }, { "id": 40, "object": "s", "key_results": "s", "action": "s", "user_id": 0, "created_at": "2018-11-06T06:53:15.000Z", "username": null, "avatar": null }, { "id": 41, "object": "s", "key_results": "d", "action": "s", "user_id": 4, "created_at": "2018-11-06T06:55:57.000Z", "username": "11****", "avatar": "" }, { "id": 42, "object": "s's", "key_results": "s's's's", "action": "s's", "user_id": 4, "created_at": "2018-11-06T06:58:20.000Z", "username": "11****", "avatar": "" }, { "id": 43, "object": "易康", "key_results": "超帅的", "action": "水水水水水水水", "user_id": 1, "created_at": "0000-00-00 00:00:00", "username": "157775", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }, { "id": 44, "object": "", "key_results": "", "action": "", "user_id": 1, "created_at": "0000-00-00 00:00:00", "username": "157775", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png" }], "user_data": []
    }

    render() {
        // var {okrList} = this.state;
        var okrList = this.state.okrList;
        // console.log("okrList:", okrList);
        return <div>
            <Header></Header>
            <Publish></Publish>

            {
                okrList.map(item => {
                    return <OkrItem a={item}></OkrItem>
                })
            }
        </div>
    }
}

export default Index;