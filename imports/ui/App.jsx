import React, { Component } from 'react';

import Task from './Task.jsx';
import Content from './Content.jsx';

// App component - represents the whole app
export default class App extends Component {
	getTasks() {
		return [
			{ _id: 1, text: 'This is task 1' },
			{ _id: 2, text: 'This is task 2' },
			{ _id: 3, text: 'This is task 3' },
		];
	}

	renderTasks() {
		return this.getTasks().map((task) => (
			<Task key={task._id} task={task} />
		));
	}

	getContent() {
		return [
			{ _id: 4, text: 'This is my first Meteor Content' }
		];
	}

	renderContent() {
		return this.getContent().map((content) => (
			<Content key={content._id} content={content} />
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
				</header>

				<ul>
					{this.renderTasks()}
				</ul>

				<div>
					{this.renderContent()}
				</div>
			</div>
		);
	}
}