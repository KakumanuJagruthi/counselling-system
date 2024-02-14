import React,{useState} from 'react'
import axios from "axios"
const FetchRegistration = () => {
    const {res, setRes}=useState(null)
if(res=null)
    axios:get('http://localhost:8080/retrieve',{})
    then(response=>{
        setRes(response.data)
        console.log(response.data)
        })
  return (
    <div><h1>FetchRegistration</h1>
    { JSON.stringify(res)}
    </div>
  )
}

export default FetchRegistration