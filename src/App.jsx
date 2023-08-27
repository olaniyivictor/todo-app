import './App.css'
import './index.css'
import ToggleTheme from './ToggleTheme';
import Form from './Form'
import PackingList from './PackingList';

import { useState } from 'react';
export default function App(){
const [darkmode,setdarkmode] = useState(true)


const [items,setItems]=useState([]);
//writing a function to add the current items to the previous item
function handleAddItem(item){
 console.log(item);
  setItems((items)=>[...items,item])
}
//writing a function to delete the item
function handleDeleteItem(id){
    setItems(items=>items.filter(item=>item.id !== id))
}
//writing a function to toggle between the theme
function toggleTheme(){
    setdarkmode(prevTheme=>!prevTheme)
}
function handleToggleItem(id){
    setItems((items)=>
    items.map((item)=>
    item.id === id ? {...item, checked: !item.checked} :item))
  }
//writing a function to clear the list and turn it to an empty array
function handleClearList(){
    setItems(items.filter((item) => !item.checked))
}
    return(
        <div className='app'>
            <ToggleTheme Darkmode={darkmode} onsetDarkmode={setdarkmode} ontoggleTheme={toggleTheme}  />
            <Form onAddItems={handleAddItem} Darkmode={darkmode}/>
            <PackingList items={items} onDeleteItem ={handleDeleteItem} Darkmode={darkmode}  onToggleItems={handleToggleItem} onClearList={handleClearList}/>
        </div>
    )
}