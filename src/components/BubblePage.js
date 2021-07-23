import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService() 
    setColors(JSON.parse(localStorage.getItem('colors')))
    }, []);

   

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
      axiosWithAuth()
    .put(`/colors/:${editColor.id}`, {id: editColor.id, color: editColor.color, code: {hex: editColor.hex} })
    .then(res => {
      editColor = {
        id: editColor.id,
        color: editColor.color,
        code: {
          hex: editColor.hex} 
      }
    })
   .catch(err => {
     console.log(err);
    })
  };
  
  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`/colors/${colorToDelete.id}`)
    .then(res=>{
      setColors(colors.filter(item=>(item.id !== Number(colorToDelete.id))))
      console.log(colors)
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
