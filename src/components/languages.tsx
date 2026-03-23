function Languages() {
  let languages = ["Javascript", "PHP", "Python", "Swift"]

  return (
    <>
      <h1>Programming Languages</h1>
      <ul>
        {languages.map((language, index) => (
        <li key={index}>{language}</li>
        ))}
      </ul>

      <hr/>


      {languages.length > 0 ? <p>Total : {languages.length}</p> : <p>No Items</p>}
    </>
  )
}

export default Languages