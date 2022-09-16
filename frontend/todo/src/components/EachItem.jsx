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
            
            <div>
                <h5>{props.todoItem}</h5>
                <h5>{props.date}</h5>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}