function Languages() {
  let languages = ["Javascript", "PHP", "Python", "Swift"]

  return (
    <>
      <h1 className="text-2xl font-extrabold">Programming Languages</h1>
      <ul>
        {languages.map((language, index) => (
        <li key={index} onClick={() => alert(`Language is ${language}`)}>{language}</li>
        ))}
      </ul>

      <hr/>


      {languages.length > 0 ? <p>Total : {languages.length}</p> : <p>No Items</p>}
    </>
  )
}

export default Languages