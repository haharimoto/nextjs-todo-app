import { prisma } from "@/db"
import Link from "next/link"
import ToDoItem from "@/components/ToDoItem"

// have this function here outside of Home component so that it can be used anywhere
function getToDos() {
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await getToDos()
  // await prisma.todo.create({ data: {title: 'test3', complete: false} })

  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl">TODOs</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Jump to New Page
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <ToDoItem key={todo.id} {...todo}/>
        ))}
      </ul>
    </>
  )
}
