import { Link } from 'react-router-dom'
import TestStuff from './TestStuff.tsx'
import MVPting from './MVPthing.tsx'

const Home = () => {

  return (
    <div className='homepage'>
      <TestStuff />
      <MVPting />
      <br/>
      <Link to="/golf">. 🏌 .</Link>
    </div>
  )
}

export default Home