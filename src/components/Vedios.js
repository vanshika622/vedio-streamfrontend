import {useEffect, useState} from 'react'

function Vedios(){
    let [vedios, setvideos]=useState([]);

    let token = JSON.parse(localStorage.getItem("vs_details")).token;
    console.log(token)
  useEffect(()=>{
      fetch("http://localhost:8000/vedio/getvedios",{
          headers:{
             "Authorization":`Bearer ${token}`
          }
      })
      .then((response)=>response.json())
      .then((data)=>{
        //   console.log(data)
          console.log(data);
      })
      .catch((err)=>{
          console.log(err)
      })
  })
  return(
      <div className="bg">
          <h1 className="title">All Videos</h1>
      </div>
  )
}

export default Vedios;