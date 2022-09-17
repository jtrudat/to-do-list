import { useState } from 'react'
import './EachItem.css'
import axios from 'axios'


export const EachItem = (props) =>{
 
const editHandler= (evt) =>{
    let mongoId = evt.target.id
    console.log(mongoId)
    //axios.put('/todos/${mongoId}')
}
const deleteHandler = (evt)=>{
    let mongoId = evt.target.id
    axios.delete(`/todos/${mongoId}`)
    console.log(mongoId)
    function refresh (){
        props.onRefreshHandler()
    }
    window.location.reload(true)
} 


    return(
        <div>
            
            <div>
                <h5>☝️{props.todoItem}</h5>
                <h5> -- with a due by date of {props.date}</h5>
                <button id={props.number} onClick={editHandler}>Edit</button>
                <button id={props.number} onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}