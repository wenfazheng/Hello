import './App.css';

//条件渲染
//技术方案： 三元表达式（常用） 逻辑&&运算

//1. 三元表达式 - 满足条件才渲染一个span标签
//2. &&
const flag = true

//JSX结构
function App() {
  return (
    <div className="App">
      { flag ? (
          <div><span> this is a span</span>
          </div>) : null}

          { true && <span>this is a handsome boy wenfa.zheng </span>}
    </div>
  );
}

export default App;
