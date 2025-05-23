import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useApi from './hooks/useapi'

function App() {
  const [data, setdata] = useState(0);
  const [from, setfrom]= useState('usd');
  const [to , setto ] = useState('pkr');
  const [result, setresult]= useState(0);
  
  


  return (
    <>
     <div> 
      <h1 className='text-3xl bg-orange-500'>Currency Convertor Project</h1>
     </div>
    </>
  )
}

export default App
