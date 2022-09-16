import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { EachItem } from './EachItem'
import './ListItems.css'

export const ListItems = (props)=>{
    const [ allItems, setAllItems ] = useState(props.taskers)
    useEffect(()=>{
        axios.get('/todos')
        .then((response)=>{
            console.log(response.data)
            setAllItems(response.data)
        })
        
        
    },[])

    let refreshHandler = ()=>{
        axios.get('/todos')
        .then((response)=>{
            setAllItems(response.data)
        })
        console.log(allItems)
    }
    return (
        <div>
            <br></br>
            <br></br>
            <button onClick={refreshHandler}>refresh current listings</button>
            <br></br>
            <label>Consolidated list of items to do</label>
            {allItems.map((dbData)=>{
                 return (<EachItem 
                    todoItem = {dbData.todoItem}
                    date = {dbData.date}
                    number = {dbData._id}
                    key = {dbData._id}
                />) 
            })}
            
        </div>
    )
}