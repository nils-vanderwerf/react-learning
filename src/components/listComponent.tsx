import { type ReactNode, useState } from "react"

interface Props {
  children: ReactNode
  items: string[]
  onSelectItem: (item: string) => void
}
const ListComponent = ({children, items, onSelectItem}: Props) => {
  const item = ["Javascript", "PHP", "Python", "Swift"]

  const [selectedItem, setSelectedItem] = useState(0)


  return (
    <>
      <h1 className="text-2xl font-extrabold">{children}</h1>
      <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
        {items.map((item, index) => (
        <li 
          key={index}
          className={selectedItem === index ? 'py-2 px-3 bg-gray-800 text-white' : 'py-2 px-3'}
          onClick={() => { 
            setSelectedItem(index)
            onSelectItem(item)
          }}
        >
          {item}
        </li>
        ))}
      </ul>

      <hr/>


      {item.length > 0 ? <p>Total : {item.length}</p> : <p>No Items</p>}
    </>
  )
}

export default ListComponent