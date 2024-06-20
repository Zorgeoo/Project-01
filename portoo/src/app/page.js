
import styles from "./page.module.css"
import { Card } from "./components/Card"
export default function Home() {
  const data = [{
    title: "hi guys",
    desc: "bye guys"
  },
  {
    title: "hi boys",
    desc: "bye boys"

  },
  {
    title: "hi gays",
    desc: "bye gays"
  }
  ]
  // const arr = new Array(10).fill(0);
  return (
    <div className="flex flex-col gap-10 m-12 w-100 overflow-hidden border-4 border-black rounded-xl shadow-2xl items-center">
      <div className="bg-fuchsia-950 text-white p-10 rounded-xl" >HELLLO</div>
      Easy
      <Card className="bg-amber-500" title="hello guys" />
      <Card title="hello girls" />
      {/* {data.map((item) => {
        return (
          <Card title={item.title} desc={item.desc} />
        )
      })} */}
      {/* {arr.map((item) => {
        return (
          <Card />
        )
      })
      } */}
    </div>
  )
}
