import './App.css'
import React from 'react'

//函数组件的创建和渲染
// 创建

//组件首字母必须大写
function Hello () {
  return <div>Hello</div>
}

//渲染<Hello/> - 自闭和
//<Hello></Hello>

//类组件的创建和渲染
class HelloComponent extends React.Component {
  render () {
    return <div>this is a class Component</div>
  }
}

//JSX结构
function App () {
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
