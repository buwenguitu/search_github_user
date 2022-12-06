/*
 * @Author: PC-20220916IUOV\Administrator 12312@qq.com
 * @Date: 2022-11-11 08:09:19
 * @LastEditors: PC-20220916IUOV\Administrator 12312@qq.com
 * @LastEditTime: 2022-12-06 15:35:58
 * @FilePath: \my-npx-react\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import axios from 'axios'
import './App.css'
// import Hello from "./component/Hello";
// import Welcome from "./component/Welcome";
import Search from "./component/Search";
import List from "./component/List";

export default class App extends Component {
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

  render() {
    const { list } = this.state
    return (
      <div className="warp">
        {/* <Hello />
        <Welcome /> */}
        <Search getUserList={this.getUserList} />
        <List list={list} />
      </div>
    )
  }
}
