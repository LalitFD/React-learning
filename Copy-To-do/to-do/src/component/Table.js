import { useState } from "react";
import data from "./Data";

function Table() {
    let [taskData, settaskData] = useState(data)
    let [Priority, SetPriority] = useState([{ id: 3, value: "high" }, { id: 2, value: "normal" }, { id: 1, value: "low" }])
    let [defaultStatus, setdefaultStatus] = useState("Active")

    const [Title, setTitle] = useState("")
    const [pid, setpid] = useState("0")

    const AddTask = () => {
        // event.preventDefault()

        let date = new Date()
        let date1 = date.toLocaleDateString()
        let taskStatus = "Active"
        let newTask = { Title, Date: date1, pid, taskStatus }
        settaskData([...taskData, newTask])



    }
    return <>
        <div className="container ">
            <div className="row">
                <div className="col-md-6 mt-3">
                    <input className="form-control" onChange={(event) => setTitle(event.target.value)} placeholder="Enter a Task" />
                </div>


                <div className="col-md-6 mt-3">
                    <select className="form-control" onChange={(event) => setpid(event.target.value)}>
                        <option>Select Option</option>
                        {Priority.map((item, index) => { return <option key={index} value={item.id}>{item.value}</option> })}
                    </select>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row mt-3">
                <div className=" col-md-6">
                    <button className="btn btn-primary" onClick={AddTask}>Add</button>
                </div>
            </div>


            <div className="row mt-3">
                <div className=" col-md-6">
                    <button onClick={() => setdefaultStatus("Active")} className="btn btn-primary mr-2" disabled={defaultStatus == "Active" ? true : false}>Active({taskData.filter((task) => { return task.taskStatus == "Active" }).length})</button>

                    <button onClick={() => setdefaultStatus("Deactive")} className="btn btn-success mr-2" disabled={defaultStatus == "Deactive" ? true : false}>Deactive({taskData.filter((task) => { return task.taskStatus == "Deactive" }).length})</button>
                </div>
            </div>
        </div>

        <div className="container">
            <table className="table mt-3 border">
                <thead className="table-dark">
                    <tr className="text-center">
                        <td>S.NO</td>
                        <td>Title</td>
                        <td>Date</td>
                        <td>priority</td>
                        <td>status</td>
                    </tr>
                </thead>

                <tbody>
                    {taskData.filter((task) => { return task.taskStatus == defaultStatus }).sort((a, b) => { return b.pid - a.pid }).map((task, index) => {
                        return <tr key={index} className={task.pid == 3 ? "bg-danger text-center" : task.pid == 2 ? "bg-success text-center" : "bg-primary text-center"} >
                            <td>{index + 1}</td>
                            <td>{task.Title}</td>
                            <td>{task.Date}</td>
                            <td>{Priority.find((t) => { return task.pid === t.id })?.value}</td>

                            <td>{task.taskStatus == "Active" ? <button className="btn btn-warning">Deactive</button> : <button className="btn btn-primary">Active</button>}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>

}
export default Table;