import { useState } from "react";
import styles from "./todoform.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name: "", done: false});


  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.inputField}
          onChange={(e) => setTodo({name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Input your Todo Items Here..."
        />
        <button className={styles.submit} type="Submit">
          Add
        </button>
      </div>
    </form>
  );
}
