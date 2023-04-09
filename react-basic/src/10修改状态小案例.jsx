import './App.css'
//通过类组件修改状态的方式 counter
import React from 'react'

class TestComponent extends React.Component {
  //1.定义组件状态state
  state = {
    //定义各种属性 全都是当前组件的状态
    count: 0,
    list: [1, 2, 3],
    person: {
      name: '发哥',
      age: 23
    }
  }

  //事件回调函数
  changeInformation = () => {
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, 4],
      person: {
        ...this.state.person,
        name: this.state.person.name + '太菜了'
      }
    })
  }
  render () {
    //2. 使用状态
    return (
      <div>
        <button onClick={() => this.changeInformation()}>{this.state.count}次Click</button>
        <div>{this.state.person.name}</div>


        <>{this.state.count}</>

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
