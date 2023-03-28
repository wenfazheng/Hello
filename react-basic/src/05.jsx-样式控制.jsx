import './App.css'

//jsx 样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性即可
// 2. 类名样式 - 在元素身上绑定一个className属性即可

const style = {
  color: 'red',
  fontSize: '30px',
}

//3. 动态控制active类名 满足条件才有 三元表达式
const flag = false

//JSX结构
function App() {
  return (
    <div className="App">
      <span style={style}>我喜欢🍔</span>
      <span className={flag ? 'active' : ''}> 还喜欢🍎 </span>
    </div>
  )
}

export default App
