import { useState } from "react"
import { useBookContext } from "../../components/Context/booksContext"

export function EditAddress({editId}) {
    const {dispatch,habitsData} = useBookContext()
    const [editHabit,setEditHabit] = useState({
    id:editId,
    name:habitsData?.find(({id})=>id===editId)?.name,
    repeat:habitsData?.find(({id})=>id===editId)?.repeat,
    goal:habitsData?.find(({id})=>id===editId)?.goal,

    })
 
    const addressHandler = (e) => {
        e.preventDefault(e)
    }
    return <div>
        <h3>Edit Habit</h3>
        <form   onSubmit={(e)=>addressHandler(e)}>
                   <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name"  required name="name" value={editHabit.name} onChange={(e)=>setEditHabit((editHabit)=>({
                ...editHabit,
                [e.target.name] : e.target.value,
            }))}/>
        <label htmlFor="repeat">Repeat</label>
             <select required  id="repeat"  name="repeat"  value={editHabit.repeat} 
              onChange={(e)=>setEditHabit((data)=>({...data,[e.target.name]:e.target.value}))} >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              
             </select>
        <label htmlFor="goal">goal</label>
              <select required  id="goal"  name="goal" value={editHabit.goal} 
              onChange={(e)=>setEditHabit((data)=>({...data,[e.target.name]:e.target.value}))} >
                  <option disabled value="">-- Select an option --</option>

                <option value="1 times Daily">1 times Daily</option>
                <option value="3 times Daily">3 times Daily</option>
                <option value="5 times Daily">5 times Daily</option>
              
             </select>
            <button type="submit" className="button-home" onClick={()=>dispatch({type:"EDITED_HABIT",payload:[editHabit]})}>Edit</button>
            <button type="submit"  className="button-home" onClick={()=>dispatch({type:"CANCEL_HABIT" ,payload:editId})}>Cancel</button>
        </form>
    </div>
}