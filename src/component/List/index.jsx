import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        const { list } = this.props
        console.log('list: ', list);

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
