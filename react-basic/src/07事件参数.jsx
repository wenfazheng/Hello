import './App.css'
import React from 'react'

//函数组件的创建和渲染
// 创建
// 如何传递自定义参数
//1. 只需要一个额外参数{onclickHandler}=> {()=>clickHandler('自定义参数')}
//2. 既需要e也需要一个额外参数{(w)=>onclickHandler}-> {(e)=>clickHandler(e,'自定义参数')}

//组件首字母必须大写
function Hello() {
  const clickHandler = (e, msg) => {
    console.log('函数组件被触发了', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is a msg')}>Click me</div>
}

//JSX结构
function App() {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <Hello />
      <Hello></Hello>
    </div>
  )
}
export default App
