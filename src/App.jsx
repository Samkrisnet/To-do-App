import Todo from "./components/Todo";
import Header from "./components/Header";
// import TodoList from "./components/TodoList";
// import CssTryouts from "./css-styling-examples/CssTryouts";
// import InlineComponent from "./css-styling-examples/InlineComponent";
// import OutlineComponent from "./css-styling-examples/OutlineComponent";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {

  return (
    <div className="App">
      <Header />
      <Todo />
      {/* <TodoList /> */}
      {/* <InlineComponent /> */}
      {/* <CssTryouts /> */}
      {/* <OutlineComponent /> */}
    </div>
  );
}

export default App;
