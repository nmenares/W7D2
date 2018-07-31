import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ( {todos, receiveTodo, receiveTodos} ) => {
  const keys = Object.keys(todos);

  return(

    <div>
      <h1>Todo List goes here!</h1>
      <ul>
        {keys.map((key, idx) => <TodoListItem todo={todos[key]} key={idx} /> )}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )

};


export default TodoList;
