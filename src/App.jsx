/*
 * @Author: PC-20220916IUOV\Administrator 12312@qq.com
 * @Date: 2022-11-11 08:09:19
 * @LastEditors: PC-20220916IUOV\Administrator 12312@qq.com
 * @LastEditTime: 2022-12-07 10:07:40
 * @FilePath: \my-npx-react\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import './App.css'
// import Hello from "./component/Hello";
// import Welcome from "./component/Welcome";
import Search from "./component/Search";
import List from "./component/List";

export default class App extends Component {

  render() {
    return (
      <div className="warp">
        {/* <Hello />
        <Welcome /> */}
        <Search />
        <List />
      </div>
    )
  }
}
