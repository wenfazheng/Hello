import './App.css'
import React, { createRef } from 'react'

class Input extends React.Component {
  //实例属性可以自定义 语义化即可
  msgRef = createRef()

  getValue = () => {
    //通过msgRef后去input value的值
    console.log(this.msgRef.current.value)
  }

  //产出UI模板结构
  render () {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef}>
        </input>
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}

// 根组件
function App () {
  return (
    <div className="App">
      {/*渲染函数组件*/}
      <Input />
    </div>
  )
}
export default App
