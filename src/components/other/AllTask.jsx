import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);
//   console.log(authData.employees);
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Active</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map(function(e,idx){
            return <div key={idx} className='bg-emerald-600 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{e.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{e.taskNumbers.new_task}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{e.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{e.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask