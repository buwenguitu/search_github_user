import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'
export default class index extends Component {
    search = () => {
        // 调用pubsub方法
        Pubsub.publish('search', this.keyWords.value)
    }
    render() {
        return (
            <div className='searchWarp'>
                <h2>搜索github用户</h2>
                <div className='search'>
                    <input ref={e => { this.keyWords = e }} placeholder='请输入关键字查询' />
                    <button onClick={this.search}>查询</button>
                </div>
            </div>
        )
    }
}
