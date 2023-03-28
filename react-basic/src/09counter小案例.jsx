import './App.css'
//通过类组件修改状态的方式 counter
import React from 'react'

class TestComponent extends React.Component {
  //1.定义组件状态state
  state = {
    //定义各种属性 全都是当前组件的状态
    count: 0
  }

  //事件回调函数
  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    //2. 使用状态
    return (
      <div>
        <button onClick={this.changeCount}>{this.state.count}次Click</button>
      </div>
    )
  }
}

// 根组件
function App () {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <TestComponent />
    </div>
  )
}
export default App
