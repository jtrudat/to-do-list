import { useState } from 'react'
import './EachItem.css'
import axios from 'axios'


export const EachItem = (props) =>{
 
const editHandler= () =>{
    axios.put('/todos/:id')
}
const deleteHandler = ()=>{
    axios.delete('/todos/:id')
}    
    return(
        <div>
            
            <div className="lineitem">
                <h3>{props.todoItem}</h3>
                <h3>{props.date}</h3>
                <button onClick={editHandler}>Edit</button>
                <button  onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}