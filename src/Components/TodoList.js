import React, { useContext } from 'react';
import TodosContext from '../context';

function TodosList() {
  const { state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4" key={todo.id}>
            <span
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}`}
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
            >
              {todo.title}
            </span>
            <button onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo })}>
              <img src="https://icon.now.sh/edit/0050c0" alt="Edit icon" className="h-6" />
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}>
              <img src="https://icon.now.sh/delete/8b0000" alt="Delete icon" className="h-6" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList;
