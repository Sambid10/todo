
import type { Todo } from '../components/TodoList'
import TodoItems from '../components/TodoItems'

export default function ShowCompletePage({todos,onDelete,onEdit,onToggle}:{
  todos:Todo[],
  onToggle: (id:number) => void;
  onDelete: (id:number) => void;
  onEdit: (desc:string,id:number)=>void
}) {
  return (
    <div className='flex flex-col gap-4'>
      {todos.map((todo)=>
        <TodoItems
        onDelete={onDelete}
        onEdit={onEdit}
        onToggle={onToggle}
        todo={todo}
        /> 
      )}
    </div>
  )
}
