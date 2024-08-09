import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import { useEffect, useState } from 'react';

const CrudUI = () => {


const [data,setData] = useState("");

const getData= async()=>{
  const response = await Axios.get("http://localhost:3000/getData");
  setData(response.data);
}

useEffect(()=>{
  getData()
},[]);

return(
  <div>{data}</div>
)
};

export default CrudUI;