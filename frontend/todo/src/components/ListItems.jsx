import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { EachItem } from './EachItem'
import './ListItems.css'

export const ListItems = (props)=>{
    const [ allItems, setAllItems ] = useState([])
    
    //WILL CALL UP THE LATEST DATABASE SNAPSHOT AFTER ALL FUNCTIONS ARE PERFORMED
    //SPECIFICALLY - THE DATA PORTION OF THE RESPONSE CONTAINS THE OBJECTS TO BE MAPPED AND LISTED
    useEffect(()=>{
        axios.get('/todos')
        .then((response)=>{
            console.log(response.data)
            setAllItems(response.data)
        })
    },[])

    //THIS WILL UPDATE THE STATE OF ALL THE ITEMS BEING MAPPED WHICH TRIGGERS A RERENDER. 
    //RERENDERING CAUSES A REFRESH OF THE LATEST DATABASE SNAPSHOT 
     let refreshHandler = ()=>{
        axios.get('/todos')
        .then((response)=>{
            console.log(response.data)
            setAllItems(response.data)
        })
     }

   //ALL JSON RESPONSES ARE ASSIGNED A UNIQUE KEY ISSUED BY MONGODB. THESE KEYS ARE NEEDED FOR EFFICIENT IDENTIFCATION DURING THE MAPPING FUNCTION
    return (
        <div>
            <br></br>
            <label id="listingSection" onClick={refreshHandler}>Consolidated list of items to do</label>
            <div id="linerow">
                {allItems.map((dbData)=>{
                 return (<EachItem 
                    todoItem = {dbData.todoItem}
                    date = {dbData.date}
                    number = {dbData._id}
                    key = {dbData._id}  
                    onRefresh={refreshHandler}           
                />) 
            })}
            </div>
        </div>
    )
}