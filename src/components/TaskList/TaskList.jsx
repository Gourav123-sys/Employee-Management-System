import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import { FailedTask } from './FailedTask'
import CompleteTask from './CompleteTask'

function TaskList({data}) {
    
  return (
    <div id='tasklist' className='flex item-center justify-start gap-5 overflow-x-auto flex-nowrap h-[55%] w-full py-5 mt-10'>
        {data.tasks.map((e, idx) => {
           if(e.active){
              return <AcceptTask key={idx} data={e} />
           }
           if(e.new_task){
            return <NewTask key={idx} data={e} />
           }
           if(e.completed){
            return <CompleteTask key={idx} data={e} />
           }
           if (e.failed) {
            return <FailedTask key={idx} data={e} />;
           }
        })}
    </div>
  )
}

export default TaskList