


import React, { useState } from 'react'

function TodoList() {
    const [activaty, setActivaty] = useState("");

    const [listData, setlistData] = useState([]);

    function addActivity() {
        // setlistData([...listData, activaty])
        // console.log(listData);
        setlistData((listData)=>{
            const updatedList = [...listData, activaty]
            console.log(updatedList);
            setActivaty('');
            return updatedList
        }) 
    }

    function removeActivity(i) {
      const updatedList = listData.filter((elem, id)=>{
        return i!=id;
      })  
      setlistData(updatedList)
    }
    function removeAll() {
      setlistData([])
    }
  return (
    <>
    <div className="container">
        <div className='header'>TODO LIST</div>
        <input type="text" placeholder='Add Acitivity ' value={activaty} onChange={(e)=>setActivaty(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='List-header'>Here is your List :{")"}</p>
    {listData != [] && listData.map((data, i)=>{
      return(<>
      
      <p key={i}> 
<div className="listData">{data}</div>
<div className='btn-position'>
<button onClick={()=>removeActivity(i)}>remove(-)</button></div>
      </p>
      </>)
    })}
    {listData.length>=1 &&  <button onClick={removeAll}>Remove All</button>}

    </div>
    </>
  )
}

export default TodoList