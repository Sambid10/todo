import { useEffect, useState } from "react";
import type { Todo } from "./TodoList";
import "./Todo.css";
type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (desc: string, id: number) => void;
};
export default function TodoItems({ todo, onToggle, onDelete, onEdit }: Props) {
  const [desc, setDesc] = useState(todo.desc);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log(desc);
  }, [desc]);

  const handledit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onEdit(desc, todo.id);
    }
  };
  return (
    <div className="todolistcontainer">
      <div className="flex text-base justify-between w-full items-center h-12">
        <div className="flex gap-4">
          <input
            id={todo.desc}
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <input
            onChange={(e) => setDesc(e.target.value)}
            id={todo.desc}
            type="text"
            value={desc}
            disabled={!isEditing}
            className={`${
              isEditing && "border  focus:border-gray w-full rounded-md px-4"
            }`}
          />
        </div>
        <div className="flex gap-6">
          <button onClick={handledit} title="edit" className="savebtn">
            {isEditing ? "Save" : "Edit"}
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            title="delete"
            className="deletebtn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
