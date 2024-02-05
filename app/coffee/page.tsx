import Image from "next/image"
interface Coffee {
  id: number
  title: string
  ingredients: string
  image: string
}

async function getData() {
  const res = await fetch('https://api.sampleapis.com/coffee/hot', {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
  return await res.json()
}

export default async function Home() {
  const data = await getData()
  // console.log(data, 'data')
  return (
    <>
      <ul>
        {data.map((el: Coffee) => (
          <li key={el.id}>
            <h1><strong>{el.title}</strong></h1>
            <p>Ingredients:{el.ingredients}</p>
            <Image
              src={el.image}
              width={400}
              height={600}
              alt=''
            />
            <br />
          </li>
        ))}
      </ul>
    </>
  )
}
