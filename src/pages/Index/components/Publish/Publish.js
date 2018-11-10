import React from 'react';
// import { Link } from 'react-router-dom';
import './Publish.css';

class Publish extends React.Component {
    render() {
        return <div>
            <div className="post">
                <div className="post-title">给自己定个小目标吧！！！</div>
                <div className="post-box">
                    O<input type="text" name="o" placeholder="请输入您的内容" />
                    K<input type="text" name="k" placeholder="请输入您的内容" />
                    R<input type="text" name="r" placeholder="请输入您的内容" />
                </div>
                <div className="post-bottom"><input id="release" type="submit" value="发布" /></div>
            </div>
        </div>
    }
}

export default Publish;