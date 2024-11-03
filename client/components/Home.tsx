// import { useState } from 'react'
// import { getGreeting } from '../apiClient.ts'
// import { useQuery } from '@tanstack/react-query'
import FileUpload from './FileUpload.tsx'
import TestStuff from './TestStuff.tsx'

const Home = () => {
  // const [count, setCount] = useState(0)

  // const {
  //   data: greeting,
  //   isError,
  //   isPending,
  // } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  // if (isPending) return <p>Loading...</p>

  return (
    <>
      <TestStuff />
      
      <p>Upload your CSV file</p>
      <FileUpload />
      {/* {count}
      <h1 className="text-3xl font-bold underline">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )} */}
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    </>
  )
}

export default Home
