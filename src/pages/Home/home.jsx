// import "./home.css";
import { useState } from "react"
// import { useProductContext } from "../../contexts/ProductsContext"
// import { v4 as uuid } from "uuid";
import { useBookContext } from "../../components/Context/booksContext";
// import { HabitsCard } from "./HabitsCard";
import { EditAddress } from "./editHabit";
import { HabitsForm } from "./habitsForm";

export function Habits () {
    const {habitsData,dispatch,addToArchive} = useBookContext()
    
    const [addHabit, setAddHabit] = useState(false);
    
   
  

    return <div >

    <button onClick={() => setAddHabit(true)}>Add New Habit</button>
    <div className="home-container">
      { addHabit && <HabitsForm setAddHabit={setAddHabit}/>}
              {habitsData?.length===0&&<h4>No Goals!</h4>}
           <div >
          {habitsData?.map((data)=>{
            const {id,name,repeat,isEdit,goal} = data
            return (<div  key={id}>
              <div>
              <div className="modal-content">
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Repeat:</strong>{repeat}</p>
                <p><strong>Goal:</strong>{goal}</p>
                {isEdit&&<EditAddress editId={id}/>}
              {!isEdit && <button className="button-home" onClick={()=>dispatch({type:"EDIT_HABIT",payload:id})}>Edit</button>}
               { !isEdit &&<button className="button-home" onClick={()=>dispatch({type:"DELETE_HABIT",payload:id})}>Delete</button>}
               { !isEdit &&<button className="button-home" onClick={()=>addToArchive(data)}>Add to Archive</button>}
               </div>
               </div>
            </div>)
        })}</div>
        </div>
    </div>
}