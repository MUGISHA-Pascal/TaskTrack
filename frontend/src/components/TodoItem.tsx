import React from "react";
type props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const TodoItem: React.FC<props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <>
      <div>
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? "hide-button" : "card--button__done"}
        >
          complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="card--button__delete"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
