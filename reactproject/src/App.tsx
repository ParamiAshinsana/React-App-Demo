import React, { useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {


interface Data{
  studentId: string,
  name: string,
  address: string
}

const [data,setData] = useState<Data>({studentId:"",name:"",address:""});

const changeEvent = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value} = e.target
   setData({
    //spread operator
      ...data,[name]:value
   });   
}

const handleSubmit = async()=>{
  try{
    const response = await axios.post("http://localhost:3000/api/saveStudent",data);
    console.log(response);
    
  }catch(error){
    console.log(error);
  }
}

const updateStudent = async()=>{
  // try{
  //   const response = await axios.put("http://localhost:3000/api/updateStudent", data);
  //   console.log(response);
  // }catch(error){
  //   console.log(error);
  // }
  try {
    // Make sure to include studentId in the URL
    const response = await axios.put(`http://localhost:3000/api/updateStudent/${data.studentId}`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async()=>{
  try {
    // Make sure to include studentId in the URL
    const response = await axios.delete(`http://localhost:3000/api/deleteStudent/${data.studentId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}




  return (

    <div className="container mt-5">
      {/* Search Bar */}
      {/* <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          name="address"
          value={data.address}
          onChange={changeEvent}
          required
        />
        <button className="btn btn-primary" type="button" onClick={handleSubmit}>
          Search
        </button>
      </div> */}

      {/* Input Fields */}
      <div className="row mb-3">
      <div className="col-md-6">
          <label className="form-label">Student ID:</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Id"
            name="studentId"
            value={data.studentId}
            onChange={changeEvent}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={changeEvent}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Address"
            name="address"
            value={data.address}
            onChange={changeEvent}
            required
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between">
        <button className="btn btn-success" onClick={handleSubmit}>Save</button>
        <button className="btn btn-warning" onClick={updateStudent}>Update</button>
        <button className="btn btn-danger" onClick={deleteStudent}>Delete</button>
      </div>
    </div>

    // <div>
    //   <h1>Submit Form</h1>
      
    //     <div>
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={data.name}
    //         onChange={changeEvent}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Address:</label>
    //       <input
    //         type="text"
            // name="address"
            // value={data.address}
            // onChange={changeEvent}
            // required
    //       />
    //     </div>
    //     <button type="button" onClick={handleSubmit}>Submit</button>
      
    // </div>
  );
}



























// import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from "axios";
// import { useEffect, useState } from 'react';

// interface Student {
//   name: string;
//   address: string;
// }

// const CrudUI = () => {
//   const [students, setStudents] = useState<Student[]>([]);  // Define students as an array of Student objects
//   const [formData, setFormData] = useState<Student>({name: "", address: "" });  // Define formData as a Student object
//   const [search, setSearch] = useState<string>("");

//   const getStudents = async () => {
//     try {
//       const response = await Axios.get("http://localhost:3000/api/getStudents");
//       setStudents(response.data);
//     } catch (error: unknown) {
//       const err = error as Error;
//       console.error("Error fetching data:", err.message);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const saveStudent = async () => {
//     try {
//       await Axios.post("http://localhost:3000/api/saveStudent", formData);
//       getStudents();
//       setFormData({name: "", address: "" });
//     } catch (error: unknown) {
//       const err = error as Error;
//       console.error("Error saving data:", err.message);
//     }
//   };

//   const updateStudent = async (id: string) => {
//     try {
//       await Axios.put(`http://localhost:3000/api/updateStudent/${id}`, formData);
//       getStudents();
//       setFormData({name: "", address: "" });
//     } catch (error: unknown) {
//       const err = error as Error;
//       console.error("Error updating data:", err.message);
//     }
//   };

//   const deleteStudent = async (id: string) => {
//     try {
//       await Axios.delete(`http://localhost:3000/api/deleteStudent/${id}`);
//       getStudents();
//     } catch (error: unknown) {
//       const err = error as Error;
//       console.error("Error deleting data:", err.message);
//     }
//   };

//   const searchStudent = () => {
//     const filteredStudents = students.filter(student =>
//       student.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setStudents(filteredStudents);
//   };

//   useEffect(() => {
//     getStudents();
//   }, []);

//   return (
//     <div className="container mt-5">
//       {/* Search Bar */}
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search..."
//           value={search}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
//         />
//         <button className="btn btn-primary" type="button" onClick={searchStudent}>
//           Search
//         </button>
//       </div>

//       {/* Input Fields */}
//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control mb-2"
//             placeholder="Address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-between">
//         <button className="btn btn-success" onClick={saveStudent}>Save</button>
//         <button className="btn btn-warning" onClick={() => updateStudent(formData._id)}>Update</button>
//         <button className="btn btn-danger" onClick={() => deleteStudent(formData._id)}>Delete</button>
//       </div>

//       {/* Display Students */}
//       <div className="mt-4">
//         <h4>Students List:</h4>
//         <ul className="list-group">
//           {students.map((student) => (
//             <li className="list-group-item d-flex justify-content-between align-items-center" key={student._id}>
//               <div>
//                 <strong>{student.name}</strong> - {student.address}
//               </div>
//               <div>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => setFormData(student)}>Edit</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student._id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CrudUI;



























// import 'bootstrap/dist/css/bootstrap.min.css';
// import Axios from "axios";
// import { useEffect, useState } from 'react';

// const CrudUI = () => {


// const [data,setData] = useState("");

// const getData= async()=>{
//   const response = await Axios.get("http://localhost:3000/getData");
//   setData(response.data);
// }

// useEffect(()=>{
//   getData()
// },[]);

// return(
//   <div>{data}</div>
// )
// };

// export default CrudUI;