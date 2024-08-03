import { useState } from "react"


function Todol() {
    const [activaty, setActivity] = useState();
    const [listdata, setListdata] = useState([]);
    function addActivity() {

        // setListdata([...listdata, activaty])
        // console.log(listdata);
        setListdata((listdata)=>{
            const updatedList = [...listdata, activaty]
console.log(updatedList);
            return updatedList
        })
    }
  return (
   <>ss
   <div className="container">
    <div className="header">add</div>
    <input type="text" placeholder='Add Acitivity ' value={activaty} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>

   </div>
   </>
  )
}

export default Todol