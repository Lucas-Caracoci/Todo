
import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import TaskArea from './components/TaskArea'
import TaskBar from './components/TaskBar'

function App() {
    
        const [tasks, setTasks] = useState(
            [
                {
                    id: 1,
                    content: 'estudaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    isChecked: false
                },
                {
                    id: 2,
                    content: 'estudaraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    isChecked: false
                }
            ]);

  return (
    <>
      <Header/>
      <TaskBar/>
      <TaskArea tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
