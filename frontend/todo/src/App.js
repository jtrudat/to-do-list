
import { Input } from './components/Input';
import { ListItems } from './components/ListItems'
import { useState } from 'react'

function App() {
  const [ itemslist, setItemsList ] = useState([])
  
  const addNewItemHandler = (newestItem)=>{
    setItemsList((itemsList)=>{
      return[newestItem, ...itemsList]
    })
  }
  return (
    <div>
      <div>Things to do</div>
      <Input onAddItem={addNewItemHandler}/>
      <ListItems />
    </div>
  );
}

export default App;
