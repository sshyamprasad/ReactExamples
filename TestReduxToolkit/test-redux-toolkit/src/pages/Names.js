import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nameSiceActions } from "../store/nameSlice";

const Names = () => {
    const [name, setName] = useState("");
  const names = useSelector(state=>state.list.names)
  console.log(names);
  const dispatch = useDispatch();
  const updateName = (e)=>{
    setName(e.target.value);
  }
  const addName = ()=>{
    dispatch(nameSiceActions.addName(name));
  }
  const removeName = ()=>{
    dispatch(nameSiceActions.removeName(name));
  }
  useEffect(()=>{},[name])
  return (
    <div>
      <h1>Names list</h1>
      <label>Enter name</label>
      <input type="text" value={name} onChange={updateName}/>
      <button onClick={addName}>add</button>
      <button onClick={removeName}>remove</button>
      <ul>
        {names?.map((name)=>{console.log(name); return (<li>{name}</li>)})}
      </ul>
    </div>
  );
};

export default Names;
