import React from 'react';
import "./fefalist.scss"

export default function Fefalist({title,id,active,setSelected}){
  return (
    <li className={active ? "fefalist active" :"fefalist"} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}

 
