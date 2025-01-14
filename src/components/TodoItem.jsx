import styles from "../css/todoitem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

export default function TodoItem({ item, todos, setTodos }) {
  function handledelete(item) {
    console.log("Delete icon clicked for item: ", item);
     if (window.confirm("Are you sure you want to delete this Todo Item please?"))//this function checks out if the delete operation is a deliberate one...
    setTodos(todos.filter((todo) => todo !== item));//this filter thru all the todo items and return the todo items not equal to...
  }
  function handleclick(name) {
    // console.log("Item text clicked...", name);

    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo//this operation maps thru all the todo items to seperate the completed items from incomplete ones.
      )
    );
  }
  const finishItem = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={finishItem} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>
        <FaDeleteLeft
          className={styles.deletebtn}
          onClick={() => handledelete(item)}
        />
      </div>
      <hr className={styles.seperator} />
    </div>
  );
}
