import React, { useState, useEffect } from 'react';
import './styles.css';
import { ListView } from './ListView/ListView';
import { AddTaskView } from './AddTaskView/AddTaskView';
import { TasksDoneView } from './TasksDoneView/TasksDoneView';

export const ToDoWithServer = () => {
  const [isAddTaskViewVisible, setIsAddTaskViewVisible] = useState(false);
  const [todo, setTodo] = useState([]); // Initialize the to-do list state
  const [allTasksDone, setAllTasksDone] = useState(false);

  const toggleAddTaskView = () => {
    setIsAddTaskViewVisible(!isAddTaskViewVisible);
  };

  const handleGoBackToListView = () => {
    setIsAddTaskViewVisible(false); // Go back to ListView
  };

  const handleAddTask = (newTask) => {
    // Create a new task object
    const taskToAdd = {
      id: Date.now(), // You can generate a unique ID
      title: newTask.title,
      author: newTask.author,
      note: newTask.note,
      createdAt: new Date().toLocaleString(),
      isDone: false, // Initialize isDone to false for new tasks
    };

    // Update the to-do list state with the new task
    setTodo([...todo, taskToAdd]);

    // Go back to ListView
    setIsAddTaskViewVisible(false);
  };

  useEffect(() => {
    // Check if all tasks are completed when the todo list changes
    const areAllTasksCompleted = () => {
      return todo.length > 0 && todo.every((task) => task.isDone);
    };

    // Update the allTasksDone state
    setAllTasksDone(areAllTasksCompleted());
  }, [todo]);

  return (
    <div>
      <h1>TO DO</h1>

      {allTasksDone ? (
        <TasksDoneView />
      ) : isAddTaskViewVisible ? (
        <AddTaskView
          toggleAddTaskView={toggleAddTaskView}
          goBackToListView={handleGoBackToListView}
          addTaskToList={handleAddTask}
        />
      ) : (
        <ListView
          toggleAddTaskView={toggleAddTaskView}
          todo={todo} // Pass the to-do list as a prop
        />
      )}
    </div>
  );
};
