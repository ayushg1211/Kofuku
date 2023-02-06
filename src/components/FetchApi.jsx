import React, {useState, useEffect} from 'react'
import axios from "axios";
export default function FetchApi() {
  let [info, setInfo] = useState([]) ;
  let [name, setName] = useState("") ;
  let [index, setIndex] = useState(0) ;
  useEffect(()=>{
    axios.get(`https://randomuser.me/api/?results=5000`).then((res)=>{
            console.log(res.data.results) ;  
            setInfo(res.data.results) ;
        })
  },[])

  const getName = ()=>{

    setIndex(index+1) ;
    let gname = `${info[index].name.first} ${info[index].name.last}` ;
    setName(gname) ;
  }
  return (
    <div >
      <button onClick={()=>{getName()}}>Submit</button>

      <h5>{name}</h5>
    </div>
  );
}