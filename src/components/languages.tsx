import { useState  } from "react"
function Languages() {
  const languages = ["Javascript", "PHP", "Python", "Swift"]

  const [selectedItem, setSelectedItem] = useState(0)


  return (
    <>
      <h1 className="text-2xl font-extrabold">Programming Languages</h1>
      <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
        {languages.map((language, index) => (
        <li 
          key={index}
          className={selectedItem === index ? 'py-2 px-3 bg-gray-800 text-white' : 'py-2 px-3'}
          onClick={() => setSelectedItem(index)}
        >
          {language}
        </li>
        ))}
      </ul>

      <hr/>


      {languages.length > 0 ? <p>Total : {languages.length}</p> : <p>No Items</p>}
    </>
  )
}

export default Languages