import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCard from './TaskCard';
import ITask from './interfaces/index';

//definicion de types
type FormElement = React.FormEvent<HTMLFormElement>;

function App():JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e:FormElement):void=>{
    e.preventDefault();
    addTask(newTask);
    setNewTask(''); 
  }

  const addTask = (name:string):void=>{
    const newTasks:ITask[] = [...tasks,{name,done:false}];
    setTasks(newTasks);
  }

  const changeStateTask = (index:number):void=>{
    const newTasks: ITask[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  const deleteTask = (index:number):void=>{
    const listTask: ITask[] = [...tasks];
    listTask.splice(index,1);
    setTasks(listTask);
  }

  return (
    <div className="container pt-5">
      <form onSubmit={handleSubmit} className="form-group">
        <input type="text" placeholder="Enter the new task" value={newTask} onChange={e=>setNewTask(e.target.value)} className="form-control my-2"/>
        <input type="submit" value="Save" className="btn btn-info my-2 btn-block"/>
      </form>
      {tasks.map((task:ITask,i:number)=>{
        return <TaskCard task={task} deleteTask={deleteTask} changeStateTask={changeStateTask} key={i} indice={i}/>
      })}
    </div>
  );
}

export default App;
