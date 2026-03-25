function Languages() {
  const languages = ["Javascript", "PHP", "Python", "Swift"]

  const handleClick = (language) => {
    alert(`I am clicked! The language clicked was ${language}`)
  }
  return (
    <>
      <h1 className="text-2xl font-extrabold">Programming Languages</h1>
      <ul>
        {languages.map((language, index) => (
        <li key={index} onClick={() => handleClick(language)}>{language}</li>
        ))}
      </ul>

      <hr/>


      {languages.length > 0 ? <p>Total : {languages.length}</p> : <p>No Items</p>}
    </>
  )
}

export default Languages