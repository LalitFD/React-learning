import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import data from './component/data';

function App() {
  let [studentList, setstudentList] = useState(data)
  let [BranchList, setBranchList] = useState(["CS", "IT", "CE", "MECH", "EC"]);
  let [defaultBranch, setdefaultBranch] = useState("All")


  let rollref = useRef(null);
  let nameref = useRef(null)
  let conRef = useRef(null)
  let branref = useRef(null)

  const addData = (event) => {
    event.preventDefault()

    let Rollnumber = rollref.current.value
    let name = nameref.current.value
    let Contact = conRef.current.value
    let Branch = branref.current.value

    if (!Rollnumber || !name || !Contact || !Branch) {
      window.alert("Please fill all the fields")
      return;
    }
    else {
      let newStudent = { Rollnumber, name, Contact, Branch }
      setstudentList([...studentList, newStudent])
    }
  }

  const remove = () => {

  }

  return <>
    <div>
      <div className='bg-primary p-2 d-flex justify-content-center text-white"'>
        <span className='text-white' style={{ fontWeight: "bolder" }}>Student Portal</span>
      </div>


      <div className='container mt-3 mb-3'>
        <form>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <input ref={rollref} type='text' placeholder='Enter Rollnumber' className='form-control' ></input>
            </div>
            <div className='col-md-6  mb-3'>
              <input ref={nameref} type='text' placeholder='Enter Student name' className='form-control' ></input>
            </div>
          </div>


          <div className='row'>
            <div className='col-md-6  mb-3'>
              <input ref={conRef} type='text' placeholder='Enter a Contact number' className='form-control' ></input>
            </div>

            <div className='col-md-6  mb-3'>
              <select className='form-control' ref={branref}>
                <option value="">Select Branch</option>
                {BranchList.map((branch, index) => {
                  return <option key={index} value={branch}>{branch}</option>
                })}
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className='container mt-3 mb-3'>
        <div className='row'>
          <div className='col md-6 '>
            <button className='btn btn-primary' type='submit' onClick={addData}>Add</button>
          </div>

          <div className='col md-6' >
            <button onClick={() => setdefaultBranch("CS")} className='btn btn-primary mr-2'>CS({studentList.filter((student) => { return student.Branch == "CS" }).length})</button>

            <button onClick={() => setdefaultBranch("IT")} className='btn btn-dark mr-2'>IT({studentList.filter((student) => { return student.Branch == "IT" }).length})</button>

            <button onClick={() => setdefaultBranch("CE")} className='btn btn-info mr-2'>CE({studentList.filter((student) => { return student.Branch == "CE" }).length})</button>

            <button onClick={() => setdefaultBranch("MECH")} className='btn btn-danger mr-2'>MECH({studentList.filter((student) => { return student.Branch == "MECH" }).length})</button>

            <button onClick={() => setdefaultBranch("EC")} className='btn btn-success mr-2'>EC({studentList.filter((student) => { return student.Branch == "EC" }).length})</button>

            <button onClick={() => setdefaultBranch("All")} className='btn btn-secondary mr-2'>Total({studentList.length})</button>

          </div>
        </div>
      </div>

      <div>
        <table className='table  mt-3 table-bordered'>
          <thead className='table-dark'>
            <tr className='text-center'>
              <th>Rollnumber</th>
              <th>name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {studentList.filter((student) => { return student.Branch == defaultBranch || defaultBranch == "All" }).map((student, index) => {
              return <tr className='text-center'>

                <td>{student.Rollnumber}</td>
                <td>{student.name}</td>
                <td>{student.Branch}</td>
                <td>{student.Contact}</td>
                <td><button className='btn btn-danger' onClick={remove}>Remove</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>


    </div >
  </>

}

export default App;
