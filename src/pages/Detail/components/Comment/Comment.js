import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.css';
import Content from './Content/Content';
class Comment extends React.Component {
    state = {
        comment:[{
            "id": 1,
            "okr_id": 1,
            "user_id": 1,
            "content": "写的真好，棒棒的",
            "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }, {
            "id": 6, "okr_id": 1, "user_id": 1, "content": "666666666666666", "created_at": "0000-00-00 00:00:00", "username": "157775", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }]
    }
    render() {
        var {comment} = this.state;
        return <dic>
            <div className="comment-box">
                <div className="comment-box-title">
                    评论(100)
                </div>
                <div class="comment-frame">

                    {/* <div style={{ display: visible ? 'block' : 'none' }}>haha</div><button onClick={this.onChangeClick}>隐藏/显示</button> */}
                    <input className="aaa" type="text" onChange={this.onPasswordChange} placeholder="请输入您的内容" />
                    <input className="pinlun" type="submit" value="评论" onClick={this.onCommentClick} />
                </div>

                {
                    comment.map(item => {
                        return <Content a={item}></Content>
                    })
                }
            </div>
            <div className="more">
                <span className="mores">查看更多</span>
            </div>
        </dic>
    }
}

export default Comment;