function Dudes() {
  const dudes = ["Kenneth", "Kenneth", "Nils", "Kevin"] 
  return (
  <>
  <h1>Handsome Dudes</h1>
  <ul>{dudes.map((dude, index) => <li key={index}>{dude}</li>)}</ul>  
  </> 
)
}

export default Dudes