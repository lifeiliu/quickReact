import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setStates] = useState([
    {
        id : 1,
        text : 'Doc Appointment',
        day : 'Feb 5th at 2:30',
        reminder : true 
    },
    {
        id : 2,
        text : 'Meeting at school',
        day : 'Feb 6th at 4:30',
        reminder : true 
    },
    {
        id : 3,
        text : 'Food shopping',
        day : 'Feb 5th at 4:30',
        reminder : false 
    }
]) 

//function to delete task
const deleteTask = (id) => {
  console.log('delete', id)
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} 
      onDelete = {deleteTask}
      />
    </div>
  );
}

export default App;
