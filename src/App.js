import { useState } from "react";
import { TaskRow } from "./components/taskRow";
import { TaskBanner } from "./components/taskBanner";

function App() {
	const [username, setUserName] = useState("rodri");
	const [taskItems, setTaskItems] = useState([
		{
			name: "task one",
			done: false,
		},
		{
			name: "task two",
			done: false,
		},
		{
			name: "task three",
			done: true,
		},
		{
			name: "task four",
			done: false,
		},
	]);
	const ToggleTask = (task) => setTaskItems(taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)));
	const taskTableRows = () => taskItems.map((task) => <TaskRow task={task} key={task.name} ToggleTask={ToggleTask} />);

	return (
		<div>
			<TaskBanner></TaskBanner>
			<table className="table table-stripped table-bordered">
				<thead>
					<tr>
						<th>Descripción</th>
						<th>Hecha</th>
					</tr>
				</thead>
				<tbody>{taskTableRows()}</tbody>
			</table>
		</div>
	);
}

export default App;
