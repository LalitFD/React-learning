import { useRef, useState } from "react";
import Data from "./Data";


function App() {
  let [taskData, setTaskData] = useState(Data)
  let [taskpriorty] = useState(['Normal', "High", "Low"]);
  let [defaultSatus, setDefaultStatus] = useState("Active");

  const priorityOrder = { High: 1, Normal: 2, Low: 3 };

  let taskRef = useRef(null)
  let priorityRef = useRef(null)

  const addTask = () => {
    const date = new Date();
    let Title = taskRef.current.value
    let priority = priorityRef.current.value
    let taskdate = date.toLocaleDateString()
    if (Title && priority) {
      let newTask = { Title, priority, Date: taskdate, taskStatus: "Active" }

      setTaskData([...taskData, newTask])
    }
    else {
      let tasksms = document.getElementById("sTask")
      tasksms.innerHTML = "Required"
      tasksms.style.color = "red"

    }

  }

  const taskDeactive = (index) => {
    let updatedTask = [...taskData];
    updatedTask[index].taskStatus = "Deactive";
    setTaskData(updatedTask);
  };

  const taskActive = (index) => {
    let updatedTask = [...taskData]
    updatedTask[index].taskStatus = "Active"
    setTaskData(updatedTask)
  }

  return <>



    <div className="bg-success text-white p-3 d-flex justify-content-center">
      <small style={{ fontSize: "25px", fontWeight: "bolder" }}>To Do List</small>
    </div>

    <div className="row ml-5">
      <div className="col-md-4 mt-3">
        <input ref={taskRef} placeholder="Create Task" className="form-control"></input>
        <small id="sTask"></small>
      </div>
      <div className="col-md-4 mt-3">
        <select className="form-control" ref={priorityRef}>
          {taskpriorty.map((task, index) => { return <option key={index}>{task}</option> })}
        </select>
        <small id="sPriority"></small>
      </div>
    </div>


    <div className="row ml-5 mt-3">
      <div className="ml-3">
        <button className="btn btn-success" onClick={addTask}>ADD</button>
      </div>
    </div>


    <div className="row " style={{ marginLeft: "800px", marginBottom: "15px" }}>
      <div className="ml-3" >
        <button className="btn btn-primary " onClick={() => setDefaultStatus("Active")}>Active({taskData.filter((task) => { return task.taskStatus === "Active" }).length})</button>
        <button className="btn btn-info ml-3" onClick={() => setDefaultStatus("Deactive")}>Deactive({taskData.filter((task) => { return task.taskStatus === "Deactive" }).length})</button>
      </div>
    </div>

    <table className="table mt-3">
      <thead className="table-dark">
        <tr>
          <td>s.no</td>
          <td>Title</td>
          <td>Date</td>
          <td>Priority</td>
          <td>Operation</td>
        </tr>
      </thead>
      <tbody>
        {taskData.filter((task, index) => task.taskStatus == defaultSatus).sort((a, b) => { return priorityOrder[a.priority] - priorityOrder[b.priority] }).map((task, index) => {
          const originalIndex = taskData.indexOf(task);
          return <tr key={index} className={task.priority === "High" ? "bg-danger text-white" : task.priority === "Normal" ? "bg-warning text-white" : "bg-success text-white"}>
            <td>{index + 1}</td>
            <td>{task.Title}</td>
            <td>{task.Date}</td>
            <td>{task.priority}</td>
            <td>{task.taskStatus === "Active" ? <button className="btn btn-secondary" onClick={() => taskDeactive(originalIndex)}  >Deactive</button> : <button className="btn btn-secondary" onClick={() => taskActive(originalIndex)}>Active</button>}</td>
          </tr>
        })}
      </tbody>
    </table>


  </>
}

export default App;