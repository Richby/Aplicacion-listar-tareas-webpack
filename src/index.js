import './styles.css';

import { Todo, TodoList} from './classes/index';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';



export const todoList = new TodoList();


todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);