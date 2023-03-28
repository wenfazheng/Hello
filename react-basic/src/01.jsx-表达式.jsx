import './App.css'

//1.识别常规变量
//2.原生js方法调用
//3.三元运算符（常用）
const name = '郑文发和wenfazheng'
const getAge = () => {
  return 18
}
const flag = true
//JSX结构
function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag ? '发哥真棒' : 'wenfa真菜'}
    </div>
  )
}

export default App
