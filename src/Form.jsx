import PropTypes from 'prop-types';
import {useState } from "react";
import './index.css'
export default function Form({onAddItems,Darkmode}) {
    //create a usestate for the controlled element
    const [form,setform]= useState('');
    
    

    //function to add the current items to the previous item
    
    //function to prevent the form from submitting
    function handleSubmit(e){
        e.preventDefault()
        

    const newItem ={form,id:Date.now(),checked:false}
    console.log(newItem)
    onAddItems(newItem)
    
    //let write if we don't write anything in the form it should return nothing
    if (!form) return
   
    //when we write sth in the form and click on enter then it should go,we use update in the setform 
    setform('')
    

    }
  
  return (
    <div>
    <div className='flexbox'  >
      <form  onSubmit={handleSubmit}    >
        <div>
        <input placeholder="Create a new todo..." className={`${Darkmode?'form-input':'form-inputs'}`} value ={form} onChange={(e)=>{
            console.log(e.target.value)
            setform(e.target.value)
            
        }}/>
        </div>
      </form>
    </div>
    </div>
  );
}
Form.propTypes={
  Darkmode:PropTypes.bool.isRequired,
  onAddItems:PropTypes.func.isRequired,
}