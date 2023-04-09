import './App.css'
import React from 'react'

class Counter extends React.Component {
  //1. 声明用来控制input value的react组件自己的状态
  state = {
    messgae: 'this is message',
  }
  //回调函数
  inputChange = (e) => {
    console.log('change事件触发了')
    //4.拿到输入框最新的值 交给state中的message
    this.setState({
      messgae: e.target.value,
    })
  }

  //产出UI模板结构
  render() {
    return (
      //2.给input框的value属性绑定 react state
      //3.给input框绑定一个change的事件 为了拿到当前输入框中的数据
      <input
        type="text"
        value={this.state.messgae}
        onChange={this.inputChange}></input>
    )
  }
}

// 根组件
function App() {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <Counter></Counter>
    </div>
  )
}
export default App
