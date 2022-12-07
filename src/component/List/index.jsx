import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'
import './index.css'
export default class index extends Component {
    state = {
        list: [],
    }

    // 获取用户列表
    getUserList = (keyWords) => {
        console.log('keyWords: ', keyWords);
        axios.get(`https://api.github.com/search/users?q=${keyWords}`).then(
            response => {
                console.log('成功了', response.data)
                this.setState({ list: response.data.items })
            },
            error => { console.log('失败了', error) }
        )
    }

    // 组件挂载完毕
    componentDidMount() {
        // 订阅消息
        this.pubsub_token = Pubsub.subscribe('search', (msg, data) => {
            console.log('msg,data: ', msg, data);
            this.getUserList(data)
        })
    }

    // 取消订阅
    componentWillUnmount() {
        Pubsub.unsubscribe(this.pubsub_token);
    }

    render() {
        const { list } = this.state

        return (
            <div className='userWarp'>
                <div className='userList'>
                    {list.map((_) => {
                        return (
                            <div key={_.id} >
                                <a href={_.html_url} className='user'>
                                    <img src={_.avatar_url} alt="" />
                                    <span className='name'>{_.login}</span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
