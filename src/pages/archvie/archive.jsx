import { useBookContext } from "../../components/Context/booksContext"

export function Archive (){
    const {archiveData} = useBookContext()

   return <div>
      
              {archiveData?.length===0&&<h4>No arhives!</h4>}
          {archiveData?.map((data)=>{
            const {id,name,repeat,goal} = data
            return (<div key={id} className="modal-content">
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Repeat:</strong>{repeat}</p>
                <p><strong>Goal:</strong>{goal}</p> 
               
                 </div>)
                
        })}
    </div>
}