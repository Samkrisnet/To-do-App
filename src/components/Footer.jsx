import styles from "../css/footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        <h3>Completed Todos: {completedTodos}</h3>
      </span>
      <span className={styles.item}>
        <h3>Total Todos: {totalTodos}</h3>
      </span>
    </div>
  );
}
