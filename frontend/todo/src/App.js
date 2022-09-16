import './App.css'
import { Input } from './components/Input';
import { ListItems } from './components/ListItems'
import { useState } from 'react'

let dummyData = [
  {
    _id: '1',
    todoItem: 'paint the fence',
    date: '2022-09-15'
  },
  {
    _id: '2',
    todoItem: 'walk the dog',
    date: '2022-09-14'
  },
  {
    _id: '3',
    todoItem: 'water the flowers',
    date: '2022-09-13'
  }
]

function App() {
  const [ itemsList, setItemsList ] = useState(dummyData)

  // const addNewItemHandler = (newestItem)=>{
  //   setItemsList((itemsList)=>{
  //     return[newestItem, ...itemsList]
  //   })
  // }
  return (
    <div className="setDisplay">
      <div>Things to do</div>
      <br></br>
      <Input />
      <ListItems taskers={itemsList}/>
    </div>
  );
}

export default App;
