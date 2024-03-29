import { prisma } from "@/db"
import Link from "next/link"
import ToDoItem from "@/components/ToDoItem"

// have this function here outside of Home component so that it can be used anywhere
function getToDos() {
  return prisma.todo.findMany()
}

async function toggleToDo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete } })
  // console.log(id, complete)
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
          New
        </Link>
        <Link
          href="/coffee"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Coffee
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <ToDoItem key={todo.id} toggleToDo={toggleToDo} {...todo}/>
        ))}
      </ul>
    </>
  )
}
