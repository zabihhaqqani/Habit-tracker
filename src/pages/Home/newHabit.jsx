import { useState } from "react";
// import { Habits } from "./home"
import { useBookContext } from "../../components/Context/booksContext";
import { HabitsCard } from "./HabitsCard";

export function NewHabit() {
const { addressData,dispatch } = useBookContext();
const [addHabit, setAddHabit] = useState(false);
    return <div>
        { addHabit && <HabitsCard setAddAddress={setAddHabit}/>}
      {addressData?.length===0&&<h4>No Addresses!</h4>}
       
    </div>
}