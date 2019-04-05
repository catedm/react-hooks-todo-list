import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 0, title: 'My Todo', complete: false },
    { id: 1, title: 'My Todo 2', complete: false },
    { id: 2, title: 'My Todo 3', complete: true },
  ],
  currentTodo: {}
});

export default TodosContext;