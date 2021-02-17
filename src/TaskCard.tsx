import React from 'react';
import ITask from './interfaces/index';

export interface TaskProps {
    task:ITask,
    changeStateTask:Function,
    deleteTask:Function,
    key:number,
    indice:number
}
 
const TaskCard: React.SFC<TaskProps> = (props):JSX.Element => {
    return (
        <div className="col-12 col-md-3"  key={props.indice}>
          <div className={`card text-dark bg-${(props.task.done)?'success':'danger'} mb-3`}>
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>New Task</span>
              <div>
                <button type="button" onClick={()=>props.changeStateTask(props.indice)} className="btn btn-warning mx-1">{(props.task.done)?'X':'✓'}</button>
                <button className="btn btn-outline-danger mx-1" onClick={()=>props.deleteTask(props.indice)}>🗑</button>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.task.name}</h5>
            </div>
          </div>
        </div>
    );
}
 
export default TaskCard;