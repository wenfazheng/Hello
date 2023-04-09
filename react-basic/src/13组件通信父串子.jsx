import './App.css'
import React from 'react'

//3.接收数据， props是一个对象 里面存着通过父组件传入的所有数据
function SonF(props) {
  return <div>我是函数子组件,{props.msg}</div>
}

//子组件
//Component的C一定要大写
class SonC extends React.Component {
  render() {
    return <div>我是类子组件,{this.props.msg}</div>
  }
}

//父组件
class App extends React.Component {
  //1.准备数据
  state = {
    message: 'this is a message',
  }
  //2.绑定数据
  render() {
    return (
      <div>
        <SonC msg={this.state.message} />
        <SonF msg={this.state.message} />
      </div>
    )
  }
}

export default App
