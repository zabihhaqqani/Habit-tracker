import { useState } from "react"
import { useBookContext } from "../../components/Context/booksContext"
import { v4 as uuidv4 } from 'uuid';

export function HabitsForm({setAddHabit}){
const {dispatch} = useBookContext()


    const uuid = uuidv4()
    const [habit,setHabit] = useState({
      id:uuid,
      name:"",
      repeat:"",
      goal:"",
      // timeOfDay:"",
      // startDate: "",
    })
    

    const habitHandler = (e) => {
        e.preventDefault()
        
        dispatch({
            type:"ADD_NEW_HABIT",
            payload: habit
        })
        setAddHabit(false)
    }
  

    return <div>
        <form  className="modal-overlay" onSubmit={habitHandler
        }>
              <label htmlFor="name">Name</label>

            <input  placeholder="Enter Name"
            type="text"
            required
            name="name" 
             value={habit.name}
             onChange={(e) =>
              setHabit((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
            
             />
              <label htmlFor="repeat">Repeat</label>
 
             <select required  id="repeat"  name="repeat" value={habit.repeat} 
              onChange={(e)=>setHabit((data)=>({...data,[e.target.name]:e.target.value}))} >
                  <option className="option" disabled value="">-- Select an option --</option>

                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              
             </select>
          
            <label htmlFor="goal">Goal</label>

             <select required  id="goal"  name="goal" value={habit.goal} 
              onChange={(e)=>setHabit((data)=>({...data,[e.target.name]:e.target.value}))} >
                  <option disabled value="">-- Select an option --</option>

                <option value="1 times Daily">1 times Daily</option>
                <option value="3 times Daily">3 times Daily</option>
                <option value="5 times Daily">5 times Daily</option>
              
             </select>
{/*              
          <select>
                <option>1 times Daily</option>
                <option>3 times Daily</option>
                <option>5 times Daily</option>
              
             </select>
              <select>
                <option>Any Time</option>
                <option>Weekly</option>
                <option>Monthly</option>
              
             </select>
              <select>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Day After Tomorrow</option>
              
             </select> */}
          <div>
            <button type="submit" >
                Add
            </button>
            
            <button onClick={()=>setAddHabit(false)}>
                Cancel
            </button>
          </div>
        </form>
            {/* <EditAddress/>
        <HabitsCard/> */}
    </div>
}