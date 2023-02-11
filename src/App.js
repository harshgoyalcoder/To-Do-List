import { useState } from 'react';
import './App.css';
import List from './List';

function App() {

  const [inputList,setInputList] =useState("");
  const [items,setItems] =useState([]);
  // const itemEvent=(event)=>{
  //   setInputList(event.target.value);
  // }
  const listOfItems=()=>{
    setItems( (oldItems)=>{
      return[...oldItems,inputList];

    });
    setInputList("");
  }
  const deleteItems=(id)=>{
    setItems( (oldItems)=>{
      return oldItems.filter( (arrElem,index)=>{
        return index!==id
      })
    })
  }



  return (
    <div className="App">
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1> To Do List</h1>
          <br/>
          <input type="text" placeholder="Add New Task" value={inputList} onChange={(e)=>{
            setInputList(e.target.value)
          }} />

          <button onClick={listOfItems}>+</button>

          <ol>
            {items.map( (itemVal,index)=>{
              return(
                <List
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
                />

              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
