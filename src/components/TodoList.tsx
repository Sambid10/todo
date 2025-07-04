import { useEffect, useRef, useState } from "react";
import "./Todo.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ShowAllPage from "../pages/ShowAllPage";
import ShowCompletePage from "../pages/ShowCompletePage";
import ShowInCompletePage from "../pages/ShowIncompletePage";


export type Todo = {
  id: number;
  desc: string;
  completed: boolean;
};

export default function TodoList() {
  const location = useLocation();
  const ismainpage = location.pathname === "/";
  
  const ref = useRef<HTMLTextAreaElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleAdd = () => {
    const text = ref.current?.value;
    if (text) {
      setTodos([...todos, { id: Math.random(), desc: text, completed: false }]);
      ref.current!.value = "";
    }
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (newdesc: string, id: number) => {
    if (!newdesc) return;
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, desc: newdesc } : todo))
    );
  };

  return (
    <div className="mx-auto max-w-xl mt-8 maincontainer">
      {ismainpage && (
        <>
          <textarea
            ref={ref}
            placeholder="Enter your todo..."
            className="textarea"
          />
          <button onClick={handleAdd}>Add Todo</button>
        </>
      )}

      <div className="btnsconatiner justify-center">
        <Link to="/showall" className="bg-gray-100 px-2 py-2 rounded-xl">
          Show All
        </Link>
        <Link to="/showcomplete" className="bg-gray-100 px-2 py-2 rounded-xl">
          Show Completed
        </Link>
        <Link to="/showincomplete" className="bg-gray-100 px-2 py-2 rounded-xl">
          Show Incomplete
        </Link>
      </div>

      <Routes>
        <Route
          path="/showall"
          element={
            <ShowAllPage
              todos={todos}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          }
        />
        <Route
          path="/showcomplete"
          element={
            <ShowCompletePage
              todos={todos.filter((todo) => todo.completed)}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          }
        />

        <Route
          path="/showincomplete"
          element={
            <ShowInCompletePage
              todos={todos.filter((todo) => !todo.completed)}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          }
        />
      </Routes>
    </div>
  );
}
