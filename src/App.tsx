import Dudes from "./components/dudes";
import ListComponent from "./components/listComponent";

const handleOnSelectItem = (item:string) => {
  alert(item)
}

function App() {
  const items = ["JavaScript", "PHP", "Python", "Swift"]
  const frameworks = ["Laravel", "Ruby on Rails", "Django"]

  return (
  <>
  <div className="flex flex-col justify-center items-center h-screen">
  <Dudes/>
  <ListComponent items={items} onSelectItem={handleOnSelectItem}>
    <h1 className="font-bold text-2xl mb-2">Programming Languages</h1>
  </ListComponent>
  <ListComponent items={frameworks} onSelectItem={handleOnSelectItem}>
    <h1 className="font-bold text-2xl mb-2">Programming Languages</h1>
  </ListComponent>
  </div>
  </>
  )
  
}

export default App;