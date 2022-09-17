import { useState } from 'react'
import './EachItem.css'
import axios from 'axios'


export const EachItem = (props) =>{
 
const dateEditHandler= (evt) =>{
    let mongoId = evt.target.id
    let newDate = evt.target.date
    let editedDate = {
        date : newDate
    }
    axios.put(`/todos/${mongoId}`, editedDate)
    window.location.reload(true)
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
                <input type="checkbox"></input><h6>☝️{props.todoItem}</h6>
                <h6> -- to be done by {props.date}<input id={props.number} className="date" type="datetime-local" onChange={dateEditHandler}></input></h6>
                <button id={props.number} onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}