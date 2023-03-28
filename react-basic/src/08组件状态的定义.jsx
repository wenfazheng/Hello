import './App.css'
//组件状态 类组件演示
import React from 'react'

class TestComponent extends React.Component {
  //1.定义组件状态
  state = {
    //定义各种属性 全都是当前组件的状态
    name: 'cp teacher'
  }

  //事件回调函数
  changeName = () => {
    //3. 修改state中的状态name
    //注意：不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({
      name: '发哥'
    })
  }
  render () {
    //2. 使用状态
    return (
      <div>
        this is a TestComponent
        当前name为: {this.state.name}
        <button onClick={this.changeName}>change Name</button>
      </div>
    )
  }
}

/*
* 总结
1.编写组件其实就是编写原生js类或者函数
2.定义状态必须通过Ltate 实例属性的方法 提供一个对象 名称是固定的就叫做state
3.修改state中的任何属性 都不可以通过直接赋值 必须走setstate方法 这个方法来自于继承得到
4.这里的this关键词 很容易出现指向错误的问题 上面的写法是最推荐和最规范的 没有this指向问题
*/


//JSX结构 根组件
function App () {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <TestComponent />
    </div>
  )
}
export default App
