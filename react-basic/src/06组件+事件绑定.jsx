import './App.css'
import React from 'react'

//函数组件的创建和渲染
// 创建
// 如何传递自定义参数

//组件首字母必须大写
function Hello() {
  const clickHandler = (e) => {
    //阻止默认行为
    e.preventDefault()
    console.log('函数组件被触发了')
  }
  return (
    <div onClick={clickHandler}>
      <a href="https://baidu.com">百度</a>Hello
    </div>
  )
}

//渲染<Hello/> - 自闭和
//<Hello></Hello>

//类组件的创建和渲染
class HelloComponent extends React.Component {
  //事件回调函数（标准写法 避免this指向问题）
  //这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render() {
    return <div onClick={this.clickHandler}> this is a class Component</div>
  }
}

//JSX结构
function App() {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <Hello />
      <Hello></Hello>
      {/*渲染类组件*/}
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}
export default App
