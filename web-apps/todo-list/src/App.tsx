import { useState } from "react";

let todos = ["Walk the dog", "Water the plants", "Wash the dishes"];

function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState(todos);
	function addTodo() {
		setTodoList([...todoList, todo]);
		setTodo("");
	}
	function deleteTodo(indexToDelete: number) {
		setTodoList(todoList.filter((_, ind) => ind !== indexToDelete));
	}
	return (
		<div>
			<h1>Todo List</h1>
			<div>
				<input
					type="text"
					placeholder="Add your task"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<div>
					<button onClick={() => addTodo()}>Submit</button>
				</div>
			</div>
			<ul>
				{todoList.map((val, ind) => (
					<li key={`todo-${ind}`}>
						<span>{val}</span>
						<button onClick={() => deleteTodo(ind)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
